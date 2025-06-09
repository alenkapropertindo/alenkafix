"use client";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {

  return (
    <div className="w-full">
      <div className="w-full relative  min-h-[600px] ">
        <Image
          src="/cta-banner1.png"
          alt="Hero Banner"
          fill
          sizes="100vw"
          className="object-cover object-right lg:object-bottom"
          priority
        />

        <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-start pt-20 md:pt-40 p-4">
          {/* Promo */}
          <div className="bg-[#ffffff7b] min-w-[270px] sm:min-w-[300px] md:min-w-[500px] rounded-xl py-6 sm:px-8 px-4 grid place-items-center gap-3 mb-8">
            <h2 className="font-extrabold text-xl md:text-xl text-[#272727] text-center">
              DAPATKAN PROMO MENARIK SETIAP HARI
            </h2>
            <p className="text-gray-600 text-base md:text-lg text-center">
              DP Mulai 1Jt-an{" "}
              <Link
                href={"https://wa.me/6285242049550"}
                className="bg-[#00c194] text-sm md:text-base hover:bg-[#00a37d] py-2 px-4 rounded-md text-white transition-colors duration-200"
              >
                Hubungi Admin
              </Link>
            </p>
          </div>

          <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-xl shadow-2xl w-full max-w-4xl p-4 mx-4 text-xs">
            <form className="flex flex-col md:flex-row gap-3">

              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Cari properti..."
                  className="w-full p-2 pl-3 pr-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00c194] text-xs"
                />
                <svg
                  className="absolute right-3 top-2.5 h-4 w-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>

              <button
                type="submit"
                className="w-full md:w-auto px-6 py-2 bg-[#00c194] hover:bg-[#00a37d] text-white font-medium rounded-md transition-colors duration-200 text-xs"
              >
                Cari
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
