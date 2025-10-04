import Link from "next/link";
import React from "react";

function NavBar() {
  return (
    <nav className="fixed top-0 left-0 w-full px-8 py-4 flex justify-between items-center z-50 bg-background/80 backdrop-blur">
      <h1 className="font-black text-2xl">OnaCode</h1>
      <ul className="font-semibold space-x-6 flex">
        <Link href={""}>Home</Link>
        <Link href={""}>Services</Link>
        <Link href={""}>Plans</Link>
        <Link href={""}>Contact</Link>
      </ul>
    </nav>
  );
}

export default NavBar;
