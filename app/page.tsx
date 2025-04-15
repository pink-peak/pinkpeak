'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import React from 'react';

export default function Intro() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/main');
  };

  return (
    <div
      onClick={handleClick}
      className="w-screen h-screen flex items-center justify-center bg-black cursor-pointer"
    >
      <div className="relative w-[80vw] h-[80vh]">
        <Image
          src="/new-image.png" // ✅ 바꾸고 싶은 이미지 이름
          alt="Intro Cover"
          fill
          className="object-contain hover:scale-105 transition-transform duration-500"
          priority
        />
      </div>
    </div>

  );
}
