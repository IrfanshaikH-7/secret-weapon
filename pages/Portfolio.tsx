'use client';
import { ImageSwiper } from "@/components/custom/Carousel";
import { ComboboxDemo } from "@/components/custom/comboBox";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { tabsData } from "@/contants/portfolioData";
import { cardVariants, containerVariants } from "@/lib/variants";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useMemo, useEffect } from "react";

export default function Portfolio() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [filter, setFilter] = useState<string>("");
  const [comboFilter, setComboFilter] = useState<string>("");
  const [tab, setTab] = useState<string>("all");

  const handleMouseMove = (e: any) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCursorPosition({ x, y });
  };

  // Update `tab` state only when `comboFilter` changes
  useEffect(() => {
    if (comboFilter) {
      setTab(comboFilter);
    }
  }, [comboFilter]);

  const filteredProjects = useMemo(() => {
    if (tab === 'all') {
      const allProjects = Object.values(tabsData).flat();
      return allProjects.filter(project =>
        project.projectname.toLowerCase().includes(filter.toLowerCase())
      );
    } else {
      const tabProjects = tabsData[tab] || []; 
      return tabProjects.filter(project =>
        filter === "" || project.projectname.toLowerCase().includes(filter.toLowerCase())
      );
    }
  }, [filter, tab]);

  return (
    <section className="w-full h-full lg:px-12 py-12 md:py-24 lg:py-32">
      <Tabs value={tab} className="w-full h-full" onValueChange={setTab}>
        <TabsList className="w-full flex flex-wrap gap-4">
          <TabsTrigger value="all" className="min-w-24 lg:min-w-40 hover:bg-neutral-50">All</TabsTrigger>
          <TabsTrigger value="ambi-broker" className="min-w-24 lg:min-w-40 hover:bg-neutral-50">AMBIBROKER</TabsTrigger>
          <TabsTrigger value="trading-view" className="min-w-24 lg:min-w-40 hover:bg-neutral-50">TRADING VIEW</TabsTrigger>
          <TabsTrigger value="python" className="min-w-24 lg:min-w-40 hover:bg-neutral-50">PYTHON</TabsTrigger>
          <TabsTrigger value="metra-trader" className="min-w-24 lg:min-w-40 hover:bg-neutral-50">METRA TRADER</TabsTrigger>
          <TabsTrigger value="excel" className="min-w-24 lg:min-w-40 hover:bg-neutral-50">EXCEL</TabsTrigger>
        </TabsList>

        {/* Input for filtering projects */}
        <div className="mt-4 mb-6 flex border items-center max-w-md mx-auto p-2 rounded-3xl overflow-hidden relative">
          <ComboboxDemo value={comboFilter} setValue={setComboFilter} />
          <Input
            type="text"
            placeholder="Filter projects by name..."
            className="w-full p-2 border-none"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>

        <TabsContent value={tab} className="h-full">
          <motion.div
            className="grid grid-cols-1 h-full gap-4 lg:gap-12 md:grid-cols-2 justify-start content-start items-start xl:grid-cols-3 mt-6 lg:mt-0 lg:p-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <AnimatePresence initial={false} mode="wait">
              {filteredProjects.map((project, idx) => (
                <motion.article
                  className="rounded-lg border group h-full bg-background shadow-sm relative overflow-hidden"
                  key={project.projectname + idx}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <Dialog>
                    <DialogTrigger asChild>
                      <div
                        className="h-72 w-full group overflow-hidden relative cursor-none custom-cursor-container"
                        onMouseMove={handleMouseMove}
                        onMouseEnter={() => setHoveredIndex(idx)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        onClick={() => console.log(project.projectname)}
                      >
                        <img
                          src={project.images[0]}
                          alt="project-image"
                          className="object-fill h-full w-full transition-all duration-300"
                        />
                        {/* Animated SVG Cursor */}
                        {hoveredIndex === idx && (
                          <motion.div
                            className="custom-cursor absolute w-12 h-12 bg-white/60 rounded-full bg-[url('/svgs/custom_cursor.svg')] bg-no-repeat bg-contain pointer-events-none"
                            style={{
                              top: cursorPosition.y,
                              left: cursorPosition.x,
                            }}
                            animate={{ opacity: 1, scale: 1 }}
                            initial={{ opacity: 0, scale: 0.5 }}
                            exit={{ opacity: 0, scale: 0.5 }}
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                          />
                        )}
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-[330px] sm:max-w-[505px]">
                      <ImageSwiper images={project.images} />
                      <div className="p-3 relative">
                        <span className="text-neutral-600 text-[10px] top-0 right-1 absolute">Drag or hover for navigation</span>
                        <p className="text-xl font-semibold">{project.projectname}</p>
                      </div>
                    </DialogContent>
                  </Dialog>
                  <div className="px-3 space-y-2 py-2 group-hover:translate-x-2 transition-transform duration-300">
                    <h3 className="text-lg md:text-xl font-bold">{project.projectname}</h3>
                    <p className="text-muted-foreground text-[15px] line-clamp-[7]">{project.description}</p>
                  </div>
                  <div className="px-3 pb-4 pt-2">
                  <Link className='bg-black text-white p-1.5 px-6 rounded-md' href={"https://api.whatsapp.com/send?phone=9023797391&text=Hi%20There!"} target="_blank" >
                            Get Quotes
                        </Link>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </TabsContent>
      </Tabs>
    </section>
  );
}
