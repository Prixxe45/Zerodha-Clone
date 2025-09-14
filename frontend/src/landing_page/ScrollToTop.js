// ScrollToTop.js
import React from "react";
import { useEffect } from "react";        // side effect chalane ke liye
import { useLocation } from "react-router-dom"; // route ka path lene ke liye

export default function ScrollToTop() {
  const { pathname } = useLocation();    // current page ka path mil gaya

  useEffect(() => {
    window.scrollTo(0, 0);  // har bar page change hone par upar scroll karega
  }, [pathname]);          // ye tab chalega jab pathname (route) change hoga

  return null;   // ye component kuch dikhata nahi, bas kaam karta hai
}