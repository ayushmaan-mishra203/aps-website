"use client";  
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // remove if you don't have lucide

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="flex items-center p-6 max-w-7xl mx-auto">

        {/* LOGO */}
        <Link href="/" className="text-2xl sm:text-3xl font-bold text-gray-800">
          APraSak Technologies
        </Link>

        {/* DESKTOP LINKS */}
        <div className="ml-auto hidden sm:flex space-x-10 text-lg">
          <NavLinks />
        </div>

        {/* MOBILE MENU ICON */}
        <button
          className="ml-auto sm:hidden"
          onClick={() => setOpen(prev => !prev)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div className="sm:hidden flex flex-col items-center gap-6 py-6 bg-white border-t">
          <NavLinks closeMenu={() => setOpen(false)} />
        </div>
      )}
    </nav>
  );
}

function NavLinks({ closeMenu }: { closeMenu?: () => void }) {
  return (
    <>
      <Link href="/" onClick={closeMenu} className="font-bold text-gray-800">
        Home
      </Link>
      <Link href="/about" onClick={closeMenu} className="font-bold text-gray-800">
        About
      </Link>
      <Link href="/services" onClick={closeMenu} className="font-bold text-gray-800">
        Services
      </Link>
      <Link href="/contact" onClick={closeMenu} className="font-bold text-gray-800">
        Contact
      </Link>
      <Link href="/blogs" onClick={closeMenu} className="font-bold text-gray-800">
        Blogs
      </Link>
    </>
  );
}
