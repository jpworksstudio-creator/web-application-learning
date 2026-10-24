import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dev Practice Lab",
  description:
    "Web アプリ開発の技術を、小さな練習ページで体験しながら学ぶためのミニ教材アプリ",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header className="border-b border-zinc-200 dark:border-zinc-800">
          <div className="mx-auto flex w-full max-w-3xl flex-wrap items-center gap-6 px-6 py-4">
            <Link href="/" className="font-semibold">
              Dev Practice Lab
            </Link>
            <nav>
              <Link href="/topics" className="underline">
                学習トピック一覧
              </Link>
            </nav>
          </div>
        </header>
        <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-16">
          {children}
        </main>
      </body>
    </html>
  );
}
