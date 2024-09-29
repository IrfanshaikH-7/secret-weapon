"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { useState } from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export function Testimonials() {
  const testimonials = [
    {
      name: "Himanshu Sharma",
      image: "/user-testmonial.jpg",
      testimony:
        "I approached Secret Weapons Trading Solutions for backtesting services and was thoroughly impressed with their meticulous approach and insightful analysis. The team worked great to refine my trading strategies exponentially Communication was seamless, and the overall experience was exceptionally professional. I would highly recommend their services to anyone looking to enhance their trading strategies with robust backtesting solutions.",
    },
    {
      name: "Digvijay",
      image: "/user-testmonial.jpg",
      testimony:
        "This is honest feedback on my interaction with Swapnil on creating a customized pine script code.   From the very beginning, it was dealt with very professionally and meetings were scheduled well in advance.  He was open for many rounds of calls and iterations on the code and was open for changes/modifications at any point of time and understood the complete cycle, as he also has the trading experience that made things very easy.   Very accommodating and ready to incorporate any changes requested even after the code was delivered.    I am looking forward to working with him on my future ideas--cheers",
    },
    {
      name: "Bhaskar Karampudi",
      image: "/user-testmonial.jpg",
      testimony:
        "As a service provider, Secret Weapon Trading Solutions excels.           They demonstrate commendable expertise in Amibroker and AFL, comprehending specifications thoroughly and exerting full effort to meet project requirements. I'll certainly enlist their services again and highly recommend them to others!",
    },
    {
      name: "Sangeetha Narasimhan",
      image: "/secret-3.png",
      testimony:
        "If you're in need of a coding solution that precisely matches your requirements, Secret  Weapon Trading Solutions is the go-to choice. They possess an extensive understanding of coding nuances and conduct their work with utmost  professionalism. Engaging Secret Weapon Trading Solutions for future projects is a clear decision. Their pricing is reasonable, and they readily accommodate changes while offering optimization suggestions. Overall, their work ethic and responsiveness leave me extremely satisfied Hide",
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleReadMore = (index: any) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  // Function to split testimony into lines of 6 words
  const splitTestimonyIntoLines = (testimony: any) => {
    const words = testimony.split(" ");
    let lines = [];
    for (let i = 0; i < words.length; i += 6) {
      lines.push(words.slice(i, i + 6).join(" "));
    }
    return lines;
  };

  return (
    <>
    <main className="h-full w-full  ">
    <div className="text-xl w-fit mx-auto  relative md:text-4xl font-[1000] bg-[url('/secret-3.png')] text-center bg-clip-text mb-4 text-transparent">

    <div className='h-[2px] w-24 absolute -bottom-0 -right-12 rounded-full bg-slate-600'/>
        <div className="py-2">Our Satisfied customers</div>
        <div className='h-[2px] w-24 absolute top-0 -left-12 rounded-full bg-slate-600'/>
    </div>

    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      className="w-full mx-auto sm:max-w-[80%] pt-12"
    >
      <CarouselContent className="-ml-1">
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="px-1 py-2">
              <Card className="rounded-3xl hover:transform hover:-translate-y-2 transition-transform duration-300">
                <CardContent className="flex flex-col justify-center items-center gap-6 p-8">
                  <div className="flex relative w-full gap-2 items-center">
                    <picture className="relative h-14 w-14 max-h-14 max-w-14 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image}
                        alt="img"
                        fill
                        className="aspect-square object-cover"
                      />
                    </picture>
                    <div className="leading-none">
                      <h4 className="font-bold text-sm">{testimonial.name}</h4>
                      <span className="font-semibold text-xs">14-jun-2024</span>
                    </div>
                  </div>
                  <div className="flex-1 w-full text-[15px]  leading-tight ">
                    {splitTestimonyIntoLines(testimonial.testimony)
                      .join("\n")
                      .split("\n")
                      .map((line, i) => (
                        <p
                          key={i}
                          className={
                            expandedIndex === index || i < 5 ? "" : "hidden"
                          }
                        >
                          {line}
                        </p>
                      ))}
                    <button
                      className="mt-2 text-blue-500 text-sm"
                      onClick={() => toggleReadMore(index)}
                    >
                      {expandedIndex === index ? "Show Less" : "Read More"}
                    </button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </main>

    </>

  );
}
