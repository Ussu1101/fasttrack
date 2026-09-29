"use client";

import React from "react";
import { PROTOCOL_LIST } from "@/lib/calculator/protocols";
import { ProtocolCard } from "./ProtocolCard";
import { Compass } from "lucide-react";

interface ProtocolGridProps {
  onSelectProtocol?: (protocolId: string) => void;
}

export function ProtocolGrid({ onSelectProtocol }: ProtocolGridProps) {
  return (
    <section id="methods" className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-16">
      <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
        <span className="font-label-sm text-xs sm:text-sm text-secondary font-bold uppercase tracking-widest flex items-center justify-center gap-1.5">
          <Compass className="w-4 h-4" />
          <span>Protocol Comparative Matrix</span>
        </span>
        <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl text-primary font-bold tracking-tight mt-1">
          Explore Common Fasting Protocols
        </h2>
        <p className="font-body-md text-sm sm:text-base text-on-surface-variant mt-2 leading-relaxed">
          Choose the fasting duration and window that aligns with your daily routine, metabolic experience, and cellular recovery preferences.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {PROTOCOL_LIST.map((protocol) => (
          <ProtocolCard
            key={protocol.id}
            protocol={protocol}
            isFeatured={protocol.id === "16-8"}
            onSelect={onSelectProtocol}
          />
        ))}
      </div>
    </section>
  );
}
