"use client";

import Link from "next/link";
import {  Mail, Heart } from "lucide-react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const socialLinks = [
    {
        icon: <BsGithub size={18} />,
        href: "#",
    },
    {
        icon: <BsLinkedin size={18} />,
        href: "#",
    },
    {
        icon: <Mail size={18} />,
        href: "mailto:shipan@example.com",
    },
];

const Footer = () => {
    return (
        <footer className=" card-ui mt-28  pb-10">

            <div className="container-custom" >

                <div className="space-y-10">

                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">

                        {/* Left */}

                        <div>

                            <h2 className="text-2xl font-bold">

                                <span className="gradient-text">
                                    Shipan Ahmed
                                </span>

                            </h2>

                            <p className="text-muted mt-3 max-w-md">
                                Aspiring Software Engineer focused on
                                full-stack development, problem solving
                                and building impactful software.
                            </p>

                        </div>


                        {/* center */}

                        <div className="flex gap-6 text-sm">

                            <Link href="#about" className="hover:text-violet-400 transition">
                                About
                            </Link>

                            <Link href="#projects" className="hover:text-violet-400 transition">
                                Projects
                            </Link>

                            <Link href="#contact" className="hover:text-violet-400 transition">
                                Contact
                            </Link>

                        </div>


                        {/* right */}

                        <div className="flex gap-4">

                            {socialLinks.map((item, index) => (

                                <Link
                                    key={index}
                                    href={item.href}
                                    target="_blank"
                                    className="
                    p-3
                    rounded-xl
                    bg-zinc-900
                    border
                    border-zinc-800
                    hover:border-violet-500
                    hover:-translate-y-1
                    transition
                  "
                                >
                                    {item.icon}
                                </Link>

                            ))}

                        </div>

                    </div>


                    {/* bottom */}

                    <div className="border-t border-zinc-800 mt-8 pt-6 my-10">

                        <p className="text-center text-sm text-muted flex justify-center items-center gap-2">

                            All rights reserved &copy; {new Date().getFullYear()}. Made with <Heart size={16} className="text-red-500" /> by Shipan Ahmed.

                        </p>

                    </div>

                </div>

            </div>

        </footer>
    );
};

export default Footer;