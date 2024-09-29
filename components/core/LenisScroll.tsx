"use client"
import { useEffect, useRef } from "react";
import Lenis from "lenis";

const LenisScroll = () => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const newLenis = new Lenis({
      duration: 1,
      easing: (t: any) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true, 
      gesture: true,
    }as any);

    lenisRef.current = newLenis;

    function raf(time: number) {
      lenisRef.current?.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenisRef.current?.destroy();
    };
  }, []);

  return null;
};

export default LenisScroll;