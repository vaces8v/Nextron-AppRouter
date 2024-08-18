'use client'
import { useRouter } from 'next/navigation';
import React from 'react';

const HomePage: React.FC = () => {
  const router = useRouter()

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-blue-600">About</h1>
      <button
      className='bg-gray-600 rounded-[10px] text-white px-[15px] py-[10px] mt-[10px]'
      onClick={() => router.push('/home')}>
        Обратно
      </button>
    </div>
  );
};

export default HomePage;