"use client";
import React, { useEffect, useState } from "react";
import { db, collection, getDocs } from "../../lib/firebase"; // Import necessary Firestore functions

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
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
  }, []);

  if (loading) {
    return <p>Loading blogs...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 pt-10 pb-10">
      <div className="grid gap-6 max-w-screen-lg grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap lg:justify-center">
        {blogs.map((item, index) => (
          <a
            key={index}
            href={item.link}
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
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
