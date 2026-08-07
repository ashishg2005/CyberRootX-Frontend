import { useState } from "react";

function PasswordChecker() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecial = /[^A-Za-z0-9]/.test(password);
  const hasLength = password.length >= 8;

  let score = 0;

  if (hasLength) score++;
  if (hasUpper) score++;
  if (hasLower) score++;
  if (hasNumber) score++;
  if (hasSpecial) score++;

  let strength = "Weak";
  let color = "bg-red-500";

  if (score >= 4) {
    strength = "Strong";
    color = "bg-green-500";
  } else if (score >= 3) {
    strength = "Medium";
    color = "bg-yellow-500";
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-10">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold text-cyan-400">
          🔐 Password Strength Checker
        </h1>

        <p className="text-gray-400 mt-3">
          Check how strong your password is.
        </p>

        <input
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mt-8 p-4 rounded-xl bg-slate-800 border border-slate-700 outline-none focus:border-cyan-400"
        />

        <button
          onClick={() => setShowPassword(!showPassword)}
          className="mt-3 text-cyan-400 hover:text-cyan-300"
        >
          {showPassword ? "🙈 Hide Password" : "👁 Show Password"}
        </button>

        <div className="mt-8">

          <div className="flex justify-between mb-2">
            <span>Password Strength</span>
            <span>{strength}</span>
          </div>

          <div className="w-full h-4 bg-slate-700 rounded-full overflow-hidden">
            <div
              className={`${color} h-4`}
              style={{ width: `${score * 20}%` }}
            ></div>
          </div>

        </div>

        <div className="grid grid-cols-2 gap-4 mt-8">

          <p>{hasLength ? "✅" : "❌"} Minimum 8 Characters</p>

          <p>{hasUpper ? "✅" : "❌"} Uppercase Letter</p>

          <p>{hasLower ? "✅" : "❌"} Lowercase Letter</p>

          <p>{hasNumber ? "✅" : "❌"} Number</p>

          <p>{hasSpecial ? "✅" : "❌"} Special Character</p>

        </div>

      </div>
    </div>
  );
}

export default PasswordChecker;