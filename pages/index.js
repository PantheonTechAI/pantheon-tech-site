import React from "react";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pantheon Tech</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-slate-900 text-white font-sans">
        <header className="flex items-center justify-between p-4 shadow-md bg-slate-800">
          <div className="flex items-center space-x-2">
            <img src="/logo.png" alt="Pantheon Logo" className="h-10 w-auto" />
            <span className="text-xl font-bold">Pantheon Tech</span>
          </div>
          <nav className="space-x-4">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/services" className="hover:underline">Services</Link>
            <Link href="/about" className="hover:underline">About</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
          </nav>
        </header>

        <main className="flex flex-col items-center justify-center text-center py-20 px-4">
          <h1 className="text-5xl font-bold mb-6">Timeless Innovation</h1>
          <p className="text-xl max-w-2xl">
            Delivering modern technology solutions with enduring structure, clarity, and impact.
          </p>
        </main>

        <footer className="bg-slate-800 text-center text-sm py-4">
          <p>&copy; {new Date().getFullYear()} Pantheon Tech. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}