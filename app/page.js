import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AllArticles from '@/components/AllArticles';
import React from 'react'

export default function Home() {
  return (
    <main>
      <Navbar/>
      <AllArticles/>
      {/* <Footer/> */}
    </main>
  );
}
