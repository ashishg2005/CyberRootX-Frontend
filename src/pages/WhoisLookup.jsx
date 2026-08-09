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

        <h1 className="text-4xl font-bold text-cyan-400">
          🌍 WHOIS Lookup
        </h1>

        <p className="text-gray-400 mt-3">
          Find domain registration information.
        </p>

        <div className="flex gap-4 mt-8">
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
            className="bg-cyan-500 hover:bg-cyan-600 px-8 rounded-xl font-semibold disabled:opacity-50"
          >
            {loading ? "Loading..." : "Lookup"}
          </button>
        </div>

        {result && (
          <div className="mt-8 bg-slate-900 rounded-xl p-6 border border-slate-700">

            <h2 className="text-2xl font-bold text-cyan-400 mb-6">
              WHOIS Information
            </h2>

            <div className="grid grid-cols-2 gap-4">

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

      </div>
    </div>
  );
}

export default WhoisLookup;