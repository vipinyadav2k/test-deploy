"use client"
import Image from "next/image";
import React, { useState } from "react";
import Logo from "../../public/next.svg";
import "../styles/header.scss";
import Link from "next/link";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState("");

  const toggleDropdown = (menu) => {
    setDropdownOpen(dropdownOpen === menu ? "" : menu);
  };

  return (
    <>
      <div className="header">
        <Image className="mr-10" src={Logo} width={150} height={100} alt="logo" />
        <div>
          <nav className="flex items-center space-x-6 p-8 ">
            <Link
              href="/"
              className="font-semibold text-black border-b-2 border-yellow-500"
            >
              Home
            </Link>

            <div className="relative">
              <button
                onClick={() => toggleDropdown("about")}
                className="hover:text-gray-600"
              >
                About Us ▼
              </button>
              {dropdownOpen === "about" && (
                <div className="absolute bg-white shadow-md mt-2 rounded-md w-40">
                  <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Company Overview
                  </Link>
                  <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Our Mission
                  </Link>
                </div>
              )}
            </div>

            <Link href="#" className="hover:text-gray-600">
              Promoters and Leadership Team
            </Link>

            <div className="relative">
              <button
                onClick={() => toggleDropdown("products")}
                className="hover:text-gray-600"
              >
                Products ▼
              </button>
              {dropdownOpen === "products" && (
                <div className="absolute bg-white shadow-md mt-2 rounded-md w-40">
                  <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Product 1
                  </Link>
                  <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Product 2
                  </Link>
                </div>
              )}
            </div>

            <Link href="#" className="hover:text-gray-600">
              Manufacturing
            </Link>
            <Link href="#" className="hover:text-gray-600">
              Growth
            </Link>

            <div className="relative">
              <button
                onClick={() => toggleDropdown("career")}
                className="hover:text-gray-600"
              >
                Career ▼
              </button>
              {dropdownOpen === "career" && (
                <div className="absolute bg-white shadow-md mt-2 rounded-md w-40">
                  <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Jobs
                  </Link>
                  <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Internships
                  </Link>
                </div>
              )}
            </div>

            <Link href="#" className="hover:text-gray-600">
              Blogs
            </Link>
            <Link href="#" className="hover:text-gray-600">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
