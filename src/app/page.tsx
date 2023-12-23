import Image from "next/image";
import Navbar from "./components/Navbar/navbar";
import Hero from "./components/hero/hero";
import Working from "./components/working/working";
import Testinomials from "./components/testinomials/testinomials";
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-cente">
      <Navbar />
      <Hero />
      <Working />
      <Testinomials />
    </div>
  );
}
