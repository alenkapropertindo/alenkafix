import { NextResponse } from "next/server";
import { PrismaClient, Type } from "@prisma/client";
import { put } from "@vercel/blob";
import { z } from "zod";

const prisma = new PrismaClient();
export const config = {
  api: {
    bodyParser: false,
  },
};

const ProductSchema = z.object({
  name: z.string(),
  address: z.string(),
  type: z.nativeEnum(Type),
  district: z.string(),
  rating: z.coerce.number(),
  price: z.coerce.number(),
  fee: z.coerce.number(),
  discountFrom: z.coerce.number(),
  fb: z.string(),
  tiktok: z.string(),
  image: z.string(),
});

export async function POST(request: Request) {
  const formData = await request.formData();
  
  const file = formData.get("file") as File | null;

  if (!file) {
    return NextResponse.json({ success: false, message: "File tidak ditemukan" });
  }

  try {
    const { url } = await put(file.name, file, {
      access: "public",
      allowOverwrite: true,
    });
    const parsed = ProductSchema.parse({ 
  ...Object.fromEntries(formData.entries()), 
  image: url,
  status: "OPEN",
});
// console.log(formData.get("district"))
// console.log(parsed)

    await prisma.product.create({ data: parsed });

    return NextResponse.json({ success: true, message: "Berhasil" });
  } catch (err) {
    const message =
      err instanceof z.ZodError
        ? err.errors.map((e) => `${e.path.join(".")}: ${e.message}`).join("; ")
        : err instanceof Error
        ? err.message
        : "Terjadi kesalahan";
    return NextResponse.json({ success: false, message });
  }
}
