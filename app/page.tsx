import Link from "next/link";
 import React from "react";
 import Particles from "./components/particles";
 'use client';
 import { useRouter } from 'next/navigation';
 import Image from 'next/image';
 import React from 'react';
 
 const navigation = [
   { name: "Projects", href: "/projects" },
   { name: "Contact", href: "/contact" },
 ];
 export default function Intro() {
   const router = useRouter();
 
 export default function Home() {
   return (
     <div
       className="relative flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-cover bg-center"
       style={{ backgroundImage: "url('/logo.png')" }}
       onClick={() => router.push('/home')}
       className="w-screen h-screen flex items-center justify-center bg-black cursor-pointer"
     >
       {/* 어두운 오버레이가 필요하면 추가 */}
       {/* <div className="absolute inset-0 bg-black/40 z-0" /> */}
 
       <nav className="my-16 animate-fade-in z-10">
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
 
       <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 z-10" />
 
       <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100} />
 
       <h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text">
         PINK PEAK
       </h1>
 
       <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 z-10" />
 
       <div className="my-16 text-center animate-fade-in z-10">
         <h2 className="text-xl text-zinc-400 font-semibold">SOUND STORY STAY</h2>
       </div>
       <Image
         src="/logo.png" // 또는 너가 넣은 이미지 이름
         alt="Intro Cover"
         width={800}
         height={800}
         priority
       />
     </div>
   );
 }
