function UrlChecker() {
  return (
    <div className="bg-slate-900 rounded-xl p-8 mt-16">
      <h2 className="text-3xl font-bold text-cyan-400">
        🌐 URL Reputation Checker
      </h2>

      <p className="text-gray-400 mt-2">
        Enter a website URL to check whether it is safe or malicious.
      </p>

      <input
        type="text"
        placeholder="https://example.com"
        className="w-full mt-6 p-3 rounded-lg bg-slate-800 border border-slate-700 outline-none text-white"
      />

      <button className="mt-5 bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg font-semibold">
        Check URL
      </button>

      <div className="mt-6 bg-slate-800 rounded-lg p-4 text-gray-300">
        Result will appear here...
      </div>
    </div>
  );
}

export default UrlChecker;