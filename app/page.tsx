"use client"
import Hero from "@/app/components/Hero";
import LokasiBaru from "@/app/components/LokasiBaru";
import Testimoni from "@/app/components/Testimoni";
import Navbar from "./components/Navbar";
import useSWR from 'swr';
import { fetcher } from "@/lib/fetcher";

interface Product {
  id: string;
  name: string;
  price: number;
  status: string;
  // tambahkan field lain sesuai kebutuhan
}

interface ApiResponse {
  success: boolean;
  message?: string;
  open: Product[];
  terlaris: Product[];
  terbaru: Product[];
  favorit: Product[];
  flashsale: Product[];
}

export default function Home() {
  const { data, error, isLoading } = useSWR<ApiResponse>('/api/get-products', fetcher);
  return (
    <main>
      <Navbar />
      <Hero />
      <LokasiBaru />
      {/* <UnitTerlaris /> */}
      <Testimoni />
    </main>
  );
}
