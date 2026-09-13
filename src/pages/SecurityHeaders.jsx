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

        {/* Tool Header */}
        <h1 className="text-4xl font-bold text-cyan-400">
          🛡️ Security Headers Checker
        </h1>

        <p className="text-gray-400 mt-3 leading-relaxed">
          Check important HTTP security headers of a website and review
          the security score and header values returned by the server.
        </p>

        {/* Checker Form */}
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

        {/* Results */}
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

        {/* Educational Content */}
        <section className="mt-16 border-t border-slate-800 pt-12">

          <p className="text-cyan-400 font-semibold">
            WEB SECURITY GUIDE
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            What Are HTTP Security Headers?
          </h2>

          <p className="text-gray-400 leading-relaxed mt-5">
            HTTP security headers are instructions sent by a web server to
            a browser through HTTP responses. They can help websites define
            security-related policies and control how browsers handle certain
            types of content and requests.
          </p>

          <p className="text-gray-400 leading-relaxed mt-4">
            Properly configured security headers can reduce exposure to
            several classes of web attacks and provide browsers with additional
            security instructions. The exact headers needed depend on the
            website, its application, and the resources it uses.
          </p>

          <h2 className="text-3xl font-bold mt-12">
            How This Security Headers Checker Works
          </h2>

          <p className="text-gray-400 leading-relaxed mt-5">
            Enter a website URL into the CyberRootX Security Headers Checker.
            The tool sends the URL to its backend service, which retrieves
            the available HTTP response headers and evaluates the configured
            security checks.
          </p>

          <p className="text-gray-400 leading-relaxed mt-4">
            The resulting score and header information are displayed on the
            page so users can review which security-related headers are
            present and examine their returned values.
          </p>

          <h2 className="text-3xl font-bold mt-12">
            Common Security Headers
          </h2>

          <div className="mt-6 space-y-6">

            <div>
              <h3 className="text-xl font-bold text-cyan-400">
                Content-Security-Policy
              </h3>
              <p className="text-gray-400 leading-relaxed mt-2">
                Content-Security-Policy, commonly called CSP, allows a website
                to define rules for the sources from which browsers may load
                certain types of content. A carefully configured CSP can help
                reduce the impact of some content injection attacks.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-cyan-400">
                Strict-Transport-Security
              </h3>
              <p className="text-gray-400 leading-relaxed mt-2">
                Strict-Transport-Security, or HSTS, tells compatible browsers
                that a website should be accessed using HTTPS for a specified
                period. This can help reduce certain risks associated with
                insecure HTTP connections.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-cyan-400">
                X-Content-Type-Options
              </h3>
              <p className="text-gray-400 leading-relaxed mt-2">
                X-Content-Type-Options can be used to prevent browsers from
                interpreting resources as a different content type than the
                server declares.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-cyan-400">
                X-Frame-Options
              </h3>
              <p className="text-gray-400 leading-relaxed mt-2">
                X-Frame-Options provides a mechanism for controlling whether
                a page can be displayed inside a frame. It can help protect
                websites against certain framing-based attacks.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-cyan-400">
                Referrer-Policy
              </h3>
              <p className="text-gray-400 leading-relaxed mt-2">
                Referrer-Policy controls how much referrer information browsers
                can include when navigating from one website or resource to
                another.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-cyan-400">
                Permissions-Policy
              </h3>
              <p className="text-gray-400 leading-relaxed mt-2">
                Permissions-Policy allows websites to control access to
                certain browser features and capabilities for the document
                and embedded content.
              </p>
            </div>

          </div>

          <h2 className="text-3xl font-bold mt-12">
            Why Security Headers Matter
          </h2>

          <p className="text-gray-400 leading-relaxed mt-5">
            Security headers provide an additional layer of protection by
            allowing websites to communicate security policies to browsers.
            They can help developers reduce unnecessary browser capabilities
            and limit how certain resources are loaded or used.
          </p>

          <p className="text-gray-400 leading-relaxed mt-4">
            Reviewing security headers can therefore be useful during website
            security assessments, application development, configuration
            reviews, and troubleshooting.
          </p>

          <h2 className="text-3xl font-bold mt-12">
            Understanding the Security Score
          </h2>

          <p className="text-gray-400 leading-relaxed mt-5">
            The score shown by CyberRootX is based on the security header
            checks performed by the tool. A higher score indicates that more
            of the checks used by the tool were satisfied.
          </p>

          <p className="text-gray-400 leading-relaxed mt-4">
            A security score should not be treated as a complete security
            assessment. A website can have strong security headers while
            still containing vulnerabilities in its application code,
            dependencies, authentication systems, or server configuration.
          </p>

          <div className="mt-10 p-5 rounded-xl bg-slate-900 border border-slate-700">
            <h3 className="text-xl font-bold text-cyan-400">
              Security Note
            </h3>

            <p className="text-gray-400 leading-relaxed mt-2">
              Security headers are only one part of web application security.
              Missing headers do not automatically mean that a website is
              vulnerable, and a high header score does not guarantee that
              a website is completely secure.
            </p>
          </div>

        </section>
      </div>
    </div>
  );
}

export default SecurityHeaders;