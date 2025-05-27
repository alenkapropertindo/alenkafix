"use client";
import Hero from "@/app/components/Hero";
import { CategorySection } from "@/app/components/LokasiBaru";
import Testimoni from "@/app/components/Testimoni";
import Navbar from "./components/Navbar";
import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";
import { ApiResponse } from "@/types/products";

export default function Home() {
  const { data, error, isLoading } = useSWR<ApiResponse>(
    "/api/get-products",
    fetcher
  );
  if (error) return <div>Error: {error.message}</div>;
  if (isLoading) return <div>Memuat...</div>;
  if (!data?.success) return <div>{data?.message || "Terjadi kesalahan"}</div>;
  return (
    <main>
      <Navbar />
      <Hero />
      {data.flashsale?.length > 0 && (
        <CategorySection title="Big Promo" products={data.flashsale} />
      )}
      {data.terlaris?.length > 0 && (
        <CategorySection
          title="Terlaris di kota anda"
          products={data.terlaris}
        />
      )}
      {data.terbaru?.length > 0 && (
        <CategorySection title="Terbaru Untuk Anda" products={data.terbaru} />
      )}
      {data.open?.length > 0 && (
        <CategorySection title="Penawaran Untuk Anda" products={data.open} />
      )}
      {data.favorit?.length > 0 && (
        <CategorySection title="Yang di favoritkan" products={data.favorit} />
      )}
      {/* <LokasiBaru /> */}
      <Testimoni />
    </main>
  );
}
