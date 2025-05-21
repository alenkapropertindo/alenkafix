import Image from "next/image";
import React from "react";
import { FaTiktok, FaEye, FaFacebook } from "react-icons/fa";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { TiMessageTyping } from "react-icons/ti";
import Link from "next/link";

interface propsType {
  img: string;
  title: string;
  desc: string;
  rating: number;
  price: string;
  linkAdmin: String;
  linkFacebook: String;
  linkTiktok: String;
  linkDetail: String;
  hargaCoret: String;
}

const ProductCard: React.FC<propsType> = ({
  img,
  title,
  rating,
  price,
  linkAdmin,
  linkFacebook,
  linkTiktok,
  hargaCoret,
  linkDetail,
}) => {
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
    <div className=" border border-gray-200 rounded-xl max-w-[800px]">
      <div>
        <Image
          className="w-full h-auto"
          src={img}
          width={200}
          height={300}
          alt={title}
        />
      </div>

      <div className=" px-2 space-y-2 py-2">
        <div>{generateRating(rating)}</div>

        <div className="font-bold text-sm flex gap-4">
          DP+Akad Mulai Rp{price}
          <del className="text-red-500 font-medium ">{hargaCoret}</del>
        </div>
        <div>
          <Link
            className=" w-full text-xs  px-0 justify-center flex font-semibold text-slate-800  border-2 border-slate-800 hover:text-white hover:bg-slate-800 py-2 rounded-md tracking-wider transition"
            href={` ${linkTiktok}`}
          >
            Kunjungi Tiktok
            <FaTiktok className="ml-2" />
          </Link>
        </div>
        <Link
          className="w-full text-xs  px-0 justify-center flex font-semibold text-slate-800  border-2 border-slate-800 hover:text-white hover:bg-slate-800 py-2 rounded-md tracking-wider transition"
          href={` ${linkFacebook}`}
        >
          Kunjungi Facebook
          <FaFacebook className="ml-2" />
        </Link>

        <div className="mt-5 flex items-center gap-x-3">
          <Link
            className=" w-full text-xs  px-0 justify-center flex font-semibold text-slate-800  border-2 border-slate-800 hover:text-white hover:bg-slate-800 py-2 rounded-md tracking-wider transition"
            href={` ${linkDetail}`}
          >
            Lihat Detail
            <FaEye className="ml-2 size-4" />
          </Link>
          <Link
            className=" w-full text-xs  px-0 justify-center flex font-semibold text-slate-800  border-2 border-slate-800 hover:text-white hover:bg-slate-800 py-2 rounded-md tracking-wider transition"
            href={` ${linkAdmin}`}
          >
            Hubungi Admin
            <TiMessageTyping className="ml-2 size-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
