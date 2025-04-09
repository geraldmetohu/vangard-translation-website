"use server";

import { redirect } from "next/navigation";

// Removed prisma, zod, stripe, and kinde session imports since they are no longer in use

// Stubbed cart interface for reference
export interface Cart {
  userId: string;
  items: {
    id: string;
    name: string;
    price: number;
    quantity: number;
    imageString: string;
  }[];
}

// Dummy add item function - needs redis to be active to be used
export async function addItem(productId: string) {
  console.log("Add item triggered: ", productId);
  redirect("/");
}

// Dummy delete item function
export async function delItem(formData: FormData) {
  console.log("Delete item: ", formData.get("productId"));
  redirect("/");
}

// Dummy update quantity
export async function updateQuantity(formData: FormData) {
  console.log("Update item quantity: ", formData.get("productId"), formData.get("action"));
  redirect("/");
}

// If needed again later, functions for product or banner creation can be restored from Git history or backup.
