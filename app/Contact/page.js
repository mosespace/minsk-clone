import Image from "next/image";
import React from "react";

export default function Contact() {
  return (
    <div className="contact-section">
      <Image className="contact-img" src="/image/contact.webp" alt="" fill />
      <div className="contact-sectn-details">
        <h1>Contact us today to get a free consultation</h1>
        <p>
          Contact us today to learn more about how our accounting services can
          benefit your business. We look forward to hearing from you and helping
          you achieve financial success!
        </p>
      </div>
      <div className="overally"></div>
    </div>
  );
}
