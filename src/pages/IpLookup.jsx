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
        `${import.meta.env.VITE_API_URL}/api/ip-lookup`,
        {
          ip,
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

        {/* Tool Header */}
        <h1 className="text-4xl font-bold text-cyan-400">
          🌎 IP Lookup
        </h1>

        <p className="text-gray-400 mt-3 leading-relaxed">
          Find approximate location and network information associated with
          a public IP address.
        </p>

        {/* Lookup Form */}
        <div className="flex flex-col md:flex-row gap-4 mt-8">

          <input
            type="text"
            placeholder="8.8.8.8"
            value={ip}
            onChange={(e) => setIp(e.target.value)}
            className="flex-1 p-4 rounded-xl bg-slate-800 border border-slate-700 outline-none focus:border-cyan-400"
          />

          <button
            onClick={lookupIp}
            disabled={loading}
            className="bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-xl font-semibold disabled:opacity-50"
          >
            {loading ? "Loading..." : "Lookup"}
          </button>

        </div>

        {/* Results */}
        {result && (
          <div className="mt-8 bg-slate-900 rounded-xl p-6 border border-slate-700">

            <h2 className="text-2xl font-bold text-cyan-400 mb-4">
              IP Details
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <p>
                <strong>IP:</strong> {result.ip}
              </p>

              <p>
                <strong>Country:</strong> {result.country}
              </p>

              <p>
                <strong>City:</strong> {result.city}
              </p>

              <p>
                <strong>Region:</strong> {result.region}
              </p>

              <p>
                <strong>ISP:</strong> {result.connection?.isp}
              </p>

              <p>
                <strong>Timezone:</strong> {result.timezone?.id}
              </p>

            </div>

          </div>
        )}

        {/* Educational Content */}
        <section className="mt-16 border-t border-slate-800 pt-12">

          <p className="text-cyan-400 font-semibold">
            IP ADDRESS SECURITY GUIDE
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            What Is an IP Address?
          </h2>

          <p className="text-gray-400 leading-relaxed mt-5">
            An Internet Protocol address, commonly called an IP address,
            is a numerical identifier used by devices and network services
            to communicate over an IP-based network. Public IP addresses can
            be associated with internet-facing systems such as servers,
            routers, hosting services, and other network infrastructure.
          </p>

          <p className="text-gray-400 leading-relaxed mt-4">
            IPv4 addresses are commonly written as four numbers separated
            by periods, such as 8.8.8.8. IPv6 uses a different format and
            provides a much larger address space.
          </p>

          <h2 className="text-3xl font-bold mt-12">
            How IP Lookup Works
          </h2>

          <p className="text-gray-400 leading-relaxed mt-5">
            Enter a public IP address into the CyberRootX IP Lookup tool.
            The tool sends the address to its backend lookup service and
            displays the available network and geographic information
            returned by that service.
          </p>

          <p className="text-gray-400 leading-relaxed mt-4">
            Depending on the available data, the result can include the
            country, region, city, internet service provider, and timezone
            associated with the IP address.
          </p>

          <h2 className="text-3xl font-bold mt-12">
            Understanding IP Lookup Results
          </h2>

          <div className="mt-6 space-y-6">

            <div>
              <h3 className="text-xl font-bold text-cyan-400">
                IP Address
              </h3>
              <p className="text-gray-400 leading-relaxed mt-2">
                The IP address identifies the network address that was
                submitted for lookup. The tool is intended primarily for
                publicly accessible IP addresses.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-cyan-400">
                Country, Region and City
              </h3>
              <p className="text-gray-400 leading-relaxed mt-2">
                Geolocation services can associate an IP address with an
                approximate geographic area. This information is based on
                network databases and should not be interpreted as the exact
                physical location of a person or device.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-cyan-400">
                ISP
              </h3>
              <p className="text-gray-400 leading-relaxed mt-2">
                The Internet Service Provider field identifies the network
                organization associated with the IP address according to
                the lookup service.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-cyan-400">
                Timezone
              </h3>
              <p className="text-gray-400 leading-relaxed mt-2">
                A timezone can be associated with the approximate geographic
                region of an IP address. It provides regional context but does
                not establish the exact location of the device using the IP.
              </p>
            </div>

          </div>

          <h2 className="text-3xl font-bold mt-12">
            Why IP Information Is Useful
          </h2>

          <p className="text-gray-400 leading-relaxed mt-5">
            IP information can help during network troubleshooting, website
            analysis, infrastructure research, and cybersecurity investigations.
            It can provide useful context about the network organization or
            hosting environment associated with an internet-facing address.
          </p>

          <p className="text-gray-400 leading-relaxed mt-4">
            Security analysts may use IP information together with DNS,
            domain reputation, certificate, and other security data when
            investigating online infrastructure.
          </p>

          <h2 className="text-3xl font-bold mt-12">
            Can an IP Address Reveal an Exact Location?
          </h2>

          <p className="text-gray-400 leading-relaxed mt-5">
            An IP lookup generally cannot determine the exact physical
            location of a person. Geolocation databases usually provide an
            approximate area based on information associated with the network
            or IP allocation.
          </p>

          <p className="text-gray-400 leading-relaxed mt-4">
            Hosting providers, VPNs, proxies, mobile networks, and other
            network configurations can also cause the displayed location to
            differ significantly from the actual location of a user or device.
          </p>

          <div className="mt-10 p-5 rounded-xl bg-slate-900 border border-slate-700">
            <h3 className="text-xl font-bold text-cyan-400">
              Security & Privacy Note
            </h3>

            <p className="text-gray-400 leading-relaxed mt-2">
              IP geolocation is approximate and can change as network
              allocations and databases are updated. CyberRootX displays
              information returned by its lookup service and does not claim
              that the displayed geographic information represents an exact
              physical location.
            </p>
          </div>

        </section>
      </div>
    </div>
  );
}

export default IpLookup;