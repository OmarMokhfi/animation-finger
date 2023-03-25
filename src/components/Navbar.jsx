import React from "react";

export default function Navbar() {
  return (
    <div className="flex w-full justify-between items-center h-full">
      <div className="text-2xl">Uird.</div>
      <nav className="space-x-6">
        <a>Work</a>
        <a>About</a>
        <a>Email</a>
      </nav>
    </div>
  );
}
