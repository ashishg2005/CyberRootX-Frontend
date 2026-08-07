function Hero() {
  return (
    <section className="min-h-[90vh] bg-slate-950 text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-cyan-400">
          CyberRoot X
        </h1>

        <p className="mt-4 text-xl text-gray-300">
          One Platform. Every Security Tool.
        </p>

        <button className="mt-8 bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg font-semibold">
          Start Scanning
        </button>
      </div>
    </section>
  );
}

export default Hero;
