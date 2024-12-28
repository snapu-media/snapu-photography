// lib/auth.js
import { auth } from "./firebase"; // Adjust based on your firebase config
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";

export const useAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return user;
};
