import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Register({ onRegister }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!username || !password) return alert("All fields are required");
    if (password !== confirm) return alert("Passwords do not match");
    setLoading(true);
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URI}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();

      if (res.ok) {
        onRegister(data.token);
        navigate("/home");
      } else {
        alert(data.message);
      }
    } catch (err) {
      alert("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="h-screen flex items-center justify-center px-4"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1532635241-17e820acc59f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <form
        onSubmit={handleRegister}
        className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-8 space-y-6 transition duration-300"
      >
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-pink-600 mb-1">
            Register
          </h1>
          <p className="text-sm text-white/100">Create your HostelHub account</p>
        </div>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="w-full border border-white/50 text-white placeholder-white/70 bg-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full border border-white/50 text-white placeholder-white/70 bg-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          required
          className="w-full border border-white/50 text-white placeholder-white/70 bg-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
        />

        <button
          type="submit"
          className="w-full py-3 rounded-lg font-semibold text-white text-lg btn-primary-gradient focus:outline-none  hover:brightness-120 hover:from-pink-600 hover:to-pink-800 shadow-md hover:shadow-lg transition duration-300"
          disabled={loading}
        >
          {loading ? (
            <span>
              <svg
                className="inline w-4 h-4 mr-2 text-white animate-spin"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                />
              </svg>
              Registering...
            </span>
          ) : (
            "Sign Up"
          )}
        </button>

        <p className="text-center text-white text-sm">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-pink-100 font-medium underline hover:text-pink-500 transition"
          >
            Log in
          </Link>
        </p>
      </form>
    </div>
  );
}
