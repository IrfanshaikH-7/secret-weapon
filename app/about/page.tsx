'use client'
import React, { useEffect, useState } from 'react';
import ContentSection from "@/components/shared/ContentSection";
import NeedAssistant from "@/components/shared/need-assistant";
import { Testimonials } from "@/components/shared/Testimonials";
import { Baby, Handshake, Lightbulb } from "lucide-react";
import { StaticNav } from "@/components/core/static-nav";

export default function AboutPage() {
  const [isWideScreen, setIsWideScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 1024);
    };

    handleResize(); // Check on mount
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className={`h-full flex flex-col gap-12 w-full  max-w-[2546px] mx-auto  md:mt-0 relative overflow-x-hidden `}>
      <section className="h-full w-full p-4">
      <div className="h-full w-full min-h-80 relative flex flex-col items-center justify-center p-2 bg-black rounded-[40px]">
      {/* <span className="h-40 w-40 lg:h-[300px] lg:w-[300px] bg-transparent pointer-events-none border-[6px] md:border-[12px]  rounded-[40px] top-[354px] md:top-80 lg:top-40 z-20 -right-10 md:right-5 lg:right-10 border-yellow-300 absolute rotate-45" /> */}
      <div className='absolute top-4 right-12 hidden md:block'>
        <StaticNav color={'white'} />

       </div>
        <div className="max-w-3xl flex flex-col items-center z-10">
          <h2 className="text-white text-center text-4xl lg:text-5xl font-extrabold">
            About Secret Weapon
          </h2>
          <p className="text-neutral-300 text-center mt-4 text-xs md:text-lg leading-snug px-4 ">
            {/* With over a decade of trading experience and three years in the
            industry, our expert team specializes in developing and implementing
            innovative trading strategies using platforms like AmiBroker and
            TradingView, dedicated to delivering the most effective solutions to
            our clients. */}
            With over a decade in trading and three years in the industry, specializes in innovative strategies using AmiBroker and TradingView, ensuring effective solutions.
          </p>
        </div>
      </div>
      </section>
      
      {/* <div className="relative mt-12 ">
      <div className="absolute h-24 w-24 rounded-xl  custom-bounce top-60 xl:left-48 left-32 hidden lg:flex">
          <div className="h-3 w-3 bg-slate-400 rounded-full absolute -top-4 -left-4"/>
          <Image src={'/why-us/bars.jpeg'} alt="bar" fill className="rounded-xl "  />
          </div>
          <div className="absolute rounded-xl h-24 w-24 custom-bounce top-20 xl:right-48 right-32 hidden lg:flex">
          <div className="h-3 w-3 bg-slate-400 rounded-full absolute -top-4  -right-4"/>
          <Image src={'/why-us/man.jpeg'} alt="bar" fill className="rounded-xl object-contain"  /></div>
       
        <article className="flex flex-col gap-4 items-center max-w-xl mx-auto">
          <h2 className="text-4xl font-extrabold">Our Vision</h2>
          <h4 className="text-lg font-semibold text-neutral-700 text-center">
            Revolutionizing Trading through Innovative Algo Solutions
          </h4>
          <p className="text-base md:text-lg text-neutral-400 text-center">
            we are here with the vision of an algo trading company committed to
            transforming the way trading is done. With an emphasis on
            innovation, the company aims to create advanced trading solutions
            through the use of cutting-edge technology and algorithms. The goal
            is to revolutionize the industry by offering clients access to
            customized, high-performance trading strategies that are designed to
            maximize their profits.
          </p>
          <p className="text-base md:text-lg text-neutral-400 text-center">
            Ultimately, the mission is to deliver innovative algo solutions that
            not only meet, but exceed the expectations of clients and contribute
            to their success in the trading world.
          </p>
        </article>
      </div> */}
      <div className={`pb-28 relative h-fit ${isWideScreen ? 'shapedividers_com-7328' : ''}`}>

      <ContentSection
      isSeparated={true}
        content="right"
        SuperTitle="Our Vision"
        title="Revolutionizing Trading through Innovative Algo Solutions"
        image="/ssss.png"
        
        descriptions={[
          "we are here with the vision of an algo trading company committed to transforming the way trading is done. With an emphasis on innovation, the company aims to create advanced trading solutions through the use of cutting-edge technology and algorithms. The goal is to revolutionize the industry by offering clients access to customized, high-performance trading strategies that are designed to maximize their profits.",
          " Ultimately, the mission is to deliver innovative algo solutions that not only meet, but exceed the expectations of clients and contribute to their success in the trading world.",
        ]}
      />
     
      </div>
     
      <div className="pb-16 -mt-28 pt-20 lg:pt-0 relative h-fit shapedividers_com-2914">
       <ContentSection
        content="left"
        title="Providing a competitive edge through algorithmic trading"
        image="/about/system.png"
        descriptions={[
          "Our mission to empower traders with advanced algorithmic solutions that provide them with a significant competitive advantage in the market. By leveraging cutting-edge technologies and innovative strategies, our goal is to help our clients achieve their trading objectives and maximize their profitability.",
          "Our team is dedicated to providing tailored algorithmic trading solutions that are designed to meet the unique needs of our clients, enabling them to stay ahead of the competition and achieve success in the fast-paced world of trading.",
        ]}
      />
      </div>
     
      <section className="h-full p-4 w-full flex flex-col items-center justify-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-black text-center text-4xl  font-extrabold">
            Algo trading will help you if you are
          </h2>
          <h4 className="mt-2 font-semibold text-neutral-700 text-center">
            Algo trading can help everyone by providing a disciplined and
            systematic approach to trading, which can lead to more consistent
            and profitable outcomes. Algo trading can also be beneficial for
            those who may not have the time or expertise to actively monitor and
            trade the market on their own.
          </h4>
        </div>
        <div className="flex items-center justify-center gap-[120px] max-w-[1340px] mt-8 flex-wrap  w-full">
          <div className="max-w-[360px] bg-grad bg-neutral-100 rounded-3xl h-96 w-full overflow-hidden">
            <div className="p-3 flex items-center px-4 py-6  gap-3 bg-black rounded-b-2xl overflow-hidden">
              <Handshake size={24} className=" text-white " />
              <h3 className="text-white font-semibold text-lg">
                Professional traders
              </h3>
            </div>
            <p className="text-neutral-600  mt-4 text-[15px] sm:text-base px-4 ">
              Algo trading can help professional traders and investors who are
              seeking to reduce their emotional biases in decision-making and
              execute trades more efficiently based on data-driven strategies.
              Additionally, it can help mitigate the risks as it eliminates the
              potential for human error or emotional bias in decision-making.{" "}
            </p>
          </div>
          <div className="max-w-[340px]  bg-neutral-100 rounded-3xl h-96 w-full overflow-hidden">
            <div className="p-3 flex items-center px-4 py-6  gap-3 bg-black rounded-b-2xl overflow-hidden">
              <Lightbulb size={24} className=" text-white " />
              <h3 className="text-white font-semibold text-lg">
                Working Professional
              </h3>
            </div>
            <p className="text-neutral-600  mt-4 text-[15px] sm:text-base px-4 ">
              Algo trading can help working professionals by enabling them to
              automate their trading strategies, allowing them to trade even
              while they are busy with their day jobs. This can help them
              maximize their returns and manage their portfolios more
              efficiently.
            </p>
          </div>
          <div className="max-w-[340px]  bg-neutral-100 rounded-3xl h-96 w-full overflow-hidden">
            <div className="p-3 flex items-center px-4 py-6  gap-3 bg-black rounded-b-2xl overflow-hidden">
              <Baby size={24} className=" text-white " />
              <h3 className="text-white font-semibold text-lg">
                Novice traders
              </h3>
            </div>
            <p className="text-neutral-600  mt-4 text-[15px] sm:text-base px-4 ">
              Algo trading can provide opportunities for individuals who may not
              have extensive trading experience but are interested in utilizing
              technology to invest in the market. For novice traders, it can
              save time and effort by automating the process of analyzing and
              executing trades,{" "}
            </p>
          </div>
        </div>
      </section>

      
      <div className="flex items-center p-4 w-full max-w-[1450px] mx-auto justify-center overflow-x-hidden">

  <Testimonials />
  </div>
      <NeedAssistant />
    </section>
  );
}
