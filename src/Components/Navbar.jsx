
'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';


const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Competitive", href: "#competitive" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
];

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full z-50">
            <nav className="container-custom mt-4">
                <div className="card-ui border-glow px-6 py-4 flex items-center justify-between">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-1">
                        <h1 className="font-bold text-2xl tracking-tight">
                            <span className="gradient-text font-[var(--font-space)]">
                                Shipan
                            </span>
                        </h1>
                    </Link>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex items-center gap-5">
                        {navLinks.map((item) => (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    className="text-sm text-zinc-300 hover:text-white transition"
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Resume Button */}
                    <div className="hidden md:block">
                        <button className="primary-btn px-6 py-3 rounded-2xl border border-zinc-800 hover:bg-zinc-900 transition">
                            Resume
                        </button>
                    </div>

                    {/* Mobile Icon */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden p-2 rounded-xl border border-zinc-800"
                    >
                        {open ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {open && (
                    <div className="md:hidden mt-3 card-ui p-5">
                        <ul className="flex flex-col gap-5">
                            {navLinks.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        onClick={() => setOpen(false)}
                                        className="text-zinc-300"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}

                            <Link href="/Resume.pdf" target="_blank">
                                <button className="primary-btn mt-3">
                                    Resume
                                </button>
                            </Link>
                        </ul>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Navbar;