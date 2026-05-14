"use client";

import Link from "next/link";
import ProfilePic from '../assets/images/image.jpg';
import { Code2 } from "lucide-react";
import { BsGithub } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";
import Image from "next/image";

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center pt-32">
            <div className="container-custom">

                <div className="grid lg:grid-cols-2 gap-14 items-center">

                    {/* LEFT */}
                    <div className="flex flex-col gap-2">

                        <p className="text-violet-400 font-medium mb-4">
                            Aspiring Software Engineer
                        </p>

                        <h1 className="text-5xl md:text-7xl font-bold leading-tight">

                            Hi, I'm{" "}

                            <span className="gradient-text font-[var(--font-space)]">
                                Shipan Ahmed
                            </span>
                        </h1>

                        <p className="text-muted mt-7 text-lg max-w-2xl leading-8">

                            I build modern full-stack web applications and
                            enjoy solving problems through software,
                            competitive programming, and scalable systems.
                        </p>

                        <div className="flex flex-wrap gap-4 mt-10 ">

                            <button className="primary-btn">
                                View Projects
                            </button>

                            <button className="px-6 py-3 rounded-2xl border border-zinc-800 hover:bg-zinc-900 transition">
                                Download Resume
                            </button>

                        </div>

                        {/* Social */}

                        <div className="flex gap-5 mt-10">

                            <Link
                                href="https://github.com/Shipan-Ahmed"
                                className="card-ui p-4 hover:-translate-y-1 transition"
                            >
                                <BsGithub size={22} />
                            </Link>

                            <Link
                                href="https://www.linkedin.com/in/shipan-ahmed/"
                                className="card-ui p-4 hover:-translate-y-1 transition"
                            >
                                <LiaLinkedin size={22} />
                            </Link>

                            <Link
                                href="https://x.com/Mohammad_Shipan"
                                className="card-ui p-4 hover:-translate-y-1 transition"
                            >
                                <Code2 size={22} />
                            </Link>

                        </div>
                    </div>

                    {/* RIGHT IMAGE */}

                    <div className="flex justify-center">

                        <div className="relative">

                            {/* glow */}

                            <div className="absolute inset-0 blur-3xl bg-violet-600/20 rounded-full" />

                            <div className="card-ui border-glow p-3 relative">

                                <Image
                                    src={ProfilePic}
                                    alt="profile"
                                    width={380}
                                    height={450}
                                    className="rounded-3xl object-cover p-none"
                                />

                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;