import axios from "axios";
import { useState } from "react";

function WhoisLookup() {
  const [domain, setDomain] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  async function lookupWhois() {
    if (!domain.trim()) {
      alert("Please enter a domain.");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/whois-lookup`,
        {
          domain,
        }
      );

      setResult(response.data.data);
    } catch (error) {
      console.error(error);
      alert("WHOIS Lookup Failed");
      setResult(null);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-10">
      <div className="max-w-5xl mx-auto">

        {/* Tool Header */}
        <h1 className="text-4xl font-bold text-cyan-400">
          🌍 WHOIS Lookup
        </h1>

        <p className="text-gray-400 mt-3 leading-relaxed">
          Find publicly available domain registration information such as
          the registrar, registration dates, expiration date, and domain
          status.
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
            onClick={lookupWhois}
            disabled={loading}
            className="bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-xl font-semibold disabled:opacity-50"
          >
            {loading ? "Loading..." : "Lookup"}
          </button>
        </div>

        {/* Results */}
        {result && (
          <div className="mt-8 bg-slate-900 rounded-xl p-6 border border-slate-700">

            <h2 className="text-2xl font-bold text-cyan-400 mb-6">
              WHOIS Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <p>
                <strong>Domain:</strong>{" "}
                {result.domainName || "N/A"}
              </p>

              <p>
                <strong>Registrar:</strong>{" "}
                {result.registrar || "N/A"}
              </p>

              <p>
                <strong>Creation Date:</strong>{" "}
                {result.creationDate || "N/A"}
              </p>

              <p>
                <strong>Expiration Date:</strong>{" "}
                {result.expirationDate || "N/A"}
              </p>

              <p>
                <strong>Updated Date:</strong>{" "}
                {result.updatedDate || "N/A"}
              </p>

              <p>
                <strong>Status:</strong>{" "}
                {result.domainStatus
                  ? Array.isArray(result.domainStatus)
                    ? result.domainStatus.join(", ")
                    : result.domainStatus
                  : "N/A"}
              </p>

            </div>

          </div>
        )}

        {/* Educational Content */}
        <section className="mt-16 border-t border-slate-800 pt-12">

          <p className="text-cyan-400 font-semibold">
            DOMAIN SECURITY GUIDE
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            What Is WHOIS?
          </h2>

          <p className="text-gray-400 leading-relaxed mt-5">
            WHOIS is a system used to provide information about registered
            domain names. Depending on the domain and the registry or
            registrar, available information can include the domain name,
            registrar, registration dates, expiration date, and domain status.
          </p>

          <p className="text-gray-400 leading-relaxed mt-4">
            The amount of information publicly available can vary. Privacy
            services and modern data protection practices may hide or limit
            access to personal registration details.
          </p>

          <h2 className="text-3xl font-bold mt-12">
            How WHOIS Lookup Works
          </h2>

          <p className="text-gray-400 leading-relaxed mt-5">
            Enter a domain name into the CyberRootX WHOIS Lookup tool. The
            tool sends the domain to its backend lookup service and displays
            the registration information returned by that service.
          </p>

          <p className="text-gray-400 leading-relaxed mt-4">
            The information can help users understand basic details about a
            domain and its registration lifecycle without requiring them to
            manually search through different domain registration services.
          </p>

          <h2 className="text-3xl font-bold mt-12">
            Understanding WHOIS Information
          </h2>

          <div className="mt-6 space-y-6">

            <div>
              <h3 className="text-xl font-bold text-cyan-400">
                Domain Name
              </h3>
              <p className="text-gray-400 leading-relaxed mt-2">
                The domain name identifies the website or internet domain
                being queried. For example, a domain can be used to access
                a website or other internet services.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-cyan-400">
                Registrar
              </h3>
              <p className="text-gray-400 leading-relaxed mt-2">
                A registrar is an organization that provides domain
                registration services. The registrar shown in a WHOIS result
                can help identify the organization managing the registration.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-cyan-400">
                Creation Date
              </h3>
              <p className="text-gray-400 leading-relaxed mt-2">
                The creation date indicates when the domain registration was
                originally created according to the available registration
                data.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-cyan-400">
                Expiration Date
              </h3>
              <p className="text-gray-400 leading-relaxed mt-2">
                The expiration date indicates the current registration
                expiration information returned for the domain. Domains can
                be renewed before expiration according to the registrar's
                policies.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-cyan-400">
                Domain Status
              </h3>
              <p className="text-gray-400 leading-relaxed mt-2">
                Domain status values describe the current state or registry
                restrictions associated with a domain. Different status values
                can indicate whether certain domain operations are permitted
                or restricted.
              </p>
            </div>

          </div>

          <h2 className="text-3xl font-bold mt-12">
            Why Use a WHOIS Lookup?
          </h2>

          <p className="text-gray-400 leading-relaxed mt-5">
            WHOIS information can be useful during domain research,
            cybersecurity investigations, website analysis, and general
            internet research. Registration dates and domain status can
            provide additional context when evaluating a domain.
          </p>

          <p className="text-gray-400 leading-relaxed mt-4">
            WHOIS information should not be treated as proof that a website
            is trustworthy or malicious. A domain can have legitimate
            registration information while hosting harmful content, and
            registration data alone cannot determine the security of a website.
          </p>

          <div className="mt-10 p-5 rounded-xl bg-slate-900 border border-slate-700">
            <h3 className="text-xl font-bold text-cyan-400">
              Security & Privacy Note
            </h3>

            <p className="text-gray-400 leading-relaxed mt-2">
              WHOIS data availability varies by domain registry and privacy
              settings. CyberRootX displays information returned by its lookup
              service and does not guarantee that every available registration
              detail will be present.
            </p>
          </div>

        </section>
      </div>
    </div>
  );
}

export default WhoisLookup;