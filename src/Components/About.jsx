"use client";

import { Code2, Database, Trophy, Briefcase } from "lucide-react";

const cards = [
    {
        icon: <Code2 size={28} />,
        title: "Full Stack Development",
        desc: "Building modern applications using React, Next.js, Node.js and MongoDB.",
    },
    {
        icon: <Database size={28} />,
        title: "Backend & APIs",
        desc: "Creating scalable REST APIs, authentication systems and database solutions.",
    },
    {
        icon: <Trophy size={28} />,
        title: "Competitive Programming",
        desc: "Regular problem solving and algorithm practice with DSA fundamentals.",
    },
    {
        icon: <Briefcase size={28} />,
        title: "Career Goal",
        desc: "Aspiring Software Engineer focused on writing clean and impactful software.",
    },
];

const About = () => {
    return (
        <section id="about">
            <div className="container-custom">

                <div className="text-center mb-16">

                    <p className="text-violet-400 mb-3">
                        Get To Know Me
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold">
                        About <span className="gradient-text">Me</span>
                    </h2>

                </div>

                <div className="grid lg:grid-cols-2 gap-14 items-center">



                    <div>

                        <p className="text-muted leading-8 text-lg">

                            I am a Computer Science & Engineering graduate and an aspiring
                            Software Engineer with a strong interest in
                            full-stack development and problem solving.

                            I regularly practice Data Structures and
                            Algorithms through competitive programming and
                            enjoy building practical software projects.

                            Currently I am focused on learning scalable web
                            technologies and preparing for software
                            engineering opportunities.

                        </p>

                    </div>



                    <div className="grid sm:grid-cols-2 gap-5">

                        {cards.map((item, index) => (
                            <div
                                key={index}
                                className="card-ui p-6 hover:-translate-y-2 transition duration-300"
                            >
                                <div className="text-violet-400 mb-4">
                                    {item.icon}
                                </div>

                                <h3 className="font-semibold text-xl mb-2">
                                    {item.title}
                                </h3>

                                <p className="text-muted text-sm leading-6">
                                    {item.desc}
                                </p>

                            </div>
                        ))}

                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;