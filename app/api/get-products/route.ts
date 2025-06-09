
import { NextResponse } from "next/server";
import { prisma } from "@/utils/prisma";
import { Status_ } from "@prisma/client";

export async function GET() {
  try {
    const products = await prisma.product.findMany({
      orderBy: { createdAt: "desc" },
    });

    const grouped = Object.values(Status_).reduce((acc, status) => {
      acc[status] = [];
      return acc;
    }, {} as Record<Status_, typeof products>);

    for (const prod of products) {
      grouped[prod.status].push(prod);
    }

    return NextResponse.json({
      success: true,
      open: grouped[Status_.OPEN],
      terlaris: grouped[Status_.TERLARIS],
      terbaru: grouped[Status_.TERBARU],
      favorit: grouped[Status_.FAVORIT],
      flashsale: grouped[Status_.FLASHSALE],
    });
  } catch (err) {
    const msg = err instanceof Error ? err.message : "error";
    return NextResponse.json(
      { success: false, message: msg },
      { status: 500 }
    );
  }
}
