"use client";

import React from "react";
import Link from "next/link";
import { ProtocolDefinition } from "@/lib/calculator/types";
import { Clock, Activity, ArrowRight, Check } from "lucide-react";

interface ProtocolCardProps {
  protocol: ProtocolDefinition;
  isFeatured?: boolean;
  onSelect?: (protocolId: string) => void;
}

export function ProtocolCard({ protocol, isFeatured = false, onSelect }: ProtocolCardProps) {
  const isWeekly = protocol.type === "weekly";

  return (
    <div
      className={`bg-surface-container-lowest rounded-2xl p-6 border transition-all flex flex-col justify-between relative ${
        isFeatured
          ? "border-primary ring-2 ring-primary/20 shadow-lg"
          : "border-surface-container hover:border-surface-container-high shadow-sm hover:shadow-md"
      }`}
    >
      {isFeatured && (
        <div className="absolute -top-3 right-6 bg-primary text-on-primary text-[11px] font-semibold px-3 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
          Featured
        </div>
      )}

      <div>
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="font-headline text-xl font-bold text-on-surface">
            {protocol.name}
          </span>
          <span className="px-2.5 py-0.5 bg-surface-container-high text-primary rounded-full font-label-sm text-xs font-semibold tabular-numbers">
            {protocol.ratio}
          </span>
        </div>

        <p className="font-body-sm text-sm text-on-surface-variant mb-4 leading-relaxed">
          {protocol.description}
        </p>

        <div className="space-y-2 mb-6 text-on-surface">
          <div className="flex items-start gap-2 text-xs sm:text-sm">
            <Clock className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
            <span className="text-on-surface font-medium">{protocol.exampleSchedule}</span>
          </div>
          <div className="flex items-start gap-2 text-xs sm:text-sm">
            <Activity className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
            <span className="text-on-surface-variant">{protocol.cellularMarker}</span>
          </div>
          <div className="flex items-start gap-2 text-xs sm:text-sm">
            <Check className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
            <span className="text-on-surface-variant">
              <strong className="text-on-surface">Context:</strong> {protocol.bestFor}
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 pt-2 border-t border-surface-container/60">
        <Link
          href={`/#calculator`}
          onClick={() => {
            if (onSelect) onSelect(protocol.id);
            if (typeof window !== "undefined") {
              window.dispatchEvent(new CustomEvent("fasttrack-set-protocol", { detail: protocol.id }));
            }
          }}
          className={`flex-1 py-2.5 px-4 rounded-lg font-semibold text-xs sm:text-sm text-center transition-all ${
            isFeatured
              ? "bg-primary text-on-primary hover:bg-primary-container shadow-sm"
              : "bg-surface-container text-on-surface hover:bg-surface-container-high"
          }`}
        >
          Use {protocol.ratio} Schedule
        </Link>
        <Link
          href={`/fasting-methods/${protocol.id}`}
          className="p-2.5 text-on-surface-variant hover:text-primary rounded-lg hover:bg-surface-container transition-colors"
          aria-label={`Read in-depth guide for ${protocol.name}`}
        >
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
