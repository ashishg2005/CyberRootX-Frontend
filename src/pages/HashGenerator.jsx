import { useState } from "react";

function HashGenerator() {
  const [text, setText] = useState("");
  const [hash, setHash] = useState("");

  async function generateHash() {
    if (!text.trim()) {
      alert("Please enter text.");
      return;
    }

    const encoder = new TextEncoder();
    const data = encoder.encode(text);

    const hashBuffer = await crypto.subtle.digest("SHA-256", data);

    const hashArray = Array.from(new Uint8Array(hashBuffer));

    const hashHex = hashArray
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");

    setHash(hashHex);
  }

  async function copyHash() {
    await navigator.clipboard.writeText(hash);
    alert("Hash copied!");
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-10">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold text-cyan-400">
          🔑 Hash Generator
        </h1>

        <p className="text-gray-400 mt-3">
          Generate SHA-256 hash from any text.
        </p>

        <div className="flex gap-4 mt-8">

          <input
            type="text"
            placeholder="Enter text..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="flex-1 p-4 rounded-xl bg-slate-800 border border-slate-700 outline-none focus:border-cyan-400"
          />

          <button
            onClick={generateHash}
            className="bg-cyan-500 hover:bg-cyan-600 px-8 rounded-xl font-semibold"
          >
            Generate
          </button>

        </div>

        {hash && (
          <div className="mt-8 bg-slate-900 p-6 rounded-xl border border-slate-700">

            <h2 className="text-xl font-bold text-cyan-400 mb-4">
              SHA-256 Hash
            </h2>

            <p className="break-all text-green-400">
              {hash}
            </p>

            <button
              onClick={copyHash}
              className="mt-5 bg-green-600 hover:bg-green-700 px-5 py-2 rounded-lg"
            >
              📋 Copy Hash
            </button>

          </div>
        )}

      </div>
    </div>
  );
}

export default HashGenerator;