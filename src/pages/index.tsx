import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
   <div className="h-full md:h-screen w-full flex items-center gap-4 justify-center">
    <Link href="/smoothie">
      Smoothie
    </Link>
    <Link href="/burger">
      Burger
    </Link>
   </div>
  );
}
