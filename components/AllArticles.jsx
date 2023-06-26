'use client'
import React from "react";
import ArticlesCard from "./ArticlesCard";
export default function AllArticles() {
  const projects = [
    {
      id: 1,
      link: "#",
      image:
        "https://assets.website-files.com/64183a818a4da873903b4aa2/64186490a9746f7d1387b8cb_pexels-rodnae-productions-7821952-p-500.jpg",
      w: 331,
      h: 221,
      projName: 'Small Bussiness',
      descrp: '5 Financial Mistakes to Avoid as a Small Business Owner',
    },
    {
        id: 2,
        link: "#",
        image:
          "https://assets.website-files.com/64183a818a4da873903b4aa2/6418649c1de30f20cf9c9a21_pexels-rodnae-productions-7821501-p-500.jpg",
        projName: 'Bookkeeping',
        descrp: 'The Pros and Cons of Outsourcing Your Payroll',
      },
      {
        id: 3,
        link: "#",
        image:
          "https://assets.website-files.com/64183a818a4da873903b4aa2/641864a796b7dd075b332174_pexels-rodnae-productions-7821675-p-500.jpg",
        projName: 'Taxation',
        descrp: 'Understanding Financial Statements: A Beginner"s Guide',
      },
  ];

  return (
    <div className="all-projects">
      {projects.map((projects, i) => {
        return <ArticlesCard id={i} link={projects.link} width={projects.w} height={projects.h}
        imgurl={projects.image} name={projects.projName} description={projects.descrp} />;
      })}
    </div>
  );
}
