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

        {/* Tool Header */}
        <h1 className="text-4xl font-bold text-cyan-400">
          🔑 Hash Generator
        </h1>

        <p className="text-gray-400 mt-3 leading-relaxed">
          Generate a SHA-256 hash from text directly in your browser and
          copy the resulting hash for further use.
        </p>

        {/* Generator */}
        <div className="flex flex-col md:flex-row gap-4 mt-8">

          <input
            type="text"
            placeholder="Enter text..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="flex-1 p-4 rounded-xl bg-slate-800 border border-slate-700 outline-none focus:border-cyan-400"
          />

          <button
            onClick={generateHash}
            className="bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-xl font-semibold"
          >
            Generate
          </button>

        </div>

        {/* Result */}
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

        {/* Educational Content */}
        <section className="mt-16 border-t border-slate-800 pt-12">

          <p className="text-cyan-400 font-semibold">
            HASHING SECURITY GUIDE
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            What Is a Hash?
          </h2>

          <p className="text-gray-400 leading-relaxed mt-5">
            A cryptographic hash is a fixed-length value generated from
            input data using a mathematical algorithm. A hash is designed
            to provide a compact representation of the original input.
            Even a small change to the input normally produces a different
            hash value.
          </p>

          <p className="text-gray-400 leading-relaxed mt-4">
            Hashing is different from encryption. Encryption is designed so
            that authorized users can recover the original information by
            using the appropriate key, while a cryptographic hash is designed
            as a one-way transformation.
          </p>

          <h2 className="text-3xl font-bold mt-12">
            What Is SHA-256?
          </h2>

          <p className="text-gray-400 leading-relaxed mt-5">
            SHA-256 is a member of the Secure Hash Algorithm 2 family.
            It produces a 256-bit hash value, commonly represented as a
            64-character hexadecimal string.
          </p>

          <p className="text-gray-400 leading-relaxed mt-4">
            SHA-256 is widely used in software, data integrity systems,
            digital signatures, and other security-related applications.
            The algorithm is designed so that finding practical collisions
            is computationally difficult.
          </p>

          <h2 className="text-3xl font-bold mt-12">
            How This Hash Generator Works
          </h2>

          <p className="text-gray-400 leading-relaxed mt-5">
            Enter text into the CyberRootX Hash Generator and select
            Generate. The browser converts the text into encoded data and
            uses the Web Crypto API to calculate its SHA-256 digest.
          </p>

          <p className="text-gray-400 leading-relaxed mt-4">
            The resulting hexadecimal value is displayed on the page and
            can be copied using the Copy Hash button.
          </p>

          <h2 className="text-3xl font-bold mt-12">
            Common Uses of Hashing
          </h2>

          <div className="mt-6 space-y-6">

            <div>
              <h3 className="text-xl font-bold text-cyan-400">
                Data Integrity
              </h3>
              <p className="text-gray-400 leading-relaxed mt-2">
                Hash values can be used to compare data and determine whether
                the content has changed. If the same input produces a different
                hash, the data is not identical.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-cyan-400">
                File Verification
              </h3>
              <p className="text-gray-400 leading-relaxed mt-2">
                Software publishers can provide hashes for files so users can
                calculate the hash of a downloaded file and compare the values.
                This can provide an additional integrity check.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-cyan-400">
                Security Applications
              </h3>
              <p className="text-gray-400 leading-relaxed mt-2">
                Cryptographic hashing is used as a building block in many
                security systems, including digital signatures and other
                integrity mechanisms.
              </p>
            </div>

          </div>

          <h2 className="text-3xl font-bold mt-12">
            Hashing vs Encryption
          </h2>

          <p className="text-gray-400 leading-relaxed mt-5">
            Hashing and encryption serve different purposes. A hash is
            intended to represent data without providing a normal method
            for recovering the original input. Encryption, on the other hand,
            is designed to protect information while allowing authorized
            parties to decrypt it when the appropriate key is available.
          </p>

          <div className="mt-10 p-5 rounded-xl bg-slate-900 border border-slate-700">
            <h3 className="text-xl font-bold text-cyan-400">
              Security & Privacy Note
            </h3>

            <p className="text-gray-400 leading-relaxed mt-2">
              Avoid entering passwords, API keys, private keys, personal
              secrets, or other sensitive information into online tools unless
              you understand how that service processes the data. A hash should
              not be assumed to make sensitive information safe to disclose.
            </p>
          </div>

        </section>
      </div>
    </div>
  );
}

export default HashGenerator;