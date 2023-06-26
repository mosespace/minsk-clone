import Greencard from "@/components/Greencard";
import React from "react";
import Contact from "../Contact/page";

export default function Testimonial() {
  const feedback = [
    {
      Image:
        "https://assets.website-files.com/64183a818a4da828b83b4a85/6419754280f7ef2eaeff1c34_pexels-rodnae-productions-7821906%20(1).webp",
      name: "Lisa Berger",
      title: "Acme co",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.",
    },
    {
      Image:
        "https://assets.website-files.com/64183a818a4da828b83b4a85/6419807a66257c837db66fd7_pexels-rodnae-productions-7821753.webp",
      name: "John Doe",
      title: "lOream LCC",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.",
    },
  ];
  return (
    <div className="testimonial-sectn">
      <Greencard
        name={feedback[0].name}
        Image={feedback[0].Image}
        title={feedback[0].title}
        description={feedback[0].description}
      />
      <Greencard
        name={feedback[1].name}
        Image={feedback[1].Image}
        title={feedback[1].title}
        description={feedback[1].description}
      />
    </div>
  );
}
