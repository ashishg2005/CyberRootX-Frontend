import axios from "axios";
import { useState } from "react";

function IpLookup() {
  const [ip, setIp] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  async function lookupIp() {
    if (ip.trim() === "") {
      alert("Please enter an IP address.");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
        "http://localhost:5000/api/ip-lookup",
        {
          ip: ip,
        }
      );

      setResult(response.data.data);
    } catch (error) {
      console.error(error);
      alert("IP Lookup Failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-10">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold text-cyan-400">
          🌎 IP Lookup
        </h1>

        <p className="text-gray-400 mt-3">
          Find location and network details of any public IP address.
        </p>

        <div className="flex gap-4 mt-8">

          <input
            type="text"
            placeholder="8.8.8.8"
            value={ip}
            onChange={(e) => setIp(e.target.value)}
            className="flex-1 p-4 rounded-xl bg-slate-800 border border-slate-700 outline-none focus:border-cyan-400"
          />

          <button
            onClick={lookupIp}
            className="bg-cyan-500 hover:bg-cyan-600 px-8 rounded-xl font-semibold"
          >
            {loading ? "Loading..." : "Lookup"}
          </button>

        </div>

        {result && (
          <div className="mt-8 bg-slate-900 rounded-xl p-6 border border-slate-700">

            <h2 className="text-2xl font-bold text-cyan-400 mb-4">
              IP Details
            </h2>

            <div className="grid grid-cols-2 gap-4">

              <p><strong>IP:</strong> {result.ip}</p>

              <p><strong>Country:</strong> {result.country}</p>

              <p><strong>City:</strong> {result.city}</p>

              <p><strong>Region:</strong> {result.region}</p>

              <p><strong>ISP:</strong> {result.connection?.isp}</p>

              <p><strong>Timezone:</strong> {result.timezone?.id}</p>

            </div>

          </div>
        )}

      </div>
    </div>
  );
}

export default IpLookup;