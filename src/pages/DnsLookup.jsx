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

        <h1 className="text-4xl font-bold text-cyan-400">
          📡 DNS Lookup
        </h1>

        <p className="text-gray-400 mt-3">
          Find DNS records of any domain.
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
            onClick={lookupDns}
            disabled={loading}
            className="bg-cyan-500 hover:bg-cyan-600 px-8 rounded-xl font-semibold disabled:opacity-50"
          >
            {loading ? "Loading..." : "Lookup"}
          </button>
        </div>

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

      </div>
    </div>
  );
}

export default DnsLookup;