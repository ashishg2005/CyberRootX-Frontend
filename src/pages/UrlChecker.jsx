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

        {/* Tool Header */}
        <h1 className="text-4xl font-bold text-cyan-400">
          🛡️ URL Reputation Checker
        </h1>

        <p className="text-gray-400 mt-3 leading-relaxed">
          Check the reputation of a website URL and review security
          detection results from multiple security vendors.
        </p>

        {/* Scanner */}
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

        {/* Error */}
        {error && (
          <div className="mt-4 bg-red-900/30 border border-red-600 rounded-lg p-3 text-red-300">
            {error}
          </div>
        )}

        {/* Results */}
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

        {/* Educational Content */}
        <section className="mt-16 border-t border-slate-800 pt-12">

          <p className="text-cyan-400 font-semibold">
            URL SECURITY GUIDE
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            What Is URL Reputation?
          </h2>

          <p className="text-gray-400 leading-relaxed mt-5">
            URL reputation refers to security information associated with a
            website address. Security services can compare URLs against
            databases and detection systems to identify addresses that may
            have been associated with malicious, suspicious, phishing, or
            other harmful activity.
          </p>

          <p className="text-gray-400 leading-relaxed mt-4">
            A reputation check can be useful when evaluating an unfamiliar
            website before interacting with it. However, a clean result does
            not guarantee that a website is completely safe. Website
            reputation can change over time, and automated security checks
            should be considered one part of a broader security assessment.
          </p>

          <h2 className="text-3xl font-bold mt-12">
            How the URL Checker Works
          </h2>

          <p className="text-gray-400 leading-relaxed mt-5">
            Enter a complete website URL into the checker and start the scan.
            CyberRootX sends the submitted URL to its security analysis
            service and displays the available detection statistics returned
            by the service.
          </p>

          <p className="text-gray-400 leading-relaxed mt-4">
            The results are grouped into categories such as harmless,
            malicious, suspicious, and undetected. The detection information
            can help users understand how different security vendors have
            classified the submitted URL.
          </p>

          <h2 className="text-3xl font-bold mt-12">
            Understanding the Results
          </h2>

          <div className="mt-6 space-y-5">

            <div>
              <h3 className="text-xl font-bold text-green-400">
                Harmless
              </h3>
              <p className="text-gray-400 leading-relaxed mt-2">
                This category represents security vendors that did not detect
                the submitted URL as harmful according to their available
                analysis.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-red-400">
                Malicious
              </h3>
              <p className="text-gray-400 leading-relaxed mt-2">
                This category indicates that a security vendor identified the
                URL as potentially malicious. Users should exercise caution
                when multiple reliable security sources report a threat.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-yellow-400">
                Suspicious
              </h3>
              <p className="text-gray-400 leading-relaxed mt-2">
                A suspicious classification means that a vendor has identified
                characteristics that may require additional investigation.
                Suspicious does not necessarily mean that a website is
                confirmed to be malicious.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-300">
                Undetected
              </h3>
              <p className="text-gray-400 leading-relaxed mt-2">
                Undetected means that the available security vendor did not
                classify the URL as malicious or suspicious in its current
                analysis. It should not be interpreted as a guarantee of
                safety.
              </p>
            </div>

          </div>

          <h2 className="text-3xl font-bold mt-12">
            When Should You Check a URL?
          </h2>

          <p className="text-gray-400 leading-relaxed mt-5">
            URL reputation checking can be useful when receiving links from
            unfamiliar websites, unexpected messages, emails, or other online
            sources. It can provide an additional security signal before
            visiting a website.
          </p>

          <p className="text-gray-400 leading-relaxed mt-4">
            Users should still avoid entering passwords, payment information,
            or other sensitive data on unfamiliar websites simply because a
            reputation scan returns a positive result. Good security practice
            includes checking the website address, using trusted sources, and
            keeping browsers and security software updated.
          </p>

          <div className="mt-10 p-5 rounded-xl bg-slate-900 border border-slate-700">
            <h3 className="text-xl font-bold text-cyan-400">
              Security Note
            </h3>

            <p className="text-gray-400 leading-relaxed mt-2">
              CyberRootX results are provided for informational and security
              awareness purposes. Automated reputation results can contain
              false positives or false negatives and should not be treated as
              a definitive security verdict.
            </p>
          </div>

        </section>
      </div>
    </div>
  );
}

export default UrlChecker;