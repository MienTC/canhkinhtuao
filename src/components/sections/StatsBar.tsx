import React from "react";
import { StatItem } from "@/components/ui/StatItem";
import { stats } from "@/lib/data";

export const StatsBar = () => {
  return (
    <section className="bg-brand-green py-12 md:py-16">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat) => (
            <StatItem key={stat.id} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
};
