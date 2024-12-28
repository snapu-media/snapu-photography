"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "../../lib/firebase"; // Adjust the path based on your file structure
import { signInWithEmailAndPassword, setPersistence, browserLocalPersistence } from "firebase/auth"; // Import setPersistence and browserLocalPersistence

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Ensure Firebase authentication persistence
      await setPersistence(auth, browserLocalPersistence); // This ensures that the user remains logged in across sessions
      
      // Perform the login with email and password
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in:", userCredential.user);

      // Check if user is logged in and redirect
      if (userCredential.user) {
        router.push("/AdminBlogs"); // Redirect to the AdminBlogs page after successful login
      }
    } catch (error) {
      setError(error.message); // Handle any errors during the login process
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-md p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Login</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className={`w-full bg-teal-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-teal-600 transition-all ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
