"use client"
// import Image from "next/image";
// import React from "react";
// import { FaTiktok, FaEye, FaFacebook } from "react-icons/fa";
// import { AiFillStar, AiOutlineStar } from "react-icons/ai";
// import { TiMessageTyping } from "react-icons/ti";
// import Link from "next/link";
// import { propsType } from "@/types/interface";
// const ProductCard: React.FC<propsType> = ({
//   image,
//   title,
//   rating,
//   price,
//   linkAdmin,
//   linkFacebook,
//   linkTiktok,
//   hargaCoret,
//   linkDetail,
// }) => {
  // const generateRating = (rating: number) => {
  //   switch (rating) {
  //     case 1:
  //       return (
  //         <div className="flex gap-1 text-[20px] text-[#FF9529]">
  //           <AiFillStar />
  //           <AiOutlineStar />
  //           <AiOutlineStar />
  //           <AiOutlineStar />
  //           <AiOutlineStar />
  //         </div>
  //       );
  //     case 2:
  //       return (
  //         <div className="flex gap-1 text-[20px] text-[#FF9529]">
  //           <AiFillStar />
  //           <AiFillStar />
  //           <AiOutlineStar />
  //           <AiOutlineStar />
  //           <AiOutlineStar />
  //         </div>
  //       );
  //     case 3:
  //       return (
  //         <div className="flex gap-1 text-[20px] text-[#FF9529]">
  //           <AiFillStar />
  //           <AiFillStar />
  //           <AiFillStar />
  //           <AiOutlineStar />
  //           <AiOutlineStar />
  //         </div>
  //       );
  //     case 4:
  //       return (
  //         <div className="flex gap-1 text-[20px] text-[#FF9529]">
  //           <AiFillStar />
  //           <AiFillStar />
  //           <AiFillStar />
  //           <AiFillStar />
  //           <AiOutlineStar />
  //         </div>
  //       );
  //     case 5:
  //       return (
  //         <div className="flex gap-1 text-[20px] text-[#FF9529]">
  //           <AiFillStar />
  //           <AiFillStar />
  //           <AiFillStar />
  //           <AiFillStar />
  //           <AiFillStar />
  //         </div>
  //       );

  //     default:
  //       return null;
  //   }
  // };

//   return (
//     <div className=" border border-gray-200 rounded-xl max-w-[800px]">
//       <div>
//         <Image
//           className="w-full h-auto"
//           src={image}
//           width={200}
//           height={300}
//           alt={title}
//         />
//       </div>

//       <div className=" px-2 space-y-2 py-2">
//         <div>{generateRating(rating)}</div>

//         <div className="font-bold text-sm flex gap-4">
//           DP+Akad Mulai Rp{price}
//           <del className="text-red-500 font-medium ">{hargaCoret}</del>
//         </div>
//         <div>
//           <Link
//             className=" w-full text-xs  px-0 justify-center flex font-semibold text-slate-800  border-2 border-slate-800 hover:text-white hover:bg-slate-800 py-2 rounded-md tracking-wider transition"
//             href={` ${linkTiktok}`}
//           >
//             Kunjungi Tiktok
//             <FaTiktok className="ml-2" />
//           </Link>
//         </div>
//         <Link
//           className="w-full text-xs  px-0 justify-center flex font-semibold text-slate-800  border-2 border-slate-800 hover:text-white hover:bg-slate-800 py-2 rounded-md tracking-wider transition"
//           href={` ${linkFacebook}`}
//         >
//           Kunjungi Facebook
//           <FaFacebook className="ml-2" />
//         </Link>

//         <div className="mt-5 flex items-center gap-x-3">
//           <Link
//             className=" w-full text-xs  px-0 justify-center flex font-semibold text-slate-800  border-2 border-slate-800 hover:text-white hover:bg-slate-800 py-2 rounded-md tracking-wider transition"
//             href={` ${linkDetail}`}
//           >
//             Lihat Detail
//             <FaEye className="ml-2 size-4" />
//           </Link>
//           <Link
//             className=" w-full text-xs  px-0 justify-center flex font-semibold text-slate-800  border-2 border-slate-800 hover:text-white hover:bg-slate-800 py-2 rounded-md tracking-wider transition"
//             href={` ${linkAdmin}`}
//           >
//             Hubungi Admin
//             <TiMessageTyping className="ml-2 size-4" />
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;
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
  linkAdmin,
  linkFacebook,
  linkTiktok,
  discountLabel,
}) => {
  const [isLoved, setIsLoved] = useState(false);

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
  // return (
  //   <div className="border border-gray-200 rounded-xl max-w-[800px]">
  //     {/* Product Image */}
  //     <div className="relative">
  //       <Image
  //         className="w-full h-auto rounded-t-xl"
  //         src={img}
  //         width={800}
  //         height={600}
  //         alt={title}
  //       />
  //     </div>

  //     <div className="p-4 space-y-3">
  //       {/* Discount Label dan Love Button */}
  //       <div className="flex justify-between items-center">
  //         <span className="bg-red-500 text-white px-2 py-1 rounded text-xs">
  //           {discountLabel??"Upto 70% off"}
  //         </span>
  //         <button onClick={() => setIsLoved(!isLoved)} className="text-xl">
  //           {isLoved ? (
  //             <FaHeart className="text-red-500" />
  //           ) : (
  //             <FaRegHeart className="text-gray-400" />
  //           )}
  //         </button>
  //       </div>

  //       {/* Product Title */}
  //       <h2 className="font-bold text-lg">{title}</h2>

  //       {/* Rating Stars */}
  //       <div>{generateRating(rating)}</div>

  //       {/* Social Media Buttons */}
  //       <div className="flex justify-end gap-3">
  //         <Link
  //           href={linkTiktok}
  //           className="flex items-center gap-1 text-slate-700 border border-slate-300 hover:bg-slate-100 px-3 py-1 rounded-lg transition-colors"
  //         >
  //           <FaTiktok />
  //           <span className="text-xs">Tiktok</span>
  //         </Link>
  //         <Link
  //           href={linkFacebook}
  //           className="flex items-center gap-1 text-slate-700 border border-slate-300 hover:bg-slate-100 px-3 py-1 rounded-lg transition-colors"
  //         >
  //           <FaFacebook />
  //           <span className="text-xs">Facebook</span>
  //         </Link>
  //       </div>

  //       {/* Price Section */}
  //       <div className="pt-2">
  //         <p className="text-xs text-gray-500 mb-1">DP + Akad Mulai dari</p>
  //         <div className="flex justify-between items-center">
  //           <span className="font-bold text-xl">Rp{price}</span>
  //           <Link
  //             href={linkAdmin}
  //             className="bg-green-500 hover:bg-green-600 text-white flex items-center gap-2 px-4 py-2 rounded-lg transition-colors"
  //           >
  //             <TiMessageTyping className="text-lg" />
  //             <span className="text-sm">Pesan</span>
  //           </Link>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
  return (
  <div className="border border-gray-200 rounded-xl max-w-[800px]">
    {/* Product Image */}
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
      {/* Discount Label dan Love Button */}
      <div className="flex justify-between items-center">
        <span className="bg-red-500 text-white px-2 py-1 rounded text-xs">
          {discountLabel ?? "Upto 70% off"}
        </span>
        <button onClick={() => setIsLoved(!isLoved)} className="text-xl">
          {isLoved ? (
            <FaHeart className="text-red-500" />
          ) : (
            <FaRegHeart className="text-gray-400" />
          )}
        </button>
      </div>

      {/* Product Title */}
      <h2 className="font-bold text-lg">{title}</h2>

      {/* Rating Stars dan Persentase */}
      <div className="flex items-center gap-2">
        {generateRating(rating)}
        <span className="text-gray-500 text-sm">(80% penuh)</span>
      </div>

      {/* Social Media Buttons Full Width */}
      <div className="flex w-full gap-3">
        <Link
          href={linkTiktok}
          className="w-full flex items-center justify-center gap-1 text-slate-700 border border-slate-300 hover:bg-slate-100 px-3 py-2 rounded-lg transition-colors"
        >
          <FaTiktok />
          <span className="text-xs">Tiktok</span>
        </Link>
        <Link
          href={linkFacebook}
          className="w-full flex items-center justify-center gap-1 text-slate-700 border border-slate-300 hover:bg-slate-100 px-3 py-2 rounded-lg transition-colors"
        >
          <FaFacebook />
          <span className="text-xs">Facebook</span>
        </Link>
      </div>

      {/* Price Section */}
      <div className="pt-2">
        <p className="text-xs text-gray-500 mb-1">DP + Akad Mulai dari</p>
        <div className="flex justify-between items-center">
          <span className="font-bold text-xl">Rp{price}</span>
          <Link
            href={linkAdmin}
            className="bg-[#00c194] hover:bg-[#00a87f] text-white flex items-center gap-2 px-4 py-2 rounded-lg transition-colors"
          >
            <TiMessageTyping className="text-lg" />
            <span className="text-sm">Hubungi Admin</span>
          </Link>
        </div>
      </div>
    </div>
  </div>
);
};

export default ProductCard;