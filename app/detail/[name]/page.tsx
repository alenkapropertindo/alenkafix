"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FaBed, FaBath, FaBolt, FaWater, FaMapMarkerAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { TiFlowChildren } from "react-icons/ti";
import { RiHomeGearFill } from "react-icons/ri";
import Navbar from "@/components/Navbar";

const ProductDetail = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
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

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextImage = () => {
    setActiveImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const previousImage = () => {
    setActiveImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <main>
      <Navbar />
      <div className="container mx-auto px-4 pt-20">
        {/* Mobile Carousel */}
        {isMobile && (
          <div className="mb-6 relative">
            <div className="relative h-80 rounded-xl overflow-hidden">
              <Image
                src={images[activeImage]}
                alt="Main house image"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            <div className="absolute top-1/2 w-full flex justify-between px-4 transform -translate-y-1/2">
              <button 
                onClick={previousImage}
                className="bg-white/80 rounded-full p-2 shadow-md"
              >
                <FaChevronLeft className="text-emerald-600" />
              </button>
              <button 
                onClick={nextImage}
                className="bg-white/80 rounded-full p-2 shadow-md"
              >
                <FaChevronRight className="text-emerald-600" />
              </button>
            </div>
            
            <div className="flex justify-center mt-4 space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`w-2 h-2 rounded-full ${
                    activeImage === index ? "bg-emerald-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Info Harga - Tampil di atas pada mobile */}
          <div className="lg:col-span-3 order-1 lg:order-1">
            <div className="border rounded-xl p-6 shadow-lg lg:sticky lg:top-24">
              <h1 className="text-2xl font-bold text-gray-800 mb-2">BUMI ANAWAI LAND</h1>
              <p className="text-gray-600 text-sm mb-4">PT. Bangun Sejahtera Abadi</p>
              <hr className="my-4" />
              
              <div className="space-y-4">
                <div>
                  <p className="text-gray-500 text-sm">Harga Rumah</p>
                  <p className="text-xl font-bold text-emerald-600">
                    Rp 170.000.000
                  </p>
                </div>
                
                <div>
                  <p className="text-gray-500 text-sm">Cicilan Mulai Dari</p>
                  <p className="text-lg font-semibold text-gray-800">
                    Rp 1.1 jt/bulan
                  </p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Jenis Suku Bunga</p>
                  <p className="text-lg font-semibold text-gray-800">
                    Flat
                  </p>
                </div>
                
                <div className="bg-amber-50 p-3 rounded-lg">
                  <p className="text-xs text-amber-700">
                    Suku Bunga Khusus 5%*<br/>
                    <span className="text-[10px]">Hanya berlaku pad KPR Subsidi</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Konten Utama */}
          <div className="lg:col-span-6 order-3 lg:order-2">
            {/* Gambar Desktop */}
            {!isMobile && (
              <div className="relative h-[600px] rounded-xl overflow-hidden mb-6">
                <Image
                  src={images[activeImage]}
                  alt="Main house image"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}

            {/* Spesifikasi */}
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

            {/* Daerah Sekitar */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Daerah Sekitar Perumahan</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>5 menit ke Pusat Perbelanjaan Modern</li>
                <li>10 menit ke Tol terdekat</li>
                <li>3 menit ke Sekolah Dasar</li>
                <li>7 menit ke Rumah Sakit</li>
              </ul>
            </div>

            {/* Lokasi Strategis */}
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

          {/* Thumbnail Desktop */}
          {!isMobile && (
            <div className="lg:col-span-3 order-2 lg:order-3">
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
          )}
        </div>

        {/* Tombol Konsultasi */}
        <div className="fixed bottom-6 right-6 z-10">
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