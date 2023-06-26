import React from "react";
import Contact from "./Contact/page";
import Testimonial from "./Testimonial/page";
import FrequentlyAsked from "./FAQ/page";

export default function Home() {
  return (
    <div>
      <Testimonial />
      <FrequentlyAsked />
      <Contact />
    </div>
  );
}
