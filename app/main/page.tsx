'use client';

// rebuild

import Image from "next/image";
import Link from "next/link";
import React from "react";
import Particles from "../components/particles";

const navigation = [
  { name: "Pinkpeak", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <>
      {/* 상단 네비게이션 */}
{/*       <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200 py-3">
        <ul className="flex items-center gap-6 text-base text-zinc-500 hover:text-zinc-300">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.name}
            </Link>
          ))}
        </ul>
      </nav> */}
        
      {/* 고정 상단 내비게이션 - 가운데 정렬 + 투명 배경 */}
      <nav className="fixed top-8 left-0 right-0 z-50 flex justify-center">
        <ul className="flex items-center gap-10 text-base text-white font-medium">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-zinc-300 transition-colors duration-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
        
      <div className="relative flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black text-center px-4">
        
        <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        
        {/* 배경 파티클 */}
        <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={500} />

        <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        
        {/* 본문 텍스트 */}
        <div className="space-y-6 w-full flex flex-col items-center justify-center text-center animate-fade-in">
          <h1 className="text-[6.3vw] font-extrabold text-white leading-tight tracking-tight whitespace-nowrap">
            SOUND. STORY. STAY.
          </h1>
          <p className="text-[2.9vw] text-white font-semibold whitespace-nowrap">
            듣고 느끼고 머문다
          </p>
          <br /><br /><br />
          <p className="text-[2.3vw] text-zinc-400 font-medium tracking-wide whitespace-nowrap">
            핑크피크는 공감적 사운드와 미디어아트를 기반으로 새로운 감각의 콘텐츠를 만듭니다.
          </p>
        </div>
      </div>

      {/* 구성도 섹션 */}
      <div id="team" className="min-h-screen px-6 py-28 flex flex-col items-center justify-center space-y-20">
{/*         <Image
          src="/namelogo.png"
          alt="PINKPEAK logo"
          width={960} // 이전의 4배
          height={320}
          className="mx-auto"
        /> */}
        
        <Image
          src="/namelogo.png"
          alt="PINKPEAK logo"
          width={0}
          height={0}
          sizes="100vw"
          className="w-[480px] h-auto mx-auto"
        />
      
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center text-[1.75rem] font-semibold w-full max-w-6xl">
          <div className="flex flex-col items-center space-y-6">
            <h2 className="text-4xl font-bold">사운드</h2>
            <div className="space-y-4 w-full">
              <div className="box">음악 프로듀서</div>
              <div className="box">싱어송라이터</div>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-6">
            <h2 className="text-4xl font-bold">기획</h2>
            <div className="space-y-4 w-full">
              <div className="box">영화 기획자</div>
              <div className="box">문화예술 기획자</div>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-6">
            <h2 className="text-4xl font-bold">기술구현</h2>
            <div className="space-y-4 w-full">
              <div className="box">디자이너</div>
              <div className="box">프로그래머</div>
            </div>
          </div>
        </div>
      
        <div className="space-y-6 text-center mt-16 text-4xl text-zinc-700 max-w-5xl leading-relaxed">
          <p>사운드 제작, 스토리 기획, 기술 구현까지 A to Z가 가능한 창작 집단</p>
          <p>탄탄한 사운드와 내러티브한 미디어아트를 연결하고 가치관 공유</p>
        </div>
      </div>

    </>
  );
}
