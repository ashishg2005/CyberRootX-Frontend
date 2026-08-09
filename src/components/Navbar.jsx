import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  function goToAbout(e) {
    e.preventDefault();

    if (location.pathname === "/") {
      document.getElementById("about")?.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      navigate("/#about");
    }
  }

  return (
    <nav className="flex items-center justify-between px-6 md:px-10 py-5 bg-slate-950 border-b border-slate-800">
      
      <Link
        to="/"
        className="text-2xl font-bold text-cyan-400"
      >
        CyberRootX
      </Link>

      <div className="flex items-center gap-6 md:gap-8 text-gray-300">
        
        <Link
          to="/"
          className="hover:text-cyan-400 transition"
        >
          Home
        </Link>

        <button
          onClick={goToAbout}
          className="hover:text-cyan-400 transition"
        >
          About
        </button>

      </div>
    </nav>
  );
}

export default Navbar;