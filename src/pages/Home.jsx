import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-950 px-6 py-24 md:px-10 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.15),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.10),transparent_35%)]" />

        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm mb-6">
            🛡️ Cybersecurity Toolkit
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            Cyber<span className="text-cyan-400">RootX</span>
          </h1>

          <p className="mt-6 text-2xl md:text-3xl font-semibold text-gray-200">
            Your Personal Cybersecurity Toolkit
          </p>

          <p className="max-w-2xl mx-auto mt-5 text-gray-400 text-lg leading-relaxed">
            Analyze websites, IP addresses, DNS records, SSL certificates
            and more — all from one place.
          </p>

          <div className="mt-10">
            <Link
              to="/tools"
              className="inline-block px-10 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold transition shadow-lg shadow-cyan-500/20"
            >
              🚀 Start Scanning
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-slate-900 border-y border-slate-800 px-6 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">

          <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="font-bold text-xl">
              Fast Analysis
            </h3>
            <p className="text-gray-400 mt-2">
              Get security information quickly and easily.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700">
            <div className="text-4xl mb-3">🔎</div>
            <h3 className="font-bold text-xl">
              Multiple Security Tools
            </h3>
            <p className="text-gray-400 mt-2">
              Analyze websites, domains, IPs and certificates.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700">
            <div className="text-4xl mb-3">🛡️</div>
            <h3 className="font-bold text-xl">
              Security Focused
            </h3>
            <p className="text-gray-400 mt-2">
              A single platform for useful cybersecurity checks.
            </p>
          </div>

        </div>
      </section>

      {/* How It Works */}
      <section className="bg-slate-950 px-6 py-20 md:px-10">
        <div className="max-w-5xl mx-auto text-center">

          <p className="text-cyan-400 font-semibold">
            HOW IT WORKS
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Security Analysis Made Simple
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">

            <div>
              <div className="w-14 h-14 mx-auto rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mt-5">
                Choose a Tool
              </h3>
              <p className="text-gray-400 mt-2">
                Select the security tool you want to use.
              </p>
            </div>

            <div>
              <div className="w-14 h-14 mx-auto rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mt-5">
                Enter Information
              </h3>
              <p className="text-gray-400 mt-2">
                Enter a URL, domain, IP address or other required data.
              </p>
            </div>

            <div>
              <div className="w-14 h-14 mx-auto rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mt-5">
                Get Results
              </h3>
              <p className="text-gray-400 mt-2">
                View the security information and analysis results.
              </p>
            </div>

          </div>

          <div className="mt-12">
            <Link
              to="/tools"
              className="inline-block px-8 py-4 rounded-xl border border-cyan-500/40 hover:bg-cyan-500/10 hover:border-cyan-400 hover:text-cyan-400 transition font-semibold"
            >
              🔍 Explore Security Tools
            </Link>
          </div>

        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="bg-slate-900 border-t border-slate-800 px-6 py-20 md:px-10"
      >
        <div className="max-w-4xl mx-auto text-center">

          <p className="text-cyan-400 font-semibold">
            ABOUT THE PROJECT
          </p>

          <h2 className="text-4xl font-bold mt-3">
            About CyberRootX
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed mt-6">
            CyberRootX is a cybersecurity toolkit that brings useful
            security analysis tools together in one platform. It is
            designed to make common cybersecurity checks simple,
            accessible and easy to understand.
          </p>

          <p className="text-gray-500 mt-5">
            Built with modern web technologies and cybersecurity-focused APIs.
          </p>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-6 text-center">
        <p className="text-gray-500 text-sm">
          © 2026 CyberRootX. Cybersecurity Toolkit.
        </p>
      </footer>
    </div>
  );
}

export default Home;