import React from "react";
import Navbar from "../components/Navbar";

export default function TopNavbarLayout({ children }) {
  return (
    <div className="w-full">
      <Navbar />
      {children}
    </div>
  );
}
