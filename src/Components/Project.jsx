"use client";

import Image from "next/image";
import { Card } from "@heroui/react";
import {  ExternalLink } from "lucide-react";
import { BsGithub } from "react-icons/bs";


const projects = [
    {
        title: "GitHub Issues Tracker",
        image: "/projects/github-tracker.png",
        desc:
            "Issue management application with issue browsing, searching, filtering and API integration.",

        tech: [
            "React",
            "API",
            "JavaScript",
            "Tailwind",
        ],

        features: [
            "Search & filter issues",
            "Single issue details",
            "API integration",
        ],

        github: "#",
        live: "#",
    },

    {
        title: "Book Vibe",
        image: "/projects/book-vibe.png",

        desc:
            "Book discovery and management platform with wishlist and reading status functionality.",

        tech: [
            "React",
            "Context API",
            "Tailwind",
            "DaisyUI",
        ],

        features: [
            "Wishlist system",
            "Read books tracking",
            "Global state management",
        ],

        github: "#",
        live: "#",
    },

    {
        title: "Digital Tools Marketplace",

        image: "/projects/tools-marketplace.png",

        desc:
            "Marketplace web application for browsing and purchasing digital products.",

        tech: [
            "React",
            "Tailwind",
            "Toastify",
        ],

        features: [
            "Shopping cart",
            "Checkout flow",
            "Notifications",
        ],

        github: "#",
        live: "#",
    },
];

const Project = () => {
    return (
        <section id="projects">

            <div className="container-custom gap-10 flex flex-col">

                {/* title */}

                <div className="text-center mb-16">

                    <p className="text-violet-400 mb-3">
                        My Work
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold">

                        Featured{" "}

                        <span className="gradient-text">
                            Projects
                        </span>

                    </h2>

                </div>

                {/* cards */}

                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

                    {projects.map((project) => (

                        <Card
                            key={project.title}
                            className="
                card-ui
                overflow-hidden
                hover:-translate-y-2
                transition
                duration-300
                flex flex-col gap-2
              "
                        >

                            <Image
                                src={project.image}
                                alt={project.title}
                                width={500}
                                height={300}
                                className="
                  w-full
                  h-52
                  object-cover
                  px-4
                  pt-4
                "
                            />

                            <div className="p-6 flex flex-col gap-4 flex-1">

                                <h3 className="text-2xl font-bold">
                                    {project.title}
                                </h3>

                                <p className="text-muted text-sm mt-3 leading-6">
                                    {project.desc}
                                </p>

                                <ul className="mt-5 space-y-2">
                                    {project.features.map((feature) => (
                                        <li
                                            key={feature}
                                            className="text-sm text-zinc-300"
                                        >
                                            • {feature}
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex flex-wrap gap-2 mt-6">
                                    {project.tech.map((item) => (
                                        <span
                                            key={item}
                                            className="
          px-3 py-1 text-xs rounded-full
          bg-zinc-900 border border-zinc-800
          hover:border-violet-500 transition
        "
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>

                            </div>

                        </Card>

                    ))}

                </div>

            </div>

        </section>
    );
};

export default Project;