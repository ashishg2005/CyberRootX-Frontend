import axios from "axios";
import { useState } from "react";

function UrlChecker() {
  const [url, setUrl] = useState("");
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function checkUrl() {
    if (!url.trim()) {
      setError("Please enter a URL.");
      setStats(null);
      return;
    }

    setError("");
    setLoading(true);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/check-url`,
        {
          url,
        }
      );

      setStats(response.data.stats);
    } catch (err) {
      console.error(err);
      setError("Backend connection failed.");
      setStats(null);
    } finally {
      setLoading(false);
    }
  }

  const total = stats
    ? stats.harmless +
      stats.malicious +
      stats.suspicious +
      stats.undetected
    : 0;

  const risk =
    stats && total > 0
      ? Math.round(
          ((stats.malicious + stats.suspicious) / total) * 100
        )
      : 0;

  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-cyan-400">
          🛡️ URL Reputation Checker
        </h1>

        <p className="text-gray-400 mt-3">
          Scan any website using VirusTotal.
        </p>

        <div className="flex flex-col md:flex-row gap-4 mt-8">
          <input
            type="text"
            placeholder="https://example.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="flex-1 p-4 rounded-xl bg-slate-800 border border-slate-700 focus:border-cyan-400 outline-none"
          />

          <button
            onClick={checkUrl}
            disabled={loading}
            className="bg-cyan-500 hover:bg-cyan-600 rounded-xl px-8 py-4 font-bold disabled:opacity-50"
          >
            {loading ? "⏳ Scanning..." : "🔍 Scan URL"}
          </button>
        </div>

        {error && (
          <div className="mt-4 bg-red-900/30 border border-red-600 rounded-lg p-3 text-red-300">
            {error}
          </div>
        )}

        {stats && (
          <div className="mt-8 bg-slate-900 rounded-2xl border border-slate-700 p-6 shadow-xl">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                {stats.malicious > 0 ? (
                  <h2 className="text-2xl font-bold text-red-500">
                    🔴 DANGEROUS WEBSITE
                  </h2>
                ) : (
                  <h2 className="text-2xl font-bold text-green-500">
                    🟢 SAFE WEBSITE
                  </h2>
                )}
              </div>

              <div className="text-right">
                <p className="text-gray-400 text-sm">Risk Score</p>
                <p className="text-2xl font-bold">{risk}/100</p>
              </div>
            </div>

            <div className="w-full h-3 bg-slate-700 rounded-full mt-5 overflow-hidden">
              <div
                className={
                  stats.malicious > 0
                    ? "bg-red-500 h-3"
                    : "bg-green-500 h-3"
                }
                style={{ width: `${risk}%` }}
              />
            </div>

            <p className="mt-4 text-cyan-400 font-semibold">
              Detection: {stats.malicious + stats.suspicious} / {total} Vendors
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              <div className="bg-slate-800 rounded-xl p-4 text-center">
                <p className="text-3xl font-bold text-green-400">
                  {stats.harmless}
                </p>
                <p className="text-gray-400 mt-2">Harmless</p>
              </div>

              <div className="bg-slate-800 rounded-xl p-4 text-center">
                <p className="text-3xl font-bold text-red-400">
                  {stats.malicious}
                </p>
                <p className="text-gray-400 mt-2">Malicious</p>
              </div>

              <div className="bg-slate-800 rounded-xl p-4 text-center">
                <p className="text-3xl font-bold text-yellow-400">
                  {stats.suspicious}
                </p>
                <p className="text-gray-400 mt-2">Suspicious</p>
              </div>

              <div className="bg-slate-800 rounded-xl p-4 text-center">
                <p className="text-3xl font-bold text-white">
                  {stats.undetected}
                </p>
                <p className="text-gray-400 mt-2">Undetected</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default UrlChecker;