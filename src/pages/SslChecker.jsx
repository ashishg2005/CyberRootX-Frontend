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

        {/* Tool Header */}
        <h1 className="text-4xl font-bold text-cyan-400">
          🔒 SSL Certificate Checker
        </h1>

        <p className="text-gray-400 mt-3 leading-relaxed">
          Check SSL/TLS certificate details of a website, including the
          certificate name, issuer, validity period, and fingerprint.
        </p>

        {/* Checker Form */}
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

        {/* Results */}
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

        {/* Educational Content */}
        <section className="mt-16 border-t border-slate-800 pt-12">

          <p className="text-cyan-400 font-semibold">
            SSL/TLS SECURITY GUIDE
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            What Is an SSL Certificate?
          </h2>

          <p className="text-gray-400 leading-relaxed mt-5">
            An SSL/TLS certificate is used to help establish an encrypted
            connection between a client such as a web browser and a website
            server. Certificates also provide information that helps a
            browser verify the identity of the server it is connecting to.
          </p>

          <p className="text-gray-400 leading-relaxed mt-4">
            Modern websites generally use TLS, although the term SSL is still
            commonly used when referring to website certificates and HTTPS
            connections.
          </p>

          <h2 className="text-3xl font-bold mt-12">
            How This SSL Checker Works
          </h2>

          <p className="text-gray-400 leading-relaxed mt-5">
            Enter a domain name into the CyberRootX SSL Certificate Checker.
            The tool sends the domain to its backend certificate-checking
            service and displays the certificate information returned by the
            service.
          </p>

          <p className="text-gray-400 leading-relaxed mt-4">
            The results can include the certificate common name, issuing
            organization, validity dates, serial number, and certificate
            fingerprint.
          </p>

          <h2 className="text-3xl font-bold mt-12">
            Understanding Certificate Information
          </h2>

          <div className="mt-6 space-y-6">

            <div>
              <h3 className="text-xl font-bold text-cyan-400">
                Common Name
              </h3>
              <p className="text-gray-400 leading-relaxed mt-2">
                The Common Name, or CN, identifies the primary name associated
                with the certificate. Certificates can also contain additional
                names through other certificate fields.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-cyan-400">
                Issuer
              </h3>
              <p className="text-gray-400 leading-relaxed mt-2">
                The issuer identifies the certificate authority or organization
                that issued the certificate. Certificate authorities play an
                important role in the public trust system used by browsers.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-cyan-400">
                Valid From and Valid To
              </h3>
              <p className="text-gray-400 leading-relaxed mt-2">
                These dates define the certificate's validity period. A
                certificate outside its validity period may cause browsers
                to display certificate warnings.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-cyan-400">
                Serial Number
              </h3>
              <p className="text-gray-400 leading-relaxed mt-2">
                A certificate serial number is an identifier assigned to the
                certificate by its issuer. It can help distinguish one
                certificate from another.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-cyan-400">
                Fingerprint
              </h3>
              <p className="text-gray-400 leading-relaxed mt-2">
                A certificate fingerprint is a digest used as a compact
                representation of certificate data. It can be useful when
                comparing or identifying certificates.
              </p>
            </div>

          </div>

          <h2 className="text-3xl font-bold mt-12">
            Why SSL/TLS Matters
          </h2>

          <p className="text-gray-400 leading-relaxed mt-5">
            TLS encryption helps protect information exchanged between a
            browser and a website from being read or modified by unauthorized
            parties while it travels across the network.
          </p>

          <p className="text-gray-400 leading-relaxed mt-4">
            HTTPS websites use TLS to protect web traffic. However, having a
            valid certificate does not automatically mean that a website is
            trustworthy. Users should also consider the domain, website
            behavior, reputation, and other security signals.
          </p>

          <h2 className="text-3xl font-bold mt-12">
            What Does an Expired Certificate Mean?
          </h2>

          <p className="text-gray-400 leading-relaxed mt-5">
            Certificates have a defined validity period. When a certificate
            expires, browsers can display security warnings because the
            certificate is no longer valid for normal certificate verification.
          </p>

          <p className="text-gray-400 leading-relaxed mt-4">
            Website administrators need to renew or replace certificates
            before expiration to maintain a properly configured HTTPS service.
          </p>

          <div className="mt-10 p-5 rounded-xl bg-slate-900 border border-slate-700">
            <h3 className="text-xl font-bold text-cyan-400">
              Security Note
            </h3>

            <p className="text-gray-400 leading-relaxed mt-2">
              Certificate information is only one part of website security.
              A valid SSL/TLS certificate confirms important aspects of the
              encrypted connection, but it does not guarantee that the website
              itself is safe, legitimate, or free from malicious content.
            </p>
          </div>

        </section>
      </div>
    </div>
  );
}

export default SslChecker;