import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
export default function FrequentlyAsked() {
  return (
    <div className="freqAsk-sectn">
      <div className="left-faq">
        <h1>
          Frequently <br></br> asked <span>questions.</span>{" "}
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.
        </p>
      </div>
      <div className="right-faq">
        <div className="question-wrapper">
          <div className="question">
            <h3>How do I get started with your accounting services?</h3>
            <div className="plus">
              <AiOutlinePlus />
            </div>
          </div>
          <p className="show-answer">
            Simply contact us to schedule a consultation, and we will work with
            you to understand your needs and develop a customized plan that
            meets your requirements. Our goal is to provide you with the best
            possible accounting services to help you achieve your business
            goals.
          </p>
        </div>
        <div className="question-wrapper">
          <div className="question">
            <h3>How do I get started with your accounting services?</h3>
            <div className="plus">
              <AiOutlinePlus />
            </div>
          </div>
          <p>
            Simply contact us to schedule a consultation, and we will work with
            you to understand your needs and develop a customized plan that
            meets your requirements. Our goal is to provide you with the best
            possible accounting services to help you achieve your business
            goals.
          </p>
        </div>
        <div className="question-wrapper">
          <div className="question">
            <h3>How do I get started with your accounting services?</h3>
            <div className="plus">
              <AiOutlinePlus />
            </div>
          </div>
          <p>
            Simply contact us to schedule a consultation, and we will work with
            you to understand your needs and develop a customized plan that
            meets your requirements. Our goal is to provide you with the best
            possible accounting services to help you achieve your business
            goals.
          </p>
        </div>
      </div>
    </div>
  );
}
