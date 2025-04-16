import Link from "next/link";
import React from "react";
import Particles from "../components/particles";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <div className="animate-fade-in text-center">
      {/* 타이틀 + 서브타이틀 묶음 */}
        <div className="space-y-2">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white">
            SOUND. STORY. STAY.
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-zinc-200 font-semibold">
            듣고 느끼고 머문다
          </p>
        </div>
        <p className="mt-8 text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto">
          핑크피크는 공감적 사운드와 미디어아트를 기반으로 새로운 감각의 콘텐츠를 만듭니다.
        </p>
      </div>

{/*       <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-xl text-zinc-400 font-semibold">
              SOUND STORY STAY
{           I'm building{" "}
          <Link
            target="_blank"
            href="https://unkey.dev"
            className="underline duration-500 hover:text-zinc-300"
          >
            unkey.dev
          </Link> to solve API authentication and authorization for developers. }
        </h2>
      </div> */}
    </div>
  );

}
