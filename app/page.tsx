"use client"
import Hero from "@/app/components/Hero";
import {CategorySection} from "@/app/components/LokasiBaru";
import Testimoni from "@/app/components/Testimoni";
import Navbar from "./components/Navbar";
import useSWR from 'swr';
import { fetcher } from "@/lib/fetcher";
import { ApiResponse } from "@/types/products";



export default function Home() {
  const { data, error, isLoading } = useSWR<ApiResponse>('/api/get-products', fetcher);
   if (error) return <div>Error: {error.message}</div>;
  if (isLoading) return <div>Memuat...</div>;
  if (!data?.success) return <div>{data?.message || 'Terjadi kesalahan'}</div>;
  return (
    <main>
      <Navbar />
      <Hero />
      <CategorySection title="Flash Sale" products={data.flashsale} />
      <CategorySection title="Terlaris di kota anda" products={data.terlaris} />
      <CategorySection title="Terbaru Untuk Anda" products={data.terbaru} />
      <CategorySection title="Penawaran Untuk Anda" products={data.open} />
      <CategorySection title="Yang anda favoritkan" products={data.favorit} />
      {/* <LokasiBaru /> */}
      <Testimoni />
    </main>
  );
}
