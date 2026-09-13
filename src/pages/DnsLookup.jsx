import axios from "axios";
import { useState } from "react";

function DnsLookup() {
  const [domain, setDomain] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  async function lookupDns() {
    if (domain.trim() === "") {
      alert("Please enter a domain.");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/dns-lookup`,
        {
          domain,
        }
      );

      setResult(response.data.data);
    } catch (error) {
      console.error(error);
      alert("DNS Lookup Failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-10">
      <div className="max-w-5xl mx-auto">

        {/* Tool Header */}
        <h1 className="text-4xl font-bold text-cyan-400">
          📡 DNS Lookup
        </h1>

        <p className="text-gray-400 mt-3 leading-relaxed">
          Find DNS records associated with a domain and understand how the
          domain is configured for different internet services.
        </p>

        {/* Lookup Form */}
        <div className="flex flex-col md:flex-row gap-4 mt-8">
          <input
            type="text"
            placeholder="google.com"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            className="flex-1 p-4 rounded-xl bg-slate-800 border border-slate-700 outline-none focus:border-cyan-400"
          />

          <button
            onClick={lookupDns}
            disabled={loading}
            className="bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-xl font-semibold disabled:opacity-50"
          >
            {loading ? "Loading..." : "Lookup"}
          </button>
        </div>

        {/* Results */}
        {result && (
          <div className="mt-8 space-y-6">

            <div className="bg-slate-900 p-5 rounded-xl border border-slate-700">
              <h2 className="text-xl font-bold text-cyan-400 mb-3">
                🌐 A Records
              </h2>

              {result.aRecords.length > 0 ? (
                result.aRecords.map((item, index) => (
                  <p key={index}>{item}</p>
                ))
              ) : (
                <p>No A Records Found</p>
              )}
            </div>

            <div className="bg-slate-900 p-5 rounded-xl border border-slate-700">
              <h2 className="text-xl font-bold text-cyan-400 mb-3">
                📧 MX Records
              </h2>

              {result.mxRecords.length > 0 ? (
                result.mxRecords.map((item, index) => (
                  <p key={index}>
                    {item.exchange} (Priority: {item.priority})
                  </p>
                ))
              ) : (
                <p>No MX Records Found</p>
              )}
            </div>

            <div className="bg-slate-900 p-5 rounded-xl border border-slate-700">
              <h2 className="text-xl font-bold text-cyan-400 mb-3">
                🛰 NS Records
              </h2>

              {result.nsRecords.length > 0 ? (
                result.nsRecords.map((item, index) => (
                  <p key={index}>{item}</p>
                ))
              ) : (
                <p>No NS Records Found</p>
              )}
            </div>

            <div className="bg-slate-900 p-5 rounded-xl border border-slate-700">
              <h2 className="text-xl font-bold text-cyan-400 mb-3">
                📝 TXT Records
              </h2>

              {result.txtRecords.length > 0 ? (
                result.txtRecords.map((record, index) => (
                  <p key={index}>{record.join(" ")}</p>
                ))
              ) : (
                <p>No TXT Records Found</p>
              )}
            </div>

          </div>
        )}

        {/* Educational Content */}
        <section className="mt-16 border-t border-slate-800 pt-12">

          <p className="text-cyan-400 font-semibold">
            DNS SECURITY GUIDE
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            What Is DNS?
          </h2>

          <p className="text-gray-400 leading-relaxed mt-5">
            DNS stands for Domain Name System. It helps translate human-readable
            domain names into information that computers and network services
            can use to locate internet resources. When a user enters a domain
            name into a browser, DNS is one of the systems involved in finding
            the destination associated with that domain.
          </p>

          <p className="text-gray-400 leading-relaxed mt-4">
            DNS records also contain information about different services
            associated with a domain. Reviewing these records can help
            administrators, developers, and security researchers understand
            how a domain is configured.
          </p>

          <h2 className="text-3xl font-bold mt-12">
            How DNS Lookup Works
          </h2>

          <p className="text-gray-400 leading-relaxed mt-5">
            Enter a domain name into the CyberRootX DNS Lookup tool. The tool
            sends the domain to its backend DNS lookup service and displays
            the available records returned by the service.
          </p>

          <p className="text-gray-400 leading-relaxed mt-4">
            The results can include address records, mail server records,
            name server records, and text records. Different domains may have
            different combinations of DNS records depending on the services
            they use.
          </p>

          <h2 className="text-3xl font-bold mt-12">
            Understanding DNS Records
          </h2>

          <div className="mt-6 space-y-6">

            <div>
              <h3 className="text-xl font-bold text-cyan-400">
                A Records
              </h3>
              <p className="text-gray-400 leading-relaxed mt-2">
                An A record maps a domain name to an IPv4 address. It is
                commonly used to identify the IPv4 address associated with
                a website or other internet service.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-cyan-400">
                MX Records
              </h3>
              <p className="text-gray-400 leading-relaxed mt-2">
                MX, or Mail Exchange, records identify mail servers responsible
                for receiving email for a domain. The priority value helps
                determine the preferred order of mail servers.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-cyan-400">
                NS Records
              </h3>
              <p className="text-gray-400 leading-relaxed mt-2">
                NS, or Name Server, records identify the DNS servers that are
                authoritative for a domain. These servers provide DNS
                information for the domain and its configured records.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-cyan-400">
                TXT Records
              </h3>
              <p className="text-gray-400 leading-relaxed mt-2">
                TXT records contain text associated with a domain. They are
                commonly used for domain verification and email security
                mechanisms, among other purposes.
              </p>
            </div>

          </div>

          <h2 className="text-3xl font-bold mt-12">
            Why DNS Information Matters
          </h2>

          <p className="text-gray-400 leading-relaxed mt-5">
            DNS information can be useful when troubleshooting websites,
            investigating domain configurations, checking email infrastructure,
            or understanding how online services are connected to a domain.
          </p>

          <p className="text-gray-400 leading-relaxed mt-4">
            Security professionals can also use DNS information as one source
            of context during domain and infrastructure analysis. However,
            the presence or absence of a particular DNS record does not by
            itself determine whether a domain is secure or malicious.
          </p>

          <div className="mt-10 p-5 rounded-xl bg-slate-900 border border-slate-700">
            <h3 className="text-xl font-bold text-cyan-400">
              Security Note
            </h3>

            <p className="text-gray-400 leading-relaxed mt-2">
              DNS records are publicly resolvable information for many domains,
              but their availability and values can change over time. Results
              shown by CyberRootX represent the information returned by the
              lookup service at the time of the query.
            </p>
          </div>

        </section>
      </div>
    </div>
  );
}

export default DnsLookup;