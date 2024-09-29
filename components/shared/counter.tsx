'use client'
import React, { useState, useRef, useEffect } from 'react';
import { animate, motion, useInView, useMotionValue, useTransform } from 'framer-motion';

interface Timer {
  from: number;
  to: number;
  title: string;
}

const NumberCounter = ({ timer }: { timer: Timer }) => {
  const counter = useMotionValue(timer.from);
  const roundedCounter = useTransform(counter, (latest) => Math.round(latest));
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      animate(counter, timer.to, { duration: 3 });
    }
  }, [counter, timer.to, isInView]);

  return (
    <div className="h-fit w-full gap-3 py-2 px-2 xl:px-4 text-neutral-500 flex flex-col md:text-sm xl:text-lg justify-center items-center">
      <div className="text-5xl md:text-4xl xl:text-5xl text-neutral-700 font-bold">
        <motion.span ref={ref}>{roundedCounter}</motion.span>
        {"+"}
      </div>
      <p className="text-lg lg:text-xl font-bold">{timer.title}</p>
    </div>
  );
};

export default NumberCounter;