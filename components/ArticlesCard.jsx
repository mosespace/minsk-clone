'use client'
import Image from "next/image";

export default function ArticlesCard({ imgurl, name, description, width, height}) {
  return (
  <div className="all-projects">
    <div className="card">
        <Image src={imgurl} alt="Avatar" width={331} height={221} />
      <div className="infomation">
        <button>{name}</button>
        <h1>{description}</h1>
        <p>Read more</p>
      </div>
    </div>
  </div>
  );
}

// 331 221