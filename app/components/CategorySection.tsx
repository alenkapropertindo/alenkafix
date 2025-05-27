import React from "react";
import ProductCard from "./ProductCard";
import { Product } from "@/types/products";


export function CategorySection({ title, products }: { title: string; products: Product[] }){
  return(
    <div className=" w-full">
      <div className=" container pt-10 mx-auto px-10">
        <h2 className="font-medium text-2xl pb-4">{title}</h2>

        <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 gap-8 xl:gap-x-8 xl:gap-y-10 ">
          {products.map((item) => (
            <ProductCard
              key={item.id}
              img={item.image}
              title={item.name}
              desc={item.address}
              rating={parseFloat(item.rating)}
              price={item.price}
              linkTiktok={item.tiktok}
              linkFacebook={item.fb}
              hargaCoret={item.discountFrom}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
