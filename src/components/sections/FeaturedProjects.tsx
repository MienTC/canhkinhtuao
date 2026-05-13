"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/lib/data";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";


const tabs = ["Tất Cả", "Chung Cư", "Biệt Thự", "Showroom", "Văn Phòng", "Nhà Phố"];

export const FeaturedProjects = () => {
  const [activeTab, setActiveTab] = useState("Tất Cả");

  const filteredProjects = activeTab === "Tất Cả" 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <SectionHeading 
            title="CÔNG TRÌNH TIÊU BIỂU" 
            centered={false}
            className="mb-0"
          />
          <div className="hidden md:block">
            <Link href="/cong-trinh" className="inline-flex items-center gap-1 text-brand-green font-bold hover:gap-2 transition-all">
              XEM TẤT CẢ <ChevronRight size={20} />
            </Link>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-semibold transition-all border",
                activeTab === tab 
                  ? "bg-brand-green text-white border-brand-green" 
                  : "bg-white text-brand-muted border-gray-200 hover:border-brand-green hover:text-brand-green"
              )}
            >
              {tab}
            </button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-10 md:hidden text-center">
          <Button href="/cong-trinh" variant="outline" className="w-full">
            XEM TẤT CẢ
          </Button>
        </div>
      </div>
    </section>
  );
};
