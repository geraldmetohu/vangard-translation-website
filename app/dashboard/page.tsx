import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";
import { DollarSign, PartyPopper, ShoppingBag, User2 } from "lucide-react";
import { prisma } from "../lib/db";
import { DashboardStats } from "../componets/dashboard/DashboardStats";
import { RecentSales } from "../componets/dashboard/RecentSales";
import { Chart } from "../componets/dashboard/Chart";

async function getData() {
    const now = new Date()
    const sevenDaysAgo = new Date()
    sevenDaysAgo.setDate(now.getDate() - 7)
    const data = await prisma.order.findMany({
        where: {
            createdAt:  {
                gte: sevenDaysAgo,
            },
        },
        select: {
            amount: true,
            createdAt: true,
        },
        orderBy: {
            createdAt: "asc",
        }
    });
    const result = data.map((item) => ({
        date: new Intl.DateTimeFormat(['ban','id']).format(item.createdAt),
        revenue: item.amount / 100,
    }));
    return result;
    
}
export default async function Dashboard() {
    const data = await getData();
    return(
        <>
        <DashboardStats/>
        <div className="grid gap-4 md:gp-8 lg:grid-cols-2 xl:grid-cols-3 mt-10">
            <Card className="xl:col-span-2">
                <CardHeader>
                    <CardTitle>Transaction</CardTitle>
                    <CardDescription>Recent Transaction from the last 7 days</CardDescription>
                </CardHeader>
                <CardContent>
                    <Chart data={data}/>
                </CardContent>
            </Card>
            <RecentSales />
        </div>
        </>

    )
}