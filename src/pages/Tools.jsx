import Navbar from "../components/Navbar";
import ToolCard from "../components/ToolCard";

function Tools() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-6 py-16 md:px-10">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-12">
            <p className="text-cyan-400 font-semibold tracking-wider">
              SECURITY TOOLKIT
            </p>

            <h1 className="text-4xl md:text-5xl font-bold mt-3">
              What Can You Check?
            </h1>

            <p className="text-gray-400 mt-4 max-w-2xl mx-auto leading-relaxed">
              Explore cybersecurity tools designed to analyze different
              aspects of websites, domains and networks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            <ToolCard
              title="🌐 URL Reputation Checker"
              description="Check if a website URL is safe or malicious."
              link="/url-checker"
            />

            <ToolCard
              title="🔐 Password Strength Checker"
              description="Analyze the strength of your password."
              link="/password-checker"
            />

            <ToolCard
              title="🌍 WHOIS Lookup"
              description="Find domain registration details."
              link="/whois-lookup"
            />

            <ToolCard
              title="📡 DNS Lookup"
              description="View DNS records of any domain."
              link="/dns-lookup"
            />

            <ToolCard
              title="🌎 IP Lookup"
              description="Get detailed information about an IP address."
              link="/ip-lookup"
            />

            <ToolCard
              title="🔑 Hash Generator"
              description="Generate MD5, SHA-1 and SHA-256 hashes."
              link="/hash-generator"
            />

            <ToolCard
              title="🛡️ Security Headers"
              description="Check important HTTP security headers."
              link="/security-headers"
            />

            <ToolCard
              title="🔒 SSL Certificate Checker"
              description="Check SSL certificate validity and issuer."
              link="/ssl-checker"
            />

          </div>

        </div>
      </section>

      <footer className="border-t border-slate-800 py-6 text-center">
        <p className="text-gray-500 text-sm">
          © 2026 CyberRootX. Cybersecurity Toolkit.
        </p>
      </footer>
    </div>
  );
}

export default Tools;