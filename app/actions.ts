"use server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import {parseWithZod} from "@conform-to/zod"
import { bannerSchema, ProductSchema } from "./lib/zodSchemas";
import { prisma } from "./lib/db";
import exp from "constants";
import { redis } from "./lib/redis";
import { Cart } from "./lib/interfaces";
import { revalidatePath } from "next/cache";
import { stripe } from "./lib/stripe";
import Stripe from "stripe";

export async function CreateProduct(prevState: unknown,formData: FormData) {
    const { getUser} = getKindeServerSession();
    const user = await getUser();

    if(!user || user.email !== "geraldmetohu@gmail.com"){
        return redirect("/");
    }

    const submission = parseWithZod(formData, {
        schema: ProductSchema,
    });

    if(submission.status !== "success") {
        return submission.reply();
    }
    const flattenUrls = submission.value.images.flatMap((urlString) => urlString.split(",").map((url) => url.trim()));

    await prisma.product.create({
        data: {
            name: submission.value.name,
            description: submission.value.description,
            status: submission.value.status,
            price: submission.value.price,
            images: flattenUrls,
            category: submission.value.category,
            isFeatured: submission.value.isFeatured === true ? true: false,
        },
    });

    redirect("/dashboard/products");
}

export async function EditProduct(prevState: any,formData: FormData ) {
    const { getUser} = getKindeServerSession();
    const user = await getUser();

    if(!user || user.email !== "geraldmetohu@gmail.com"){
        return redirect("/");
    }
    const submission = parseWithZod(formData, {
        schema: ProductSchema,
    });

    if(submission.status !=="success") {
        return submission.reply();
    }

    const flattenUrls = submission.value.images.flatMap((urlString) => urlString.split(",").map((url) => url.trim()));

    const productId = formData.get("productId") as string;
    await prisma.product.update({
        where: {
            id: productId
        },
        data: {
            name: submission.value.name,
            description: submission.value.description,
            category: submission.value.category,
            status: submission.value.status,
            isFeatured: submission.value.isFeatured === true ? true: false,
            price: submission.value.price,
            images: flattenUrls,
        }
    });

    redirect("/dashboard/products");

}

export async function DeleteProduct(formData: FormData) {
    const { getUser} = getKindeServerSession();
    const user = await getUser();

    if(!user || user.email !== "geraldmetohu@gmail.com"){
        return redirect("/");
    }
        // ✅ Get the productId safely
    const productId = formData.get("productId") as string;

    // ✅ Add a check to prevent null errors
    if (!productId) {
        throw new Error("Product ID is missing");
    }

    await prisma.product.delete({
        where: {
            id: productId,
        },
    });

    redirect("/dashboard/products");
    
}

export async function CreateBanner(prevState: any, formData: FormData) {
    const { getUser} = getKindeServerSession();
    const user = await getUser();

    if(!user || user.email !== "geraldmetohu@gmail.com"){
        return redirect("/");
    }

    const submission = parseWithZod(formData, {
        schema: bannerSchema,
    });

    if(submission.status !== "success") {
        return submission.reply();
    }

    await prisma.banner.create({
        data: {
            title: submission.value.title,
            imageString: submission.value.imageString
        },
    });

    redirect("/dashboard/banner");

}

export async function DeleteBanner (formData: FormData) {
    const { getUser} = getKindeServerSession();
    const user = await getUser();

    if(!user || user.email !== "geraldmetohu@gmail.com"){
        return redirect("/");
    }

    await prisma.banner.delete({
        where: {
            id: formData.get("bannerId") as string,
        },
    });
    redirect("/dashboard/banner");
}
    
export async function addItem(productId: string){
    const {getUser} = getKindeServerSession();
    const user = await getUser();

    if(!user ){
        return redirect("/");
    }

    let cart: Cart | null = await redis.get(`cart-${user.id}`);

    const selectedProduct = await prisma.product.findUnique({
        select: {
            id: true,
            name: true,
            price: true,
            images: true,
        },
        where: {
            id: productId,
        },
    });

    if(!selectedProduct) {
        throw new Error("No Product with this Id")
    }

    let myCart = {} as Cart;
    if(!cart || !cart.items){
        myCart = {
            userId: user.id,
            items: [
                {
                    price: selectedProduct.price,
                    id: selectedProduct.id,
                    imageString: selectedProduct.images[0],
                    name: selectedProduct.name,
                    quantity: 1
                },
            ],
        };
    } else {
        let itemFound = false;

        myCart.items = cart.items.map((item) => {
            if(item.id === productId){
                itemFound = true;
                item.quantity += 1;
            }

            return item;
        });


        if(!itemFound) {
            myCart.items.push({
                id: selectedProduct.id,
                imageString: selectedProduct.images[0],
                name: selectedProduct.name,
                price: selectedProduct.price,
                quantity: 1,
            });
        }
    }
    await redis.set(`cart-${user.id}`,myCart);

    revalidatePath("/","layout")
}


export async function delItem(formData: FormData) {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    if(!user) {
        return redirect('/');
    }

    const productId = formData.get('productId');

    let cart: Cart | null = await redis.get(`cart-${user.id}`);
    
    if(cart && cart.items) {
        const updateCart: Cart = {
            userId: user.id,
            items: cart.items.filter((item) => item.id !== productId),
        };
   
        await redis.set(`cart-${user.id}`, updateCart);

    }
    revalidatePath("/bag");
    
}

export async function checkOut() {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    if(!user) {
        return redirect('/');
    }

    let cart: Cart | null = await redis.get(`cart-${user.id}`);

    if(cart && cart.items){
        const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = cart.items.map((item) => (
            {
                price_data: {
                    currency: "gbp",
                    unit_amount: item.price * 100,
                    product_data: {
                        name: item.name,
                        images: [item.imageString]
                    },
                },
                quantity: item.quantity
            }
        ));
        const session = await stripe.checkout.sessions.create({
            mode: "payment",
            line_items: lineItems,
            success_url: "http://localhost:3000/payment/success",
            cancel_url: "http://localhost:3000/payment/cancel",
            metadata: {
                userId: user.id,
            }
        });

        return redirect(session.url as string);
    }

}

export async function updateQuantity(formData: FormData) {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    if (!user) {
        return redirect("/");
    }

    const productId = formData.get("productId") as string;
    const action = formData.get("action") as string;

    let cart: Cart | null = await redis.get(`cart-${user.id}`);

    if (cart && cart.items) {
        cart.items = cart.items.map((item) => {
            if (item.id === productId) {
                if (action === "increase") {
                    item.quantity += 1;
                } else if (action === "decrease" && item.quantity > 1) {
                    item.quantity -= 1;
                }
            }
            return item;
        });

        await redis.set(`cart-${user.id}`, cart);
    }

    revalidatePath("/bag");
}
