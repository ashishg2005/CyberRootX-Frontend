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

        {/* Tool Header */}
        <h1 className="text-4xl font-bold text-cyan-400">
          🔐 Password Strength Checker
        </h1>

        <p className="text-gray-400 mt-3 leading-relaxed">
          Check the basic strength characteristics of a password by
          reviewing its length, letters, numbers, and special characters.
        </p>

        {/* Password Input */}
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

        {/* Strength */}
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

        {/* Requirements */}
        <div className="grid grid-cols-2 gap-4 mt-8">

          <p>{hasLength ? "✅" : "❌"} Minimum 8 Characters</p>

          <p>{hasUpper ? "✅" : "❌"} Uppercase Letter</p>

          <p>{hasLower ? "✅" : "❌"} Lowercase Letter</p>

          <p>{hasNumber ? "✅" : "❌"} Number</p>

          <p>{hasSpecial ? "✅" : "❌"} Special Character</p>

        </div>

        {/* Educational Content */}
        <section className="mt-16 border-t border-slate-800 pt-12">

          <p className="text-cyan-400 font-semibold">
            PASSWORD SECURITY GUIDE
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            What Makes a Password Strong?
          </h2>

          <p className="text-gray-400 leading-relaxed mt-5">
            Password strength describes how difficult a password may be for
            an attacker to guess or discover. Length is an important factor,
            while using a mixture of different character types can make
            simple guessing attempts more difficult.
          </p>

          <p className="text-gray-400 leading-relaxed mt-4">
            A strong password should generally be unique to one account and
            should not contain easily predictable information such as a name,
            birthday, phone number, or common word.
          </p>

          <h2 className="text-3xl font-bold mt-12">
            How This Password Checker Works
          </h2>

          <p className="text-gray-400 leading-relaxed mt-5">
            CyberRootX checks several basic characteristics of the password
            entered into the tool. It checks whether the password contains
            at least eight characters, uppercase letters, lowercase letters,
            numbers, and special characters.
          </p>

          <p className="text-gray-400 leading-relaxed mt-4">
            Each satisfied requirement contributes to the displayed score.
            The result is then categorized as Weak, Medium, or Strong based
            on the number of requirements that are satisfied.
          </p>

          <h2 className="text-3xl font-bold mt-12">
            Password Strength Requirements
          </h2>

          <div className="mt-6 space-y-6">

            <div>
              <h3 className="text-xl font-bold text-cyan-400">
                Password Length
              </h3>
              <p className="text-gray-400 leading-relaxed mt-2">
                Longer passwords generally provide more possible combinations
                and can be harder to guess. This checker uses eight characters
                as its minimum length requirement.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-cyan-400">
                Uppercase and Lowercase Letters
              </h3>
              <p className="text-gray-400 leading-relaxed mt-2">
                Using both uppercase and lowercase letters increases the
                variety of characters used in a password and can make simple
                guessing patterns less predictable.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-cyan-400">
                Numbers and Special Characters
              </h3>
              <p className="text-gray-400 leading-relaxed mt-2">
                Numbers and special characters add additional character types.
                Combining different types can make passwords less predictable
                than passwords based only on common words or letters.
              </p>
            </div>

          </div>

          <h2 className="text-3xl font-bold mt-12">
            Good Password Security Practices
          </h2>

          <p className="text-gray-400 leading-relaxed mt-5">
            Avoid reusing the same password across multiple accounts. If one
            service is compromised, reused credentials can increase the risk
            to other accounts.
          </p>

          <p className="text-gray-400 leading-relaxed mt-4">
            Consider using a reputable password manager to create and store
            unique passwords. Multi-factor authentication should also be
            enabled whenever it is available for an account.
          </p>

          <div className="mt-10 p-5 rounded-xl bg-slate-900 border border-slate-700">
            <h3 className="text-xl font-bold text-cyan-400">
              Privacy & Security Note
            </h3>

            <p className="text-gray-400 leading-relaxed mt-2">
              This checker evaluates the password characteristics directly
              in the page. Never use a real password from an important account
              for testing on an unfamiliar website or security tool.
            </p>
          </div>

        </section>
      </div>
    </div>
  );
}

export default PasswordChecker;