// import { handleUpload, type HandleUploadBody } from '@vercel/blob/client';
// import { NextResponse } from 'next/server';
 
// export async function POST(request: Request): Promise<NextResponse> {
//   const body = (await request.json()) as HandleUploadBody;
 
//   try {
//     const jsonResponse = await handleUpload({
//       body,
//       request,
//       onBeforeGenerateToken: async (
//         pathname,
//       ) => {
 
//         return {
//           allowedContentTypes: ['image/jpeg', 'image/png', 'image/gif'],
//           addRandomSuffix: true,
//           tokenPayload: JSON.stringify({
//           }),
//         };
//       },
//       onUploadCompleted: async ({ blob, tokenPayload }) => {
 
//         console.log('blob upload completed', blob, tokenPayload);
 
//         try {

//         } catch (error) {
//           throw new Error('Could not update user');
//         }
//       },
//     });
 
//     return NextResponse.json(jsonResponse);
//   } catch (error) {
//     return NextResponse.json(
//       { error: (error as Error).message },
//       { status: 400 }, 
//     );
//   }
// }

import { handleUpload, type HandleUploadBody } from "@vercel/blob/client";
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: Request): Promise<NextResponse> {
  // body.fields akan berisi object yang kita kirim dari client
  const body = (await request.json()) as HandleUploadBody & {
    fields?: Record<string, any>;
  };
  

  try {
    const jsonResponse = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async () => {
        const fields = body.fields || {};
        return {
          allowedContentTypes: ["image/jpeg", "image/png", "image/gif"],
          addRandomSuffix: true,
          tokenPayload: JSON.stringify(fields),
        };
      },
      
      onUploadCompleted: async ({ blob, tokenPayload }) => {
        const fields = tokenPayload ? JSON.parse(tokenPayload) : {};
        // return NextResponse.json(fields);

        // simpan ke Neon Postgres
        await prisma.product.create({
          data: {
            name:         fields.names,
            type:         fields.type,
            address:      fields.address,
            rating:       parseFloat(fields.rating),
            price:        parseFloat(fields.price),
            discountFrom: parseFloat(fields.discountFrom),
            fee:          parseFloat(fields.fee),
            image:        blob.downloadUrl,
            fb:           fields.fb,
            tiktok:       fields.tiktok,
          },
        });
      },
    });

    return NextResponse.json(jsonResponse);
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 400 }
    );
  }
}
