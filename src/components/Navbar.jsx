function Navbar() {
  return (
    <nav className="bg-slate-950 text-white px-10 py-5 flex justify-between items-center border-b border-slate-800">
      <div>
        <h1 className="text-3xl font-bold text-cyan-400">
          CyberRoot X
        </h1>
      </div>

      <div className="flex items-center gap-8 text-gray-300">
        <a href="#" className="hover:text-cyan-400 transition">
          Home
        </a>

        <a href="#" className="hover:text-cyan-400 transition">
          Tools
        </a>

        <a href="#" className="hover:text-cyan-400 transition">
          About
        </a>

        <button className="bg-cyan-500 px-5 py-2 rounded-lg hover:bg-cyan-600 transition">
          Login
        </button>
      </div>
    </nav>
  );
}

export default Navbar;