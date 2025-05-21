import React from "react";
import ProductCard from "./ProductCard";

const productsData = [
  {
    img: "/Images/BUMI ANAWAI LAND.jpg",
    title: "Bumi Anawai Land",
    desc: "Jl.Anawai, Kel. Wua-Wua",
    rating: 4,
    price: "4Jt",
    hargaCoret: "Rp 11.000.000",
    linkAdmin:
      "https://wa.me/6285242049550?text=Halo, Saya minat perumahan Bumi Anawai Land",
    linkTiktok: "https://vt.tiktok.com/ZSrxtbRbf/",
    linkFacebook: "https://www.facebook.com/AlenkaPropertiKendari/",
    linkDetail: "/BumiAnawaiLand",
  },
  {
    img: "/Images/GRIYA CITRA ANAWAI.jpg",
    title: "Griya Citra Anawai",
    desc: "Jl.Anawai, Kel. Wua-Wua",
    rating: 4,
    price: "6Jt",
    hargaCoret: "Rp 14.000.000",
    linkAdmin:
      "https://wa.me/6285242049550?text=Halo, Saya minat perumahan Griya Citra Anawai",
    linkTiktok: "/",
    linkFacebook: "https://www.facebook.com/AlenkaPropertiKendari/",
    linkDetail: "/GriyaCitraAnawai",
  },
  {
    img: "/Images/MUTIARA ATHIRA BARUGA 3.jpg",
    title: "Mutiara Athirah Baruga 3",
    desc: "Jl.Kapten Piere Tendean, Baruga",
    rating: 4,
    price: "46Jt",
    hargaCoret: "Rp 50.000.000",
    linkAdmin:
      "https://wa.me/6285242049550?text=Halo, Saya minat perumahan Mutiara Athirah Baruga 3",
    linkTiktok: "https://vt.tiktok.com/ZSrxtb7b2/",
    linkFacebook: "/",
    linkDetail: "/MutiaraAthiraBaruga3",
  },

  {
    img: "/Images/PESONA KING ADHAM 2.jpg",
    title: "Pesona King Adham",
    desc: "Jl.Chairil Anwar, THR-Puwatu",
    rating: 4,
    price: "26Jt",
    hargaCoret: "Rp 33.000.000",
    linkAdmin:
      "https://wa.me/6285242049550?text=Halo, Saya minat perumahan Pesona King Adham 2",
    linkTiktok: "https://vt.tiktok.com/ZSrxt7wau/",
    linkFacebook: "/",
    linkDetail: "/PesonaKingAdham2",
  },

  {
    img: "/Images/GRIYA IB HASANAH.jpg",
    title: "Griya IB Hasanah",
    desc: "Jl.Chairil Anwar, THR-Puwatu",
    rating: 4,
    price: "16Jt",
    hargaCoret: "Rp 3.000.000",
    linkAdmin:
      "https://wa.me/6285242049550?text=Halo, Saya minat perumahan Griya IB Hasanah",
    linkTiktok: "https://vt.tiktok.com/ZSrQQBgdB/",
    linkFacebook: "https://www.facebook.com/AlenkaPropertiKendari/",
    linkDetail: "/GriyaIbHasanah",
  },

  {
    img: "/Images/MUTIARA ATHIRA BARUGA 2.jpg",
    title: "Mutiara Athirah Baruga 2",
    desc: "Jl.KS Tubun, Baruga",
    rating: 4,
    price: "9Jt",
    hargaCoret: "Rp 26.000.000",
    linkAdmin:
      "https://wa.me/6285242049550?text=Halo, Saya minat perumahan Mutiara Athirah Baruga 2",
    linkTiktok: "/",
    linkFacebook: "/",
    linkDetail: "/MutiaraAthiraBaruga2",
  },
];

const UnitTerlaris = () => {
  return (
    <div>
      <div className=" container pt-10">
        <h2 className="font-medium text-2xl pb-4">Unit Terlaris</h2>

        <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 gap-8 xl:gap-x-8 xl:gap-y-10">
          {productsData.map((item, index) => (
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
};

export default UnitTerlaris;
