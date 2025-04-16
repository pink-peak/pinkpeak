'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import React from 'react';

export default function Intro() {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push('/main')}
      className="w-screen h-screen flex items-center justify-center bg-[#EAD7C4] cursor-pointer"
    >
      <Image
        src="/logo.png"
        alt="Intro Cover"
        fill // 이미지가 부모 요소를 가득 채움
        className="object-contain p-8"
        priority
      />
    </div>
  );
}
