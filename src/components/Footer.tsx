import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg-subtle">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <p className="text-lg font-bold tracking-tight">AIBOU</p>
            <p className="text-sm text-secondary mt-2">
              AIトレーナーAIBOU
            </p>
            <p className="text-xs text-secondary mt-1">
              AIを「使う」から、AIと「働く」へ。
            </p>
          </div>
          <nav className="flex flex-col gap-2 text-sm text-secondary">
            <Link href="/" className="hover:text-primary transition-colors">
              トップ
            </Link>
            <Link
              href="/concept"
              className="hover:text-primary transition-colors"
            >
              コンセプト
            </Link>
            <Link
              href="/service"
              className="hover:text-primary transition-colors"
            >
              サービス
            </Link>
            <Link
              href="/contact"
              className="hover:text-primary transition-colors"
            >
              お問い合わせ
            </Link>
          </nav>
        </div>
        <div className="mt-10 pt-6 border-t border-border text-xs text-secondary">
          &copy; {new Date().getFullYear()} AIBOU. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
