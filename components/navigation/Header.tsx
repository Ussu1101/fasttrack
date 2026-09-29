"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { Menu, X, Timer, BookOpen, Compass, HelpCircle, ShieldCheck } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile drawer on Escape key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "Calculator", href: "/#calculator", icon: Timer },
    { label: "Fasting Methods", href: "/fasting-methods", icon: Compass },
    { label: "How It Works", href: "/#how-it-works", icon: ShieldCheck },
    { label: "Fasting Guides", href: "/guides", icon: BookOpen },
    { label: "FAQ", href: "/faq", icon: HelpCircle },
  ];

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-xl border-b border-surface-container shadow-[0_1px_8px_rgba(0,0,0,0.03)] transition-all">
      <div className="h-20 max-w-7xl mx-auto px-4 md:px-8 lg:px-12 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <div className="flex items-center gap-6">
          <Logo className="h-9 w-auto" showTagline={true} />
        </div>

        {/* Desktop Navigation */}
        <nav
          className="hidden lg:flex items-center gap-1 bg-surface-container/60 p-1.5 rounded-full border border-surface-container-high"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-sm font-semibold rounded-full transition-all ${
                  isActive
                    ? "bg-surface-container-lowest text-primary shadow-sm"
                    : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high/60"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Action Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/#calculator"
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 bg-primary text-on-primary font-semibold text-sm rounded-lg hover:bg-primary-container transition-all shadow-[0_2px_8px_rgba(15,76,71,0.16)] active:scale-[0.98]"
          >
            Start Calculator
          </Link>

          <button
            type="button"
            className="lg:hidden p-2.5 text-on-surface-variant hover:text-on-surface hover:bg-surface-container rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-surface-container bg-surface-container-lowest px-4 py-6 shadow-xl animate-in slide-in-from-top-2">
          <nav className="flex flex-col gap-2" aria-label="Mobile Navigation">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium text-on-surface hover:bg-surface-container transition-colors"
                >
                  <Icon className="w-5 h-5 text-primary" />
                  <span>{link.label}</span>
                </Link>
              );
            })}
            <div className="pt-4 mt-2 border-t border-surface-container">
              <Link
                href="/#calculator"
                onClick={closeMenu}
                className="w-full inline-flex items-center justify-center py-3 px-4 bg-primary text-on-primary font-semibold text-sm rounded-lg hover:bg-primary-container text-center transition-all shadow-md"
              >
                Start Calculator
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
