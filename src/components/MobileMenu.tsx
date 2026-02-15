"use client";

import { useState } from "react";

const links = [
  { href: "#problem", label: "お悩み" },
  { href: "#reasons", label: "選ばれる理由" },
  { href: "#service", label: "サービス" },
  { href: "#trainer", label: "トレーナー" },
  { href: "#plans", label: "プラン" },
  { href: "#faq", label: "FAQ" },
] as const;

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? "メニューを閉じる" : "メニューを開く"}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="relative z-40 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
      >
        <span
          className={`block w-5 h-0.5 bg-gray-900 transition-all duration-200 ${
            open ? "rotate-45 translate-y-[4px]" : ""
          }`}
        />
        <span
          className={`block w-5 h-0.5 bg-gray-900 transition-all duration-200 ${
            open ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block w-5 h-0.5 bg-gray-900 transition-all duration-200 ${
            open ? "-rotate-45 -translate-y-[4px]" : ""
          }`}
        />
      </button>

      {open && (
        <nav className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-900/10 py-4 px-6 flex flex-col gap-1 shadow-lg z-30">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-gray-700 font-semibold hover:text-gray-900 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 flex items-center justify-center px-5 py-3 rounded-full bg-gray-800 text-white font-bold text-sm"
          >
            無料の相棒診断（30分）
          </a>
        </nav>
      )}
    </div>
  );
}
