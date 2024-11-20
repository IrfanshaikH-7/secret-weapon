"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import { StaticNav } from "./static-nav";

export const FloatingNav = ({
  page,
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: any;
  }[];
  className?: string;
  page: "front" | "other";
}) => {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false); // Controls visibility
  const [isLoaded, setIsLoaded] = useState(false); // Tracks page load status

  useEffect(() => {
    // Set isLoaded to true after initial render
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      if (page === "front") {
        setVisible(scrollY.get() > 300);
      } else {
        setVisible(true);
      }
    }
  }, [page, scrollY, isLoaded]);

  useMotionValueEvent(scrollY, "change", (current) => {
    if (page === "front" && isLoaded) {
      setVisible(current > 300);
    }
  });

  return (
    <AnimatePresence mode="wait">
      {isLoaded && (
        <motion.div
          initial={{
            opacity: page === "front" ? 0 : 1,
            y: page === "front" ? -100 : 0,
          }}
          animate={{
            y: visible ? 0 : -100,
            opacity: visible ? 1 : 0,
          }}
          transition={{
            duration: 0.2,
          }}
          className={cn(
            "flex max-w-full z-[9999999999] fixed -top-1 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-b-xl dark:bg-black  bg-white backdrop-blur-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] pr-2 pl-8 py-2 items-center justify-center space-x-4",
            className,
            page === "other" && "fixed -top-1 inset-x-0 mx-auto"
          )}
        >
          <StaticNav isDefault={true} color="black" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
