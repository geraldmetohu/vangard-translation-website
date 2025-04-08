import { LoadingProductCart } from "@/app/componets/storefront/ProductCard";
import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingFile() {
    
    return (
        <div>
            <Skeleton className="h-10 w-65 my-5"/>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                <LoadingProductCart />
                <LoadingProductCart />
                <LoadingProductCart />
                <LoadingProductCart />
                <LoadingProductCart />
                <LoadingProductCart />
                <LoadingProductCart />
                <LoadingProductCart />
                <LoadingProductCart />
                <LoadingProductCart />
                <LoadingProductCart />
            </div>
        </div>
    )
}