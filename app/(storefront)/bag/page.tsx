import { checkOut, delItem, updateQuantity } from "@/app/actions";
import { CheckoutButton, DeleteItem } from "@/app/componets/SubmitButtons";
import { Cart } from "@/app/lib/interfaces";
import { redis } from "@/app/lib/redis";
import { Button } from "@/components/ui/button";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { ShoppingBag, Plus, Minus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function BagRoute() {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    if (!user) {
        redirect("/");
    }

    const cart: Cart | null = await redis.get(`cart-${user.id}`);
    let totalPrice = 0;

    cart?.items.forEach((item) => {
        totalPrice += item.price * item.quantity;
    });

    return (
        <div className="max-w-2xl mx-auto mt-10 min-h-[55vh]">
            {!cart || !cart.items ? (
                <div className="flex min-h-[400] flex-col justify-center rounded-lg items-center border-dshed p-8 text-center mt-20">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                        <ShoppingBag className="w-10 h-10 text-primary" />
                    </div>
                    <h2 className="my-6 text-xl font-semibold">You do not have any products in your bag</h2>
                    <p className="mb-8 mt-2 text-center text-sm leading-6 text-muted-foreground max-w-sm mx-auto">
                        You currently do not have any products in your shopping bag. Please add some so that you can view them here.
                    </p>
                    <Button>
                        <Link href="/">Shop Now!</Link>
                    </Button>
                </div>
            ) : (
                <div className="flex flex-col gap-y-10">
                    {cart?.items.map((item) => (
                        <div key={item.id} className="flex">
                            <div className="w-24 h-24 sm:w-32 relative mb-2">
                                <Image className="rounded-md object-cover" fill src={item.imageString} alt="Product Image" />
                            </div>
                            <div className="flex justify-between w-full font-medium">
                                <p>{item.name}</p>
                                <div className="flex flex-col h-full justify-between">
                                    <div className="flex items-center gap-x-2">
                                        <form action={updateQuantity} method="POST" className="flex items-center gap-x-2">
                                            <input type="hidden" name="productId" value={item.id} />
                                            <button type="submit" name="action" value="decrease" className="p-1 bg-gray-200 rounded-md hover:bg-gray-300">
                                                <Minus size={16} />
                                            </button>
                                            <p>{item.quantity}</p>
                                            <button type="submit" name="action" value="increase" className="p-1 bg-gray-200 rounded-md hover:bg-gray-300">
                                                <Plus size={16} />
                                            </button>
                                        </form>
                                        <p>£{item.price}</p>
                                    </div>
                                    <form action={delItem} className="text-end">
                                        <input type="hidden" name="productId" value={item.id} />
                                        <DeleteItem />
                                    </form>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="mt-10">
                        <div className="flex items-center justify-between font-medium">
                            <p>Subtotal:</p>
                            <p>£{new Intl.NumberFormat('en-US').format(totalPrice)}</p>
                        </div>
                        <form action={checkOut}>
                            <CheckoutButton />
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
