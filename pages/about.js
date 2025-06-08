import Head from "next/head";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans">
      <Head>
        <title>About | Pantheon Tech</title>
      </Head>
      <main className="px-6 py-10 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        <p className="mb-6 text-lg">
          Pantheon Tech delivers modern technology solutions built on timeless principles: integrity, clarity, and measurable impact. With deep experience across public, non-profit, and commercial sectors, we help organizations make confident decisions in a rapidly evolving digital landscape.
        </p>
        <p className="mb-6 text-lg">
          We specialize in data and platform strategy, cloud optimization, and AI readiness. Whether guiding enterprise transformation or supporting a single product team, we meet clients where they are and work collaboratively to deliver sustainable results.
        </p>
        <p className="text-lg">
          We believe successful transformation begins with a strong foundation: clear principles, aligned priorities, and a disciplined approach to execution. Our consulting philosophy is rooted in clarity, accountability, and partnership. The name Pantheon reflects our commitment to building durable, well-structured solutions that stand the test of time. Like its namesake, we aim to deliver solutions that are resilient, efficient, and engineered for long-term impact.
        </p>
        <div className="mt-10">
          <Link href="/" className="text-blue-400 hover:underline">Back to Home</Link>
        </div>
      </main>
    </div>
  );
}