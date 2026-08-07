import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ToolCard from "../components/ToolCard";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      <section className="bg-slate-950 px-10 py-20">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Popular Security Tools
        </h2>

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
            title="🛡 Security Headers"
            description="Check important HTTP security headers."
            link="/security-headers"
          
          />
          <ToolCard
  title="🔒 SSL Certificate Checker"
  description="Check SSL certificate validity and issuer."
  link="/ssl-checker"
/>

        </div>
      </section>
    </>
  );
}

export default Home;