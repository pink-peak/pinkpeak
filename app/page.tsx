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
      <Image
        src="/logo.png"
        alt="Intro Cover"
        width={1200}
        height={1200}
        priority
        className="hover:scale-105 transition-transform duration-500"
      />
    </div>
  );
}
