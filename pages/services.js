import Head from "next/head";
import Link from "next/link";

export default function Services() {
  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans">
      <Head>
        <title>Services | Pantheon Tech</title>
      </Head>
      <main className="px-6 py-10 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Services</h1>
        <div className="space-y-6 text-lg">
          <div>
            <h2 className="text-2xl font-semibold">Data Strategy, Governance, and Readiness</h2>
            <p>
              A strong data foundation is essential for AI success. We help organizations of any size implement sound data governance, quality management, and architecture practices to ensure their data is trusted, accessible, and actionable.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Cloud and Infrastructure Modernization</h2>
            <p>
              As cloud costs continue to rise, organizations face growing pressure to optimize their infrastructure strategy. We help teams evaluate and rationalize capabilities across cloud providers, SaaS platforms, and on-premises systems. Our approach focuses on balancing flexibility with cost control while maximizing the return on existing investments. We assist teams in developing strategies that align with organizational goals, mission needs, and budget realities.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">AI and Intelligent Automation</h2>
            <p>
              AI is becoming unavoidable. Nearly every tool an organization evaluates today includes AI-driven features or claims. We help organizations critically assess these capabilities and rationalize their use across the data and IT ecosystem. Our approach ensures that AI adoption aligns with governance policies, protects sensitive data, and enhances operational effectiveness without creating silos or risk.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Low-Code, SaaS, and Citizen Development Governance</h2>
            <p>
              The explosion of SaaS tools and low-code platforms empowers teams to innovate, but without oversight, it can fragment your data estate and introduce security and compliance risks. We help organizations embrace citizen development while establishing governance frameworks that ensure consistency, data integrity, and long-term scalability.
            </p>
          </div>
        </div>
        <div className="mt-10">
          <Link href="/" className="text-blue-400 hover:underline">Back to Home</Link>
        </div>
      </main>
    </div>
  );
}