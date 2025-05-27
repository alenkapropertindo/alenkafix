"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaTiktok, FaFacebook, FaRegHeart, FaHeart } from "react-icons/fa";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { TiMessageTyping } from "react-icons/ti";
import Link from "next/link";
import { propsType } from "@/types/interface";

const ProductCard: React.FC<propsType> = ({
  img,
  title,
  rating,
  price,
  linkFacebook,
  linkTiktok,
  hargaCoret,
}) => {
  const [isLoved, setIsLoved] = useState(false);
  let discount = Number(hargaCoret) - Number(price);
  discount = (discount / Number(hargaCoret)) * 100;

  const generateRating = (rating: number) => {
    switch (rating) {
      case 1:
        return (
          <div className="flex gap-1 text-[20px] text-[#FF9529]">
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 2:
        return (
          <div className="flex gap-1 text-[20px] text-[#FF9529]">
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 3:
        return (
          <div className="flex gap-1 text-[20px] text-[#FF9529]">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 4:
        return (
          <div className="flex gap-1 text-[20px] text-[#FF9529]">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </div>
        );
      case 5:
        return (
          <div className="flex gap-1 text-[20px] text-[#FF9529]">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
        );

      default:
        return null;
    }
  };
  return (
    <div className="border border-gray-200 rounded-xl max-w-[800px]">
      <div className="relative">
        <Image
          className="w-full h-auto rounded-t-xl"
          src={img}
          width={800}
          height={600}
          alt={title}
        />
      </div>

      <div className="p-4 space-y-3">
        <div className="flex justify-between items-center">
          <span className="bg-red-500 text-white px-2 py-1 rounded text-xs">
            Upto {Math.ceil(discount) ?? "70 "}% Off
          </span>
          <button onClick={() => setIsLoved(!isLoved)} className="text-xl">
            {isLoved ? (
              <FaHeart className="text-red-500" />
            ) : (
              <FaRegHeart className="text-gray-400" />
            )}
          </button>
        </div>

        <h2 className="font-bold text-lg">{title}</h2>

        <div className="flex items-center gap-2">
          {generateRating(rating)}
          <span className="text-gray-500 text-sm">(80% penuh)</span>
        </div>

        <div className="flex w-full gap-3">
          <a
            href={linkTiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-1 text-slate-700 border border-slate-300 hover:bg-slate-100 px-3 py-2 rounded-lg transition-colors"
          >
            <FaTiktok />
            <span className="text-xs">Tiktok</span>
          </a>

          <a
            href={linkFacebook}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-1 text-slate-700 border border-slate-300 hover:bg-slate-100 px-3 py-2 rounded-lg transition-colors"
          >
            <FaFacebook />
            <span className="text-xs">Facebook</span>
          </a>
        </div>
        <div className="flex w-full gap-3">
          <Link
            href={`detail/${title}`}
            className="w-full flex items-center justify-center gap-1 text-slate-700 border border-slate-300 hover:bg-slate-100 px-3 py-2 rounded-lg transition-colors"
          >
            {/* <FaFacebook /> */}
            <span className="text-xs">Lihat Detail</span>
          </Link>
        </div>

        <div className="pt-2">
          <p className="text-sm text-gray-500 mb-1">
            DP + Akad Mulai dari{" "}
            <del className="text-red-500 font-medium ">
              Rp. {Number(hargaCoret).toLocaleString("id-ID")}
            </del>
          </p>
          <div className="flex justify-between items-center">
            <span className="font-bold text-lg">
              Rp. {Number(price).toLocaleString("id-ID")}
            </span>
            <a
              href={`https://wa.me/6285242049550?text=${encodeURIComponent(
                `Halo, Saya minat perumahan ${title}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#00c194] hover:bg-[#00a87f] text-white flex items-center gap-2 px-4 py-2 rounded-lg transition-colors"
            >
              <TiMessageTyping className="text-lg" />
              <span className="text-sm">Hubungi Admin</span>
            </a>
            {/* <Link
              href={`https://wa.me/6285242049550?text=Halo, Saya minat perumahan ${title}`}
              className="bg-[#00c194] hover:bg-[#00a87f] text-white flex items-center gap-2 px-4 py-2 rounded-lg transition-colors"
            >
              <TiMessageTyping className="text-lg" />
              <span className="text-sm">Hubungi Admin</span>
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
