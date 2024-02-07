'use client';

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="flex items-center justify-between p-4 bg-blue-500 text-white">
            {/* Left section with logo */}
            <div className="flex items-center">
                <Link href="/" className="flex justify-between">
                    <img src="logo.png" alt="Logo" className="flex h-8"/>
                    <p className="flex items-center">RiRim</p>
                </Link>
            </div>

            {/* Right section with navbar links */}
            <div className="flex items-center md:hidden block">
                <button className="text-white" onClick={toggleMenu}>
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </button>
            </div>

            <div className={`md:flex ${isMenuOpen ? 'block' : 'hidden'} items-center`}>
                <ul className={`md:flex ${isMenuOpen ? 'block' : 'hidden'}`}>
                    <li>
                        <Link href="/" className="mx-4">Home</Link>
                    </li>
                    <li>
                        <Link href="/about" className="mx-4">About</Link>
                    </li>
                    <li>
                        <Link href="/projects" className="mx-4">Projects</Link>
                    </li>
                    <li>
                        <Link href="/contact" className="mx-4">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
