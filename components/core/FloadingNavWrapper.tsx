// components/core/FloatingNavWrapper.tsx (Client Component)
"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { FloatingNav } from "@/components/core/navbar";

export default function FloatingNavWrapper({
  navItems,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: any;
  }[];
}) {
  const pathname = usePathname();
  const [pageType, setPageType] = useState<"front" | "other">("other");

  useEffect(() => {
    if (pathname === "/") {
      setPageType("front");
    } else {
      setPageType("other");
    }
  }, [pathname]);

  return <FloatingNav page={pageType} navItems={navItems} />;
}
