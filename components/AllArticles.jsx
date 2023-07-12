'use client'
import React from "react";
import ArticlesCard from "./ArticlesCard";
export default function AllArticles() {
  const projects = [
    {
      id: 1,
      link: "#",
      projName: 'Financial Statements',
      descrp: 'Contact us today to learn more about how our accounting services can benefit your business. We look forward to hearing from you and helping you achieve financial success!',
    }, 
    {
      id: 2,
      link: "#",
      projName: 'Taxes',
      descrp: 'Contact us today to learn more about how our accounting services can benefit your business. We look forward to hearing from you and helping you achieve financial success!',
    }, 
    {
      id: 3,
      link: "#",
      projName: 'Accounting',
      descrp: 'Contact us today to learn more about how our accounting services can benefit your business. We look forward to hearing from you and helping you achieve financial success!',
    }, 
];

  return (
    <div className="all-projects">
      {projects.map((projects, i) => {
        return <ArticlesCard id={i} link={projects.link}
        title={projects.projName} description={projects.descrp} />;
      })}
    </div>
  );
}