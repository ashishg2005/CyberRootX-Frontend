import { Link } from "react-router-dom";

function ToolCard({ title, description, link }) {
  return (
    <div className="bg-slate-900 border border-slate-700 rounded-xl p-6 hover:border-cyan-400 transition duration-300 hover:scale-105">
      
      <h2 className="text-xl font-bold text-cyan-400">
        {title}
      </h2>

      <p className="text-gray-400 mt-3 leading-relaxed">
        {description}
      </p>

      <Link
        to={link}
        className="inline-block mt-5 bg-cyan-500 text-slate-950 font-semibold px-4 py-2 rounded-lg hover:bg-cyan-400 transition"
      >
        Open Tool
      </Link>

    </div>
  );
}

export default ToolCard;