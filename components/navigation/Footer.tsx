import React from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { ShieldAlert, CheckCircle2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-surface-container-low border-t border-surface-container mt-auto">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand & Purpose */}
          <div className="lg:col-span-2 flex flex-col items-start gap-4">
            <Logo className="h-9 w-auto" />
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm leading-relaxed">
              Circadian-aligned intermittent fasting scheduling tools designed for sustainable metabolic rhythm and daytime clarity.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-lowest border border-surface-container shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
              <span className="font-label-sm text-label-sm text-on-surface">
                Local-First • Zero Registration • Private
              </span>
            </div>
          </div>

          {/* Column 1: Protocols */}
          <div className="flex flex-col gap-2.5">
            <span className="font-label-sm text-label-sm text-on-surface uppercase tracking-wider font-bold">
              Protocols
            </span>
            <Link href="/fasting-methods/16-8" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">
              16:8 Protocol
            </Link>
            <Link href="/fasting-methods/14-10" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">
              14:10 Gentle Reset
            </Link>
            <Link href="/fasting-methods/12-12" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">
              12:12 Circadian
            </Link>
            <Link href="/fasting-methods/18-6" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">
              18:6 Accelerated
            </Link>
            <Link href="/fasting-methods/20-4" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">
              20:4 Warrior
            </Link>
            <Link href="/fasting-methods/omad" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">
              OMAD (23:1)
            </Link>
            <Link href="/fasting-methods/5-2" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">
              5:2 Weekly Pattern
            </Link>
          </div>

          {/* Column 2: Educational Guides */}
          <div className="flex flex-col gap-2.5">
            <span className="font-label-sm text-label-sm text-on-surface uppercase tracking-wider font-bold">
              Fasting Guides
            </span>
            <Link href="/guides/what-breaks-a-fast" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">
              What Breaks a Fast?
            </Link>
            <Link href="/guides/what-can-you-drink-while-fasting" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">
              What Can You Drink While Fasting?
            </Link>
            <Link href="/guides/exercise-while-fasting" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">
              Exercise While Fasting
            </Link>
            <Link href="/guides/how-does-intermittent-fasting-work" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">
              How Intermittent Fasting Works
            </Link>
            <Link href="/guides/how-to-choose-a-fasting-window" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">
              How to Choose a Window
            </Link>
            <Link href="/guides/intermittent-fasting-for-beginners" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">
              Beginners Fasting Guide
            </Link>
          </div>

          {/* Column 3: Trust & Legal */}
          <div className="flex flex-col gap-2.5">
            <span className="font-label-sm text-label-sm text-on-surface uppercase tracking-wider font-bold">
              Trust & Legal
            </span>
            <Link href="/about" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">
              About FastTrack
            </Link>
            <Link href="/contact" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">
              Contact Us
            </Link>
            <Link href="/privacy" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="/medical-disclaimer" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors font-medium">
              Medical Disclaimer
            </Link>
          </div>

          {/* Column 4: Quick Safety Badge */}
          <div className="flex flex-col gap-3">
            <span className="font-label-sm text-label-sm text-on-surface uppercase tracking-wider font-bold">
              Safety Priority
            </span>
            <div className="p-3.5 rounded-xl bg-surface-container-lowest border border-surface-container shadow-sm flex flex-col gap-2">
              <div className="flex items-center gap-1.5 text-primary font-semibold text-xs">
                <ShieldAlert className="w-4 h-4 text-primary flex-shrink-0" />
                <span>Not Medical Advice</span>
              </div>
              <p className="font-body-sm text-[11px] text-on-surface-variant leading-relaxed">
                Consult a physician before fasting, especially if pregnant, nursing, under 18, or taking diabetes/blood-sugar medications.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-surface-container flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-secondary"></span>
            <span className="font-label-md text-label-md text-on-surface-variant">
              FastTrack Metabolic Scheduling Engine • Circadian Timing Utility
            </span>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant text-center md:text-right">
            © {new Date().getFullYear()} FastTrack. Built for circadian precision and metabolic awareness.
          </p>
        </div>
      </div>
    </footer>
  );
}
