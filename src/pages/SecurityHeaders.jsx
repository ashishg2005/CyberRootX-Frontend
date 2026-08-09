import axios from "axios";
import { useState } from "react";

function SecurityHeaders() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  async function checkHeaders() {
    if (!url.trim()) {
      alert("Please enter a URL.");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/security-headers`,
        {
          url,
        }
      );

      setResult(response.data);
    } catch (error) {
      console.error(error);
      alert("Security Headers Check Failed");
      setResult(null);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-10">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold text-cyan-400">
          🛡️ Security Headers Checker
        </h1>

        <p className="text-gray-400 mt-3">
          Check important security headers of a website.
        </p>

        <div className="flex flex-col md:flex-row gap-4 mt-8">

          <input
            type="text"
            placeholder="https://example.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="flex-1 p-4 rounded-xl bg-slate-800 border border-slate-700 outline-none focus:border-cyan-400"
          />

          <button
            onClick={checkHeaders}
            disabled={loading}
            className="bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-xl font-semibold disabled:opacity-50"
          >
            {loading ? "Checking..." : "Check Headers"}
          </button>

        </div>

        {result && (
          <div className="mt-8 bg-slate-900 rounded-xl p-6 border border-slate-700">

            <h2 className="text-2xl font-bold text-cyan-400 mb-6">
              Security Headers Result
            </h2>

            <div className="mb-6">
              <p className="text-gray-400">
                Security Score
              </p>

              <p className="text-4xl font-bold text-cyan-400">
                {result.score}/100
              </p>
            </div>

            <div className="space-y-4">

              {Object.entries(result.headers || {}).map(
                ([header, value]) => (
                  <div
                    key={header}
                    className="bg-slate-800 rounded-xl p-4"
                  >
                    <p className="font-semibold text-cyan-300">
                      {header}
                    </p>

                    <p className="mt-2 text-gray-300 break-words">
                      {value || "Not Present"}
                    </p>
                  </div>
                )
              )}

            </div>

          </div>
        )}

      </div>
    </div>
  );
}

export default SecurityHeaders;