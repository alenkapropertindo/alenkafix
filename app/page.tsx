import Hero from "@/app/components/Hero";
import LokasiBaru from "@/app/components/LokasiBaru";
import Testimoni from "@/app/components/Testimoni";
import UnitTerlaris from "@/app/components/UnitTerlaris";

export default function Home() {
  return (
    <main className="mx-8">
      <Hero />
      <LokasiBaru />
      <UnitTerlaris />
      <Testimoni />
    </main>
  );
}
