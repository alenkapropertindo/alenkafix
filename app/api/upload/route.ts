
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { put } from "@vercel/blob";

const prisma = new PrismaClient();
export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(request: Request): Promise<NextResponse> {
  const formData = await request.formData()
  // console.log(body)
  const file = formData.get('file') as File;
  const { url } = await put(file.name, file, { access: 'public' ,allowOverwrite:true});

    const result = await prisma.product.create({
      data: {
        // ...payload,
        name: formData.get('names') as string,
        address: formData.get('address') as string,
        rating: parseFloat(formData.get('rating') as string),
        price: parseFloat(formData.get('price') as string),
        fee: parseFloat(formData.get('fee') as string),
        discountFrom: parseFloat(formData.get('discountFrom') as string),
        fb: formData.get('fb') as string,
        tiktok: formData.get('tiktok') as string,
        // ...payload,
        image: url
      }
    });

    return NextResponse.json(result);
}
