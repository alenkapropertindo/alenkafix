import React from "react";
import ProductCard from "./ProductCard";
import { productTerlaris } from "@/actions/get-property";

export default function UnitTerlaris() {
  return (
    <div>
      <div className=" container pt-10 mx-auto px-10">
        <h2 className="font-medium text-2xl pb-4">Unit Terlaris</h2>

        <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 gap-8 xl:gap-x-8 xl:gap-y-10">
          {productTerlaris.map((item, index) => (
            <ProductCard
              key={index}
              img={item.img}
              title={item.title}
              desc={item.desc}
              rating={item.rating}
              price={item.price}
              linkAdmin={item.linkAdmin}
              linkTiktok={item.linkTiktok}
              linkFacebook={item.linkFacebook}
              linkDetail={item.linkDetail}
              hargaCoret={item.hargaCoret}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
