import {z} from "zod"

export const ProductSchema = z.object({
    name: z.string(),
    description: z.string(),
    status: z.enum(["draft", "published", "archived"]),
    price: z.number().min(0),
    images: z.array(z.string()).min(1, "At least one image is required"),
    category: z.enum(["male", "female"]),
    isFeatured: z.boolean().optional(),
});

export const bannerSchema = z.object({
    title: z.string(),
    imageString: z.string(),
});