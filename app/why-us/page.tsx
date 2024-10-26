import React from "react";
import ContentSection from "@/components/shared/ContentSection";
import Image from "next/image";
import NeedAssistant from "@/components/shared/need-assistant";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Why Choose Secret Weapon | Leading Algorithmic Trading Solutions",
  description:
    "Discover why Secret Weapon is the top choice for traders seeking AI and Python-powered trading solutions to achieve success.",
  keywords: [
    "Why choose Secret Weapon",
    "top algorithmic trading solutions",
    "AI-powered trading",
    "Python trading platforms",
    "successful trading strategies",
  ],
};

export default function page() {
  return (
    <div className="p-4 max-w-[1560px] mx-auto overflow-x-hidden">
      <section className="h-full w-full min-h-[60vh] relative flex flex-col items-center justify-center bg-black rounded-[40px]">
      <span className="h-40 w-40 lg:h-[360px] lg:w-[360px] bg-transparent pointer-events-none border-[12px] rounded-[40px] top-[304px] md:top-80 lg:top-40 z-20 -right-10 md:right-5 lg:right-20 border-yellow-300 absolute rotate-45" />
        <div className="max-w-3xl flex flex-col items-center z-10">
          <h2 className="text-white text-center text-3xl sm:text-4xl ld:text-6xl font-extrabold">
            Why Us
          </h2>
          <p className="text-neutral-300 text-center mt-4 text-xs md:text-base px-4 max-w-lg">
            Begin your journey with us – reach out and let’s create something
            extraordinary together!
          </p>
        </div>
      </section>

      <ContentSection
        content="left"
        title={"Hello Traders"}
        descriptions={[
          "Ever wondered about automatic trading while checking out our website? Maybe you’re used to planning for when to buy and sell in your head. Then, when the market opens, you sit in front of your screen, watching and waiting for your conditions to be met so you can make a trade.",
          "Once you’ve made a trade, another challenge begins – deciding when to stop or take profit. You keep watching the screen, sometimes holding onto a trade hoping it will make money, or getting out too early because you’re too attached to it emotionally. Sometimes, you end up losing both time and money if your strategy wasn’t properly tested beforehand.",
        ]}
        image={"/why-us/why-us.webp"}
        button={"Read More"}
      />

      <div className="px-4 sm:px-6 md:px-12 lg:px-24 xl:px-36 space-y-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Our process
        </h1>
        <p className="text-base sm:text-lg text-neutral-800">
          To date, we have successfully completed numerous projects in the
          industry. We specialize in creating and using effective trading
          strategies on platforms like Amibroker, Tradingview, Python, and
          Metatrader. Our clients approach us to code their strategies, and we
          follow a structured process to ensure their satisfaction. First, we
          analyze the client’s requirements, and our team conducts a thorough
          feasibility study to determine the project’s cost. Once the client
          approves our proposal, we commence the project and deliver the final
          product within the agreed-upon timeline. Our team ensures that the
          final product aligns with the original requirements. In case the
          client has any doubts or queries, we provide full support to resolve
          them. This is our standard process of operation.
        </p>
      </div>

      {/* Image Section */}
      <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] mt-8">
        <Image
          src="/why-us/data-flow-white-final.png" // replace with your image path
          alt="Description of the image"
          layout="fill" // Makes the image fill the container
          objectFit="contain" // Ensures the image fits within the container without being cut off
          className="rounded-lg transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </div>

      <div className="px-4 pt-5 sm:px-6 md:px-12 lg:px-24 xl:px-36 space-y-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          What Makes Us Different
        </h1>
        <p className="text-base sm:text-lg text-neutral-800">
          Manual and automatic trading approaches represent distinct
          methodologies with unique advantages and limitations. While manual
          trading relies on human decision-making and execution, automatic
          trading harnesses algorithms and software to automate processes. This
          table highlights the fundamental differences between the two methods,
          shedding light on factors such as speed of execution, emotional
          influence, adaptability to market changes, and level of control.
          Understanding these variances is crucial for traders seeking to
          optimize their strategies and capitalize on market opportunities
          effectively.
        </p>
      </div>

      {/* Image Section */}
      <div className="relative w-full max-w-screen-3xl mx-auto h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] mt-8">
        <div className="relative w-full h-full">
          <Image
            src="/why-us/comparison-final-2.png" // replace with your image path
            alt="Description of the image"
            layout="fill" // Makes the image fill the container
            objectFit="contain" // Ensures the image fits within the container without cropping
            className="rounded-lg transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </div>
      </div>
      <NeedAssistant />
    </div>
  );
}
