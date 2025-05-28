// "use client";

// import { type PutBlobResult } from "@vercel/blob";
// import { upload } from "@vercel/blob/client";
// import { useState, useRef } from "react";

// export default function AvatarUploadPage() {
//   const inputFileRef = useRef<HTMLInputElement>(null);
//   const [blob, setBlob] = useState<PutBlobResult | null>(null);
//   return (
//     <>
//       <h1>Upload Your Image</h1>

//       <form
//         onSubmit={async (event) => {
//           event.preventDefault();

//           if (!inputFileRef.current?.files) {
//             throw new Error("No file selected");
//           }

//           const file = inputFileRef.current.files[0];

//           const newBlob = await upload(file.name, file, {
//             access: "public",
//             handleUploadUrl: "/api/upload",
//           });

//           setBlob(newBlob);
//         }}
//       >
//         <input name="file" ref={inputFileRef} type="file" required />
//         <button className=" cursor-pointer" type="submit">
//           Upload
//         </button>
//       </form>
//       {blob && (
//         <div>
//           Blob url: <a href={blob.url}>{blob.url}</a>
//         </div>
//       )}
//     </>
//   );
// }

import Uploader from "../../components/uploader";
import { Toaster } from "../../components/ui/toaster";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">
      <Toaster />

      <div className="bg-white/30 p-12 shadow-xl ring-1 ring-gray-900/5 rounded-lg backdrop-blur-lg max-w-4xl mx-auto w-full">
        <Uploader />
      </div>
    </main>
  );
}
