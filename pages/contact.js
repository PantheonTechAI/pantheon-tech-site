import Head from "next/head";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans">
      <Head>
        <title>Contact | Pantheon Tech</title>
      </Head>
      <main className="px-6 py-10 max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <p className="mb-8 text-lg">
          We’d love to learn more about your goals and how Pantheon Tech can help. Fill out the form below and we’ll get back to you soon.
        </p>
        <form className="space-y-6">
          <div>
            <label className="block mb-1 font-medium" htmlFor="name">Name</label>
            <input className="w-full px-4 py-2 rounded bg-slate-800 border border-slate-700" type="text" id="name" name="name" required />
          </div>
          <div>
            <label className="block mb-1 font-medium" htmlFor="email">Email</label>
            <input className="w-full px-4 py-2 rounded bg-slate-800 border border-slate-700" type="email" id="email" name="email" required />
          </div>
          <div>
            <label className="block mb-1 font-medium" htmlFor="organization">Organization (optional)</label>
            <input className="w-full px-4 py-2 rounded bg-slate-800 border border-slate-700" type="text" id="organization" name="organization" />
          </div>
          <div>
            <label className="block mb-1 font-medium" htmlFor="message">Message</label>
            <textarea className="w-full px-4 py-2 rounded bg-slate-800 border border-slate-700" id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded">
            Send Message
          </button>
        </form>

        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-2">Other Ways to Reach Us</h2>
          <p>Email: <a href="mailto:info@pantheontechnology.com" className="text-blue-400 hover:underline">info@pantheontechnology.com</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/company/pantheon-tech-llc/" target="_blank" className="text-blue-400 hover:underline">Pantheon Tech on LinkedIn</a></p>
          <p>X: <a href="https://twitter.com/pantheontechllc" target="_blank" className="text-blue-400 hover:underline">@pantheontechllc</a></p>
          <p>Schedule time: <a href="https://book.pantheontech.ai" target="_blank" className="text-blue-400 hover:underline">book.pantheontech.ai</a></p>
        </div>

        <div className="mt-10">
          <Link href="/" className="text-blue-400 hover:underline">Back to Home</Link>
        </div>
      </main>
    </div>
  );
}