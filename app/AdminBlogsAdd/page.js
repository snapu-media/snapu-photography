"use client";
import React, { useState, useEffect } from "react";
import { db } from "../../lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { useAuth } from "../../lib/auth"; // Import the custom auth hook

const AdminBlogsAdd = () => {
  const [formData, setFormData] = useState({
    image: "",
    tag: "",
    category: "",
    title: "",
    description: "",
    userImage: "",
    userName: "",
    time: "",
    link: "",
  });

  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(true); // Track loading state
  const user = useAuth(); // Check if the user is authenticated
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      if (user === null) {
        // Wait until authentication state is determined
        return;
      }

      if (!user) {
        router.push("/Login"); // Redirect to login if the user is not authenticated
      }
      setLoading(false); // Authentication check is complete, stop loading
    };

    checkAuth();
  }, [user, router]);

  if (loading) {
    return <p>Loading...</p>; // Show a loading state while checking authentication
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "blogs"), formData);
      setSuccess(true);
      setFormData({
        image: "",
        tag: "",
        category: "",
        title: "",
        description: "",
        userImage: "",
        userName: "",
        time: "",
        link: "",
      });
    } catch (error) {
      console.error("Error adding blog:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 pt-10 pb-10">
      <form
        className="bg-white p-6 shadow-md rounded-md w-full max-w-lg"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-bold mb-6">Add New Blog</h1>
        {success && <p className="text-green-500 mb-4">Blog added successfully!</p>}
        {Object.keys(formData).map((key) => (
          <div key={key} className="mb-4">
            <label
              htmlFor={key}
              className="block text-sm font-medium text-gray-700"
            >
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </label>
            <input
              id={key}
              name={key}
              type="text"
              value={formData[key]}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
            />
          </div>
        ))}
        <button
          type="submit"
          className="w-full bg-teal-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-teal-600 transition-all"
        >
          Add Blog
        </button>
      </form>
    </div>
  );
};

export default AdminBlogsAdd;
