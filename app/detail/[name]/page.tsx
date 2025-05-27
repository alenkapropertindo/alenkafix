"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaBed, FaBath, FaBolt, FaWater, FaMapMarkerAlt } from "react-icons/fa";
import { TiFlowChildren } from "react-icons/ti";
import { RiHomeGearFill } from "react-icons/ri";
import Navbar from "@/app/components/Navbar";

const ProductDetail = () => {
  const [activeImage, setActiveImage] = useState(0);
  const images = [
    "/images/BUMI ANAWAI LAND.jpg",
    "/images/GRIYA CITRA ANAWAI.jpg",
  ];

  const features = [
    { icon: <FaBed />, title: "Kamar Tidur", value: "2" },
    { icon: <FaBath />, title: "Kamar Mandi", value: "1" },
    { icon: <TiFlowChildren />, title: "Layout", value: "Zigzag" },
    { icon: <FaBolt />, title: "Listrik", value: "1300 Watt" },
    { icon: <FaWater />, title: "Air", value: "Sumur Bor" },
    { icon: <RiHomeGearFill />, title: "Sistem Air", value: "Menara Air" },
  ];

  return (
    <main>
        <Navbar />
    <div className="container mx-auto px-4 pt-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Card Informasi Kiri */}
        <div className="lg:col-span-3">
          <div className="border rounded-xl p-6 shadow-lg sticky top-24">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Villa Serenity</h1>
            <p className="text-gray-600 text-sm mb-4">PT. Bangun Sejahtera Abadi</p>
            <hr className="my-4" />
            
            <div className="space-y-4">
              <div>
                <p className="text-gray-500 text-sm">Harga Rumah</p>
                <p className="text-xl font-bold text-emerald-600">
                  Rp 850.000.000
                </p>
              </div>
              
              <div>
                <p className="text-gray-500 text-sm">Cicilan Mulai Dari</p>
                <p className="text-lg font-semibold text-gray-800">
                  Rp 4.2 jt/bulan
                </p>
              </div>
              
              <div className="bg-amber-50 p-3 rounded-lg">
                <p className="text-xs text-amber-700">
                  Suku Bunga Khusus 5%*<br/>
                  <span className="text-[10px]">(*Syarat & Ketentuan berlaku)</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Konten Utama Tengah */}
        <div className="lg:col-span-6">
          {/* Gambar Utama */}
          <div className="relative h-[600px] rounded-xl overflow-hidden mb-6">
            <Image
              src={images[activeImage]}
              alt="Main house image"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Fitur Properti */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="border rounded-lg p-3 text-center hover:border-emerald-500 transition-colors"
              >
                <div className="text-2xl text-emerald-600 mb-2 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-sm mb-1">{feature.title}</h3>
                <p className="text-xs text-gray-600">{feature.value}</p>
              </div>
            ))}
          </div>

          {/* Deskripsi */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Deskripsi Properti</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Perumahan eksklusif dengan konsep modern tropis di area strategis.
              Dilengkapi dengan fasilitas keamanan 24 jam, taman bermain anak,
              dan club house. Setiap unit hadir dengan desain interior modern
              dan material berkualitas premium.
            </p>
          </div>
            {/* Surrounding Area */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Daerah Sekitar Perumahan</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>5 menit ke Pusat Perbelanjaan Modern</li>
          <li>10 menit ke Tol terdekat</li>
          <li>3 menit ke Sekolah Dasar</li>
          <li>7 menit ke Rumah Sakit</li>
        </ul>
      </div>

          {/* Map Section */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Lokasi Strategis</h2>
            <div className="rounded-xl overflow-hidden border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613506394!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x9dbf1c2c030d3c98!2sMonumen%20Nasional!5e0!3m2!1sen!2sid!4v1623398253898!5m2!1sen!2sid"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Container Thumbnail Kanan */}
        <div className="lg:col-span-3">
          <div className="space-y-4">
            {images.map((img, index) => (
              <div
                key={index}
                className={`relative h-48 cursor-pointer rounded-xl overflow-hidden border-2 transition-all ${
                  activeImage === index ? "border-emerald-500" : "border-gray-200"
                }`}
                onClick={() => setActiveImage(index)}
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Contact Button */}
      <div className="fixed bottom-6 right-6">
        <a
          href="https://wa.me/6285242049550"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-full shadow-xl flex items-center gap-2 transition-all"
        >
          <FaMapMarkerAlt className="text-lg" />
          <span className="text-sm">Konsultasi Sekarang</span>
        </a>
      </div>
    </div>
    </main>
  );
};

export default ProductDetail;