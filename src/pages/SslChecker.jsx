import axios from "axios";
import { useState } from "react";

function SslChecker() {
  const [domain, setDomain] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  async function checkSSL() {
    if (!domain.trim()) {
      alert("Please enter a domain.");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/ssl-checker`,
        { domain }
      );

      setResult(response.data.data);
    } catch (error) {
      console.error(error);
      alert("SSL Lookup Failed");
      setResult(null);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-10">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold text-cyan-400">
          🔒 SSL Certificate Checker
        </h1>

        <p className="text-gray-400 mt-3">
          Check SSL certificate details of any website.
        </p>

        <div className="flex flex-col md:flex-row gap-4 mt-8">
          <input
            type="text"
            placeholder="google.com"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            className="flex-1 p-4 rounded-xl bg-slate-800 border border-slate-700 outline-none focus:border-cyan-400"
          />

          <button
            onClick={checkSSL}
            disabled={loading}
            className="bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-xl font-semibold disabled:opacity-50"
          >
            {loading ? "Checking..." : "Check"}
          </button>
        </div>

        {result && (
          <div className="mt-8 bg-slate-900 rounded-xl p-6 border border-slate-700">

            <h2 className="text-2xl font-bold text-cyan-400 mb-6">
              SSL Certificate Details
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <p>
                <strong>Common Name:</strong>{" "}
                {result.subject?.CN || "N/A"}
              </p>

              <p>
                <strong>Issuer:</strong>{" "}
                {result.issuer?.O || "N/A"}
              </p>

              <p>
                <strong>Valid From:</strong>{" "}
                {result.valid_from || "N/A"}
              </p>

              <p>
                <strong>Valid To:</strong>{" "}
                {result.valid_to || "N/A"}
              </p>

              <p>
                <strong>Serial Number:</strong>{" "}
                {result.serialNumber || "N/A"}
              </p>

              <p>
                <strong>Fingerprint:</strong>{" "}
                {result.fingerprint || "N/A"}
              </p>

            </div>

          </div>
        )}

      </div>
    </div>
  );
}

export default SslChecker;