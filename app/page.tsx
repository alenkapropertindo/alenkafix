import Hero from "@/app/components/Hero";
import LokasiBaru from "@/app/components/LokasiBaru";
import Testimoni from "@/app/components/Testimoni";
import UnitTerlaris from "@/app/components/UnitTerlaris";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      {/* <LokasiBaru />
      <UnitTerlaris />
      <Testimoni /> */}
    </main>
  );
}
