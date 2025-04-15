'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import React from 'react';

export default function Intro() {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push('/main')}
      className="w-screen h-screen flex items-center justify-center bg-black cursor-pointer"
    >
      <Image
        src="/logo.png"
        alt="Intro Cover"
        width={800}
        height={800}
        priority
      />
    </div>
  );
}
