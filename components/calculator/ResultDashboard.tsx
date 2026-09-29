"use client";

import React from "react";
import { NormalizedSchedule } from "@/lib/calculator/types";
import { METABOLIC_MILESTONES } from "@/lib/calculator/milestones";
import { HorizonBar24 } from "../timeline/HorizonBar24";
import { downloadCalendarFile } from "@/lib/calculator/exportCalendar";
import {
  Calendar,
  Printer,
  Sparkles,
  CheckCircle2,
  Clock,
  Utensils,
  Moon,
  Info,
} from "lucide-react";

interface ResultDashboardProps {
  schedule: NormalizedSchedule;
}

export function ResultDashboard({ schedule }: ResultDashboardProps) {
  const handlePrint = () => {
    window.print();
  };

  const handleCalendarExport = () => {
    downloadCalendarFile(schedule);
  };

  return (
    <div className="bg-surface-container-lowest rounded-xl p-5 sm:p-7 border border-surface-container shadow-md flex flex-col gap-6">
      {/* Header and Live State Badge */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-surface-container/60">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse" />
            <h3 className="font-headline text-lg sm:text-xl font-bold text-on-surface">
              Your Calculated Schedule Blueprint
            </h3>
          </div>
          <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant mt-0.5">
            {schedule.protocol.name} • {schedule.isWeekly ? "Weekly Rhythm Model" : `${schedule.protocol.ratio} Time-Restricted Protocol`}
          </p>
        </div>

        {/* Schedule State Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container/40 border border-secondary/20 text-on-secondary-container font-semibold text-xs self-start sm:self-auto">
          <Sparkles className="w-3.5 h-3.5 text-secondary flex-shrink-0" />
          <span>{schedule.stateLabel}</span>
        </div>
      </div>

      {/* 4 Primary Metric Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {/* Metric 1: Fast Duration */}
        <div className="bg-primary text-on-primary rounded-xl p-3.5 sm:p-4 flex flex-col justify-between shadow-sm">
          <span className="font-label-sm text-xs text-on-primary-container font-semibold flex items-center gap-1">
            <Moon className="w-3.5 h-3.5" />
            <span>Fast Duration</span>
          </span>
          <div className="mt-2">
            <span className="font-headline text-xl sm:text-2xl font-bold tabular-numbers block">
              {schedule.isWeekly ? "2 Days / Week" : `${schedule.protocol.fastHours} Hours`}
            </span>
            <span className="font-body-sm text-[11px] text-on-primary-container block mt-0.5">
              {schedule.isWeekly ? "Reduced intake" : "Digestive rest"}
            </span>
          </div>
        </div>

        {/* Metric 2: Eating Window */}
        <div className="bg-surface-container-high rounded-xl p-3.5 sm:p-4 flex flex-col justify-between border border-surface-container">
          <span className="font-label-sm text-xs text-on-surface-variant font-semibold flex items-center gap-1">
            <Utensils className="w-3.5 h-3.5 text-primary" />
            <span>Eating Window</span>
          </span>
          <div className="mt-2">
            <span className="font-headline text-xl sm:text-2xl font-bold text-on-surface tabular-numbers block">
              {schedule.isWeekly ? "5 Days / Week" : `${schedule.protocol.eatingHours} Hours`}
            </span>
            <span className="font-body-sm text-[11px] text-on-surface-variant block mt-0.5">
              {schedule.isWeekly ? "Regular intake" : "Nourishment window"}
            </span>
          </div>
        </div>

        {/* Metric 3: Fast Starts */}
        <div className="bg-surface-container-low rounded-xl p-3.5 sm:p-4 flex flex-col justify-between border border-surface-container">
          <span className="font-label-sm text-xs text-on-surface-variant font-semibold flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-secondary" />
            <span>Fast Starts</span>
          </span>
          <div className="mt-2">
            <span className="font-headline text-xl sm:text-2xl font-bold text-primary tabular-numbers block">
              {schedule.isWeekly ? "Mon & Thu" : schedule.fastStartTime12}
            </span>
            <span className="font-body-sm text-[11px] text-on-surface-variant block mt-0.5">
              {schedule.isWeekly ? "Recommended days" : "After evening meal"}
            </span>
          </div>
        </div>

        {/* Metric 4: Break-Fast (First Meal) */}
        <div className="bg-tertiary-fixed/40 rounded-xl p-3.5 sm:p-4 flex flex-col justify-between border border-tertiary-fixed-dim/40">
          <span className="font-label-sm text-xs text-tertiary-container font-semibold flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-on-tertiary-container" />
            <span>Break-Fast (1st Meal)</span>
          </span>
          <div className="mt-2">
            <span className="font-headline text-xl sm:text-2xl font-bold text-on-tertiary-container tabular-numbers block">
              {schedule.isWeekly ? "Tue & Fri" : schedule.eatingStartTime12}
            </span>
            <span className="font-body-sm text-[11px] text-on-tertiary-container block mt-0.5">
              {schedule.isWeekly ? "Resume normal eating" : schedule.fastEndNextDay ? "Next day midday" : "Same day"}
            </span>
          </div>
        </div>
      </div>

      {/* Structured Schedule Milestones Breakdown */}
      {!schedule.isWeekly && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3.5 rounded-xl bg-surface-container-low border border-surface-container text-xs sm:text-sm">
          <div className="flex items-center justify-between p-2 rounded-lg bg-surface-container-lowest border border-surface-container">
            <span className="flex items-center gap-1.5 text-on-surface-variant font-medium">
              <Moon className="w-4 h-4 text-primary" />
              <span>Fasting Window:</span>
            </span>
            <span className="font-bold text-primary tabular-numbers">
              {schedule.fastStartTime12} → {schedule.fastEndTime12}
            </span>
          </div>

          <div className="flex items-center justify-between p-2 rounded-lg bg-surface-container-lowest border border-surface-container">
            <span className="flex items-center gap-1.5 text-on-surface-variant font-medium">
              <Utensils className="w-4 h-4 text-on-tertiary-container" />
              <span>Eating Window:</span>
            </span>
            <span className="font-bold text-on-tertiary-container tabular-numbers">
              {schedule.eatingStartTime12} → {schedule.eatingEndTime12}
            </span>
          </div>
        </div>
      )}

      {/* 24-Hour Horizon Bar */}
      <HorizonBar24 schedule={schedule} />

      {/* Real-time Status Notice */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 sm:p-3.5 rounded-lg bg-surface-container border border-surface-container-high">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
          <span className="font-body-sm text-xs sm:text-sm text-on-surface font-medium">
            {schedule.stateDescription}
          </span>
        </div>
        <span className="font-label-sm text-xs text-primary font-semibold sm:text-right">
          Local Timezone Synchronized
        </span>
      </div>

      {/* Metabolic Progression Stages (Non-deterministic evidence markers) */}
      {!schedule.isWeekly && (
        <div className="flex flex-col gap-2 pt-1">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
            <span className="font-label-sm text-xs font-bold uppercase tracking-wider text-on-surface">
              Metabolic Progression Transitions (Observational Guide)
            </span>
            <span className="font-label-sm text-[11px] text-on-surface-variant flex items-center gap-1">
              <Info className="w-3 h-3" />
              <span>Varies by individual metabolism</span>
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 pt-1">
            {METABOLIC_MILESTONES.map((milestone) => (
              <div
                key={milestone.id}
                className={`p-3 rounded-lg border border-surface-container flex flex-col justify-between ${milestone.colorClass}`}
              >
                <div>
                  <span className="font-label-sm text-[11px] font-bold text-on-surface-variant block">
                    {milestone.hourRange}
                  </span>
                  <span className="font-headline text-sm font-bold text-on-surface mt-0.5 block leading-tight">
                    {milestone.title}
                  </span>
                  <p className="font-body-sm text-[11px] text-on-surface-variant leading-relaxed mt-1">
                    {milestone.summary}
                  </p>
                </div>
                <span className="text-[10px] text-outline font-medium mt-2 pt-1 border-t border-outline/10">
                  {milestone.evidenceStrength}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Export & Utility Actions */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-surface-container/60">
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={handleCalendarExport}
            className="px-3.5 py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-semibold text-xs sm:text-sm inline-flex items-center gap-1.5 transition-colors border border-surface-container-high"
          >
            <Calendar className="w-4 h-4 text-primary" />
            <span>Add to Calendar (.ics)</span>
          </button>

          <button
            type="button"
            onClick={handlePrint}
            className="px-3.5 py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-semibold text-xs sm:text-sm inline-flex items-center gap-1.5 transition-colors border border-surface-container-high"
          >
            <Printer className="w-4 h-4 text-primary" />
            <span>Print Fasting Plan</span>
          </button>
        </div>

        <span className="font-label-sm text-xs text-on-surface-variant flex items-center gap-1">
          <CheckCircle2 className="w-3.5 h-3.5 text-secondary" />
          <span>Local execution • Zero data collected</span>
        </span>
      </div>
    </div>
  );
}
