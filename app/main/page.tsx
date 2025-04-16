import Link from "next/link";
import React from "react";
import Particles from "../components/particles";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black text-center px-4">
      
      {/* 상단 네비게이션 */}
      <nav className="absolute top-10 left-0 right-0 flex justify-center animate-fade-in z-10">
        <ul className="flex items-center justify-center gap-6 text-sm text-zinc-500 hover:text-zinc-300">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>

      {/* 배경 파티클 */}
      <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100} />

      {/* 메인 카피 */}
      <div className="space-y-6 max-w-4xl">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white">
          SOUND. STORY. STAY.
        </h1>
        <p className="text-2xl sm:text-3xl md:text-4xl text-zinc-200 font-semibold">
          듣고 느끼고 머문다
        </p>
        <p className="text-base sm:text-lg md:text-xl text-zinc-400">
          핑크피크는 공감적 사운드와 미디어아트를 기반으로 새로운 감각의 콘텐츠를 만듭니다.
        </p>
      </div>
    </div>
  );
}
