"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-border">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-lg font-bold tracking-tight">
          AIBOU
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/concept"
            className="text-sm text-secondary hover:text-primary transition-colors"
          >
            コンセプト
          </Link>
          <Link
            href="/service"
            className="text-sm text-secondary hover:text-primary transition-colors"
          >
            サービス
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium bg-primary text-white px-5 py-2 rounded hover:opacity-80 transition-opacity"
          >
            面談を申し込む
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="メニューを開く"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <nav className="md:hidden bg-white border-b border-border px-6 py-4 flex flex-col gap-4">
          <Link
            href="/concept"
            className="text-sm text-secondary"
            onClick={() => setIsOpen(false)}
          >
            コンセプト
          </Link>
          <Link
            href="/service"
            className="text-sm text-secondary"
            onClick={() => setIsOpen(false)}
          >
            サービス
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium bg-primary text-white px-5 py-2 rounded text-center"
            onClick={() => setIsOpen(false)}
          >
            面談を申し込む
          </Link>
        </nav>
      )}
    </header>
  );
}
