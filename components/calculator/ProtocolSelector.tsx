"use client";

import React from "react";
import { PROTOCOL_LIST } from "@/lib/calculator/protocols";
import { ProtocolId } from "@/lib/calculator/types";

interface ProtocolSelectorProps {
  selectedProtocolId: ProtocolId;
  onSelectProtocol: (id: ProtocolId) => void;
}

export function ProtocolSelector({ selectedProtocolId, onSelectProtocol }: ProtocolSelectorProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between pb-1">
        <label className="font-headline text-base sm:text-lg text-on-surface font-semibold">
          1. Choose Fasting Method
        </label>
        <span className="font-label-sm text-xs bg-primary-fixed text-on-primary-fixed px-2.5 py-0.5 rounded-full font-semibold">
          {PROTOCOL_LIST.find((p) => p.id === selectedProtocolId)?.name}
        </span>
      </div>

      {/* Segmented Controls (DESIGN.md specification: container #F1F5F9 with 6px internal padding) */}
      <div
        className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 p-1.5 bg-[#F1F5F9] rounded-xl border border-slate-200"
        role="radiogroup"
        aria-label="Fasting Protocol Selection"
      >
        {PROTOCOL_LIST.map((p) => {
          const isSelected = p.id === selectedProtocolId;
          const isWeekly = p.type === "weekly";

          return (
            <button
              key={p.id}
              type="button"
              role="radio"
              aria-checked={isSelected}
              onClick={() => onSelectProtocol(p.id)}
              className={`p-2.5 rounded-md text-center transition-all ${
                isWeekly ? "col-span-2 sm:col-span-2" : ""
              } ${
                isSelected
                  ? "bg-[#FFFFFF] text-[#0F172A] shadow-[0_2px_8px_rgba(15,23,42,0.08)] ring-1 ring-slate-900/5 font-bold"
                  : "text-[#64748B] hover:text-[#0F172A] bg-transparent hover:bg-white/40"
              }`}
            >
              <div className="font-headline text-base font-bold leading-tight tabular-numbers">
                {p.ratio}
              </div>
              <div
                className={`font-label-sm text-[11px] truncate mt-0.5 ${
                  isSelected ? "text-primary font-semibold" : "text-[#64748B]"
                }`}
              >
                {p.difficulty}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
