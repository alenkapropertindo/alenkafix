import React from "react";

export default function Hero() {
  return (
   <div>
      <div className="container pt-5 ">
        <div className="bg-[url(/cta-banner1.png)] bg-cover bg-left lg:bg-right  h-[500px] rounded-2xl grid place-items-center">
          <div className="bg-[#ffffff7b] min-w-[270px] sm:min-w-[300px] md:min-w-[500px] rounded-xl py-8 sm:px-8 px-2 grid place-items-center gap-3">
            <h2 className="font-extrabold text-2xl text-[#272727]">
              DAPATKAN PROMO MENARIK SETIAP HARI
            </h2>
            <p className="text-gray-500 text-[20px]">
              DP Mulai 1Jt-an{" "}
              <button className="bg-orange-500 text-xl cursor-pointer hover:bg-red-300 py-2 px-2 rounded-md text-white">
                Hubungi Admin
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}