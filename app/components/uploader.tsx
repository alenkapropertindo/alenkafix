"use client";

import { useState, type FormEvent } from "react";
import toast from "react-hot-toast";
import ProgressBar from "./progress-bar";

export default function Uploader() {
  const [preview, setPreview] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  // const [progress, setProgress] = useState(0);

  function reset() {
    setIsUploading(false);
    setFile(null);
    if (preview) {
      URL.revokeObjectURL(preview);
    }
    setPreview(null);
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!file) return;
    setIsUploading(true);
    const form = e.currentTarget;
    const formData = new FormData(form)
    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
      
      if (response.ok) {
        toast.success("Berhasil")
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : "Upload failed";
      toast.error(message);
    }finally{
      reset()
    }
  }

  function handleFileChange(file: File) {
    toast.dismiss();

    if (file.type.split("/")[0] !== "image") {
      toast.error("We only accept image files");
      return;
    }

    if (file.size / 1024 / 1024 > 50) {
      toast.error("File size too big (max 50MB)");
      return;
    }

    setFile(file);
    setPreview(URL.createObjectURL(file));
  }

  return (
    <div>
      <h1 className="pb-4 text-center text-2xl font-medium  text-slate-900 md:text-2xl">
        Form Tambah Data
      </h1>
      <form
        onSubmit={handleSubmit} encType="multipart/form-data"
        className="flex flex-col lg:flex-row gap-8 p-6 bg-gray-50 rounded-lg shadow-lg"
      >
        <div className="lg:w-1/2">
          <label
            htmlFor="image-upload"
            className="group relative flex h-80 w-full cursor-pointer flex-col items-center justify-center rounded-md border border-gray-300 bg-white shadow-sm hover:bg-gray-100 transition"
          >
            <div
              className="absolute inset-0 z-10"
              onDragOver={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setDragActive(true);
              }}
              onDragEnter={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setDragActive(true);
              }}
              onDragLeave={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setDragActive(false);
              }}
              onDrop={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setDragActive(false);
                const file = e.dataTransfer?.files?.[0];
                if (file) handleFileChange(file);
              }}
            />
            <div
              className={`absolute inset-0 z-20 flex flex-col items-center justify-center px-10 transition ${
                dragActive ? "border-2 border-gray-800" : ""
              } ${
                preview
                  ? "bg-white/70 opacity-0 hover:opacity-100 backdrop-blur-sm"
                  : "bg-white opacity-100 hover:bg-gray-100"
              } rounded-md`}
            >
              <svg
                className={`${
                  dragActive ? "scale-110" : "scale-100"
                } h-8 w-8 text-gray-500 transition-transform duration-100`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 14.9A7 7 0 1115.71 8h1.79a4.5 4.5 0 012.5 8.242" />
                <path d="M12 12v9" />
                <path d="m16 16-4-4-4 4" />
              </svg>
              <p className="mt-2 text-center text-sm text-gray-500">
                Drag & drop or click to upload
              </p>
              <p className="text-xs text-gray-400">Max size: 50MB</p>
              <span className="sr-only">Photo upload</span>
            </div>
            {preview && (
              <img
                src={preview}
                alt="Preview"
                className="absolute inset-0 z-0 h-full w-full rounded-md object-cover"
              />
            )}
            <input
              id="image-upload"
              type="file"
              name="file"
              accept="image/*"
              className="sr-only"
              onChange={(e) =>
                e.currentTarget.files &&
                handleFileChange(e.currentTarget.files[0])
              }
            />
          </label>
        </div>

        <div className="lg:w-1/2 flex flex-col justify-between text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              className="w-full border rounded-md p-2 focus:ring focus:ring-gray-300"
              type="text"
              name="name"
              placeholder="Nama Perumahan"
            />
            <>
            <select
              id="type"
              name="type"
              className="w-full border rounded-md p-2 focus:ring focus:ring-gray-300"
            >
              <option value="" disabled>-- Pilih Tipe --</option>
              <option value="SUBSIDI">SUBSIDI</option>
              <option value="KOMERSIL">KOMERSIL</option>
              <option value="KOST">KOST</option>
              <option value="SEWA">SEWA</option>
            </select>
            </>
            <>
            <select
              id="district"
              name="district"
              className="w-full border rounded-md p-2 focus:ring focus:ring-gray-300"
            >
              <option value="" disabled>-- Pilih Kecamatan --</option>
              <option value="Abeli">Abeli</option>
              <option value="Baruga">Baruga</option>
              <option value="Kadia">Kadia</option>
              <option value="Kambu">Kambu</option>
              <option value="Kendari">Kendari</option>
              <option value="Kendari Barat">Kendari Barat</option>
              <option value="Mandonga">Mandonga</option>
              <option value="Nambo">Nambo</option>
              <option value="Poasia">Poasia</option>
              <option value="Puuwatu">Puuwatu</option>
              <option value="Wua-Wua">Wua-Wua</option>
            </select>
            </>
            <input
              className="w-full border rounded-md p-2 focus:ring focus:ring-gray-300"
              type="text"
              name="address"
              placeholder="Alamat"
              required
            />
            <input
              className="w-full border rounded-md p-2 focus:ring focus:ring-gray-300"
              type="number"
              name="rating"
              placeholder="Rating"
              defaultValue={4}
              required
            />
            <input
              className="w-full border rounded-md p-2 focus:ring focus:ring-gray-300"
              type="number"
              name="price"
              placeholder="DP+Akad"
              required
            />
            
            <input
              className="w-full border rounded-md p-2 focus:ring focus:ring-gray-300"
              type="number"
              name="discountFrom"
              placeholder="Harga Coret"
              required
            />
            <input
              className="w-full border rounded-md p-2 focus:ring focus:ring-gray-300"
              type="number"
              name="fee"
              placeholder="Fee"
              required
            />
            <input
              className="w-full border rounded-md p-2 focus:ring focus:ring-gray-300"
              type="text"
              name="fb"
              placeholder="Link Facebook"
              required
            />
            <input
              className="w-full border rounded-md p-2 focus:ring focus:ring-gray-300"
              type="text"
              name="tiktok"
              placeholder="Link Tiktok"
              required
            />
          </div>

          <div className="space-y-4 mt-6">
            {/* {isUploading && <ProgressBar value={progress} />} */}

            <button
              type="submit"
              disabled={isUploading || !file}
              className="w-full py-3 rounded-md border border-black bg-black text-white hover:bg-white hover:text-black disabled:opacity-50 transition"
            >
              Upload
            </button>

            <button
              type="reset"
              onClick={reset}
              disabled={isUploading || !file}
              className="w-full py-3 rounded-md border border-gray-300 bg-gray-100 text-gray-700 hover:bg-amber-100 disabled:opacity-50 transition"
            >
              Reset
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
