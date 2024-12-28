"use client";
import React, { useEffect, useState } from "react";
import { db, collection, getDocs, deleteDoc, doc } from "../../lib/firebase";
import { useRouter } from "next/navigation";
import { useAuth } from "../../lib/auth"; // Import the custom auth hook
import Link from "next/link"; // Import Link from Next.js
import { setPersistence, browserLocalPersistence, browserSessionPersistence } from "firebase/auth"; // Import persistence options
import { auth } from "../../lib/firebase"; // Ensure correct import for firebase

const AdminBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const user = useAuth(); // Check if the user is authenticated
  const router = useRouter();

  useEffect(() => {
    const initializeAuthState = async () => {
      // Optionally set persistence to sessionStorage if you want to clear on close
      await setPersistence(auth, browserSessionPersistence); // Use session persistence to force logout on close
      
      if (user === null) {
        // Firebase has not determined the user's state yet
        return; // Don't do anything yet
      }

      if (!user) {
        router.push("/Login"); // Redirect to login if the user is not authenticated
      } else {
        // Fetch blogs once the user is authenticated
        const fetchBlogs = async () => {
          try {
            const blogsCollection = collection(db, "blogs");
            const blogSnapshot = await getDocs(blogsCollection);
            const blogList = blogSnapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }));
            setBlogs(blogList);
          } catch (err) {
            setError("Failed to fetch blogs");
            console.error("Error fetching blogs:", err);
          } finally {
            setLoading(false);
          }
        };

        fetchBlogs();
      }
    };

    initializeAuthState();
  }, [user, router]); // Depend on `user`

  const handleDelete = async (id) => {
    try {
      const blogDocRef = doc(db, "blogs", id);
      await deleteDoc(blogDocRef);
      setBlogs(blogs.filter((blog) => blog.id !== id)); // Remove the deleted blog from the state
      alert("Blog deleted successfully!");
    } catch (err) {
      console.error("Error deleting blog:", err);
      alert("Failed to delete the blog");
    }
  };

  if (loading) {
    return <p>Loading blogs...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 pt-10 pb-10">
      <div className="w-full max-w-screen-lg p-6">
        {/* Add Blog Button */}
        <Link href="/AdminBlogsAdd">
          <button className="mb-6 bg-teal-500 text-white py-2 px-6 rounded-md hover:bg-teal-600 transition-all">
            Add a Blog
          </button>
        </Link>

        {/* Blog List */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap lg:justify-center">
          {blogs.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden w-80 flex flex-col hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 w-full">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <span
                  className={`px-3 py-1 text-sm text-white rounded-full mb-3 ${
                    item.tag === "Technology"
                      ? "bg-teal-500"
                      : item.tag === "popular"
                      ? "bg-purple-500"
                      : "bg-blue-500"
                  }`}
                >
                  {item.category}
                </span>
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm mb-6">{item.description}</p>
                <div className="flex items-center mt-auto">
                  <img
                    src={item.userImage}
                    alt={item.userName}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <h5 className="text-sm font-medium">{item.userName}</h5>
                    <small className="text-gray-500 text-xs">{item.time}</small>
                  </div>
                </div>
                {/* Delete Button */}
                <button
                  onClick={() => handleDelete(item.id)}
                  className="mt-3 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminBlogs;
