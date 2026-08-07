import axios from "axios";
import { useState } from "react";

function SecurityHeaders() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  async function checkHeaders() {
    if (!url.trim()) {
      alert("Please enter a website URL.");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
        "http://localhost:5000/api/security-headers",
        { url }
      );

      setResult(response.data);

    } catch (error) {
      console.error(error);
      alert("Failed to fetch security headers.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-10">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold text-cyan-400">
          🛡 Security Headers Checker
        </h1>

        <p className="text-gray-400 mt-3">
          Check important HTTP security headers of any website.
        </p>

        <div className="flex gap-4 mt-8">
          <input
            type="text"
            placeholder="https://google.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="flex-1 p-4 rounded-xl bg-slate-800 border border-slate-700 outline-none focus:border-cyan-400"
          />

          <button
            onClick={checkHeaders}
            className="bg-cyan-500 hover:bg-cyan-600 px-8 rounded-xl font-semibold"
          >
            {loading ? "Checking..." : "Check"}
          </button>
        </div>

        {result && (
          <div className="mt-8 bg-slate-900 rounded-xl p-6 border border-slate-700">

            <h2 className="text-2xl font-bold text-cyan-400 mb-4">
              Security Score: {result.score}/100
            </h2>

            <div className="space-y-3">

              {Object.entries(result.headers).map(([key, value]) => (
                <div
                  key={key}
                  className="flex justify-between bg-slate-800 p-3 rounded-lg"
                >
                  <span>{key}</span>

                  {value ? (
                    <span className="text-green-400">✅ Present</span>
                  ) : (
                    <span className="text-red-400">❌ Missing</span>
                  )}
                </div>
              ))}

            </div>

          </div>
        )}

      </div>
    </div>
  );
}

export default SecurityHeaders;