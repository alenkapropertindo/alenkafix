import React from "react";
import ProductCard from "./ProductCard";

const productsData = [
  {
    img: "/Images/GRIYA CITRA BARUGA.jpg",
    title: "Griya Citra Baruga",
    desc: "Jl.KS Tubun, Baruga",
    rating: 4,
    price: "3Jt",
    hargaCoret: "Rp 5.000.000",
    linkAdmin:
      "https://wa.me/6285242049550?text=Halo, Saya minat perumahan Griya Citra Baruga",
    linkTiktok: "https://www.tiktok.com/@adeamiri?_t=ZS-8vdLvc1hEfs&_r=1",
    linkFacebook: "https://www.facebook.com/AlenkaPropertiKendari/",
    linkDetail: "/GriyaCitraBaruga",
  },
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
    linkFacebook: "https://www.facebook.com/share/v/168zCV2fsa/",
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
    linkTiktok: "https://vt.tiktok.com/ZSr4QRWma/",
    linkFacebook: "https://www.facebook.com/share/r/16Rn7bLjgt/",
    linkDetail: "/GriyaCitraAnawai",
  },
  {
    img: "/Images/GRIYA CITRA WATUBANGGA.jpg",
    title: "Griya Citra Watubangga",
    desc: "Jl.Kapten Piere Tendean, Baruga",
    rating: 4,
    price: "11Jt",
    hargaCoret: "Rp 15.000.000",
    linkAdmin:
      "https://wa.me/6285242049550?text=Halo, Saya minat perumahan Griya Citra Watubangga",
    linkTiktok: "https://vt.tiktok.com/ZSrXH4L4M/",
    linkFacebook: "https://www.facebook.com/share/r/14XK578JTX/",
    linkDetail: "/GriyaCitraWatubangga",
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
    linkFacebook: "https://www.facebook.com/share/v/16X2NZN1Jm/",
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
    linkTiktok: "https://vt.tiktok.com/ZSrqTfH31/",
    linkFacebook: "https://www.facebook.com/share/r/196BuNBZTu/",
    linkDetail: "/MutiaraAthiraBaruga2",
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
    linkFacebook: "https://www.facebook.com/share/r/1FMK76T5Jk/",
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
    linkFacebook: "https://www.facebook.com/share/r/19c7LoTu4B/",
    linkDetail: "/PesonaKingAdham2",
  },
];

const LokasiBaru = () => {
  return (
    <div>
      <div className=" container pt-10">
        <h2 className="font-medium text-2xl pb-4">Lokasi Terbaru</h2>

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

export default LokasiBaru;
