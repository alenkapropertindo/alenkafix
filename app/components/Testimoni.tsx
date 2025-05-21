import Image from "next/image";
import React from "react";

const Testimoni = () => {
  return (
    <div>
      <div className="container py-10">
        <div className="border  border-gray-300 rounded-2xl grid place-items-center p-6 lg:p-0">
          <div className="text-center flex flex-col items-center gap-1">
            <Image
              className="rounded-full inline-block"
              src="/user.jpg"
              width={80}
              height={80}
              alt="dp"
            />
            <h2 className="text-gray-500 font-black text-[20px]">Dewi</h2>
            <p>User Bumi Anawai Land</p>
            <Image
              className="inline-block py-2"
              src="/quotes.svg"
              width={30}
              height={30}
              alt="quotes"
            />
            <p className="max-w-[200px] text-gray-500">
              Di Alenka transaksi lebih aman karena dikelola langsung oleh
              marketing resmi perumahan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimoni;
