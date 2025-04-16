'use client';

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
      <nav className="absolute top-8 left-0 right-0 flex justify-center z-10 animate-fade-in">
        <ul className="flex items-center gap-6 text-base text-zinc-500 hover:text-zinc-300">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>

      {/* 배경 파티클 */}
      <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={500} />

      {/* 본문 텍스트 */}
      <div className="space-y-6 w-full flex flex-col items-center justify-center text-center">
        <h1 className="text-[6.3vw] font-extrabold text-white leading-tight tracking-tight whitespace-nowrap">
          SOUND. STORY. STAY.
        </h1>
        <p className="text-[2.9vw] text-white font-semibold whitespace-nowrap">
          듣고 느끼고 머문다
        </p>
        <br/><br/><br/>
        <p className="text-[2.3vw] text-zinc-400 font-medium tracking-wide whitespace-nowrap">
          핑크피크는 공감적 사운드와 미디어아트를 기반으로 새로운 감각의 콘텐츠를 만듭니다.
        </p>
      </div>
    </div>

    {/* 구성도 섹션 */}
    <div id="team" className="min-h-screen bg-white text-black px-6 py-20 flex flex-col items-center justify-center space-y-12 transition-all duration-700">
      <h2 className="text-4xl font-bold">PINKPEAK</h2>
    
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        <div>
          <h3 className="text-2xl font-semibold mb-2">사운드</h3>
          <div className="space-y-2">
            <div className="border px-4 py-2 rounded-md">음악 프로듀서</div>
            <div className="border px-4 py-2 rounded-md">싱어송라이터</div>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-2">기획</h3>
          <div className="space-y-2">
            <div className="border px-4 py-2 rounded-md">영화 기획자</div>
            <div className="border px-4 py-2 rounded-md">문화예술 기획자</div>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-2">기술구현</h3>
          <div className="space-y-2">
            <div className="border px-4 py-2 rounded-md">디자이너</div>
            <div className="border px-4 py-2 rounded-md">프로그래머</div>
          </div>
        </div>
      </div>
    
      <div className="space-y-3 text-center">
        <p className="text-lg font-medium">사운드 제작, 스토리 기획, 기술 구현까지 A to Z가 가능한 창작 집단</p>
        <p className="text-lg font-medium">탄탄한 사운드와 내러티브한 미디어아트를 연결하고 가치관 공유</p>
      </div>
    </div>

  );
}
