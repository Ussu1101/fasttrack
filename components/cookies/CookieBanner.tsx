"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "ft-cookie-consent";

type GtagFn = (...args: unknown[]) => void;

function getGtag(): GtagFn {
  const w = window as unknown as {
    gtag?: GtagFn;
    dataLayer?: unknown[];
  };
  if (!w.gtag) {
    w.dataLayer = w.dataLayer || [];
    w.gtag = (...args: unknown[]) => {
      w.dataLayer!.push(args);
    };
  }
  return w.gtag;
}

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        setVisible(true);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  const choose = (granted: boolean) => {
    try {
      localStorage.setItem(STORAGE_KEY, granted ? "accepted" : "rejected");
    } catch {
      // storage unavailable — still hide the banner
    }
    getGtag()("consent", "update", {
      ad_storage: granted ? "granted" : "denied",
      analytics_storage: granted ? "granted" : "denied",
    });
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-3xl rounded-2xl bg-inverse-surface p-4 shadow-2xl sm:bottom-6 sm:p-5"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-relaxed text-inverse-on-surface">
          We use cookies to keep the site working — and only if you accept, for
          analytics and ads.{" "}
          <a href="/privacy" className="underline underline-offset-2">
            Learn more
          </a>
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => choose(false)}
            className="rounded-full border border-outline-variant px-4 py-2 text-sm font-semibold text-inverse-on-surface transition hover:bg-white/10"
          >
            Reject
          </button>
          <button
            type="button"
            onClick={() => choose(true)}
            className="rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-on-secondary transition hover:brightness-110"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
