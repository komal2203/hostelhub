import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      return alert("Both fields are required");
    }

    const res = await fetch(`${import.meta.env.VITE_BACKEND_URI}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    const data = await res.json();

    if (res.ok) {
      onLogin(data.token);
      navigate("/home");
    } else {
      alert(data.message);
    }
  };

  // return (
  //   <div className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white px-4">
  //     <form
  //       onSubmit={handleLogin}
  //       className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl space-y-6 transition duration-300 ease-in-out"
  //     >
  //       <div className="text-center">
  //         <h2 className="text-3xl font-extrabold text-blue-700 mb-1">Login</h2>
  //         <p className="text-sm text-gray-500">Welcome back to HostelHub</p>
  //       </div>

  //       <input
  //         type="text"
  //         placeholder="Username"
  //         value={username}
  //         onChange={(e) => setUsername(e.target.value)}
  //         required
  //         className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
  //       />

  //       <input
  //         type="password"
  //         placeholder="Password"
  //         value={password}
  //         onChange={(e) => setPassword(e.target.value)}
  //         required
  //         className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
  //       />

  //       <button
  //         type="submit"
  //         className="w-full py-3 rounded-lg font-semibold text-white text-lg bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 shadow-md hover:shadow-lg transition duration-300"
  //       >
  //         Login
  //       </button>

  //       <p className="text-center text-gray-600 text-sm">
  //         Don't have an account?{" "}
  //         <Link
  //           to="/register"
  //           className="text-blue-600 font-medium hover:underline hover:text-blue-800 transition"
  //         >
  //           Register here
  //         </Link>
  //       </p>
  //     </form>
  //   </div>
  // );

  // return (
  //   <div
  //     className="h-screen flex items-center justify-center px-4"
  //     style={{
  //       // backgroundImage:
  //       //   "url('https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
  //       backgroundImage:"url('https://images.unsplash.com/photo-1532635241-17e820acc59f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
  //       backgroundSize: "cover",
  //       backgroundPosition: "center",
  //       backgroundRepeat: "no-repeat",
  //     }}
  //   >
  //     <form
  //       onSubmit={handleLogin}
  //       className="w-full max-w-md bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl shadow-lg p-8 space-y-7 transition duration-300 ease-in-out"
  //     >
  //       <div className="text-center">
  //         <h2 className="text-3xl font-extrabold text-blue-700 mb-1">Login</h2>
  //         <p className="text-sm text-gray-700">Welcome back to HostelHub</p>
  //       </div>

  //       <input
  //         type="text"
  //         placeholder="Username"
  //         value={username}
  //         onChange={(e) => setUsername(e.target.value)}
  //         required
  //         className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
  //       />

  //       <input
  //         type="password"
  //         placeholder="Password"
  //         value={password}
  //         onChange={(e) => setPassword(e.target.value)}
  //         required
  //         className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
  //       />

  //       <button
  //         type="submit"
  //         className="w-full py-3 rounded-lg font-semibold text-white text-lg bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 shadow-md hover:shadow-lg transition duration-300"
  //       >
  //         Login
  //       </button>

  //       <p className="text-center text-gray-900 text-sm">
  //         Don't have an account?{" "}
  //         <Link
  //           to="/register"
  //           className="text-white font-medium hover:underline hover:text-blue-300 transition"
  //         >
  //           Register here
  //         </Link>
  //       </p>
  //     </form>
  //   </div>
  // );
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
        onSubmit={handleLogin}
        className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-8 space-y-6 transition duration-300"
      >
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-pink-600 mb-1">Login</h2>
          <p className="text-sm text-white/80">Welcome back to HostelHub</p>
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

        <button
          type="submit"
          className="w-full py-3 rounded-lg font-semibold text-white text-lg btn-primary-gradient focus:outline-none hover:brightness-110 shadow-md hover:shadow-lg transition duration-300"
        >
          Login
        </button>

        <p className="text-center text-white text-sm">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-white font-medium underline hover:text-pink-600 transition"
          >
            Register here
          </Link>
        </p>
      </form>
    </div>
  );

}
