import { BrowserRouter, Routes, Route } from "react-router-dom";

import SslChecker from "./pages/SslChecker";
import HashGenerator from "./pages/HashGenerator";
import SecurityHeaders from "./pages/SecurityHeaders";
import Home from "./pages/Home";
import UrlChecker from "./pages/UrlChecker";
import PasswordChecker from "./pages/PasswordChecker";
import WhoisLookup from "./pages/WhoisLookup";
import IpLookup from "./pages/IpLookup";
import DnsLookup from "./pages/DnsLookup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/url-checker" element={<UrlChecker />} />
        <Route path="/password-checker" element={<PasswordChecker />} />
        <Route path="/whois-lookup" element={<WhoisLookup />} />
        <Route path="/ip-lookup" element={<IpLookup />} />
        <Route path="/dns-lookup" element={<DnsLookup />} />
        <Route path="/hash-generator" element={<HashGenerator />} />
        <Route path="/ssl-checker" element={<SslChecker />} />
        <Route
  path="/security-headers"
  element={<SecurityHeaders />}
/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;