"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const educationData = [
    {
        degree: "B.Sc (Engineering) in Computer Science & Engineering",
        institution: "Begum Rokeya University, Rangpur",
        duration: "2020 — 2025",
        cgpa: "CGPA: 3.01 / 4.00",
        location: "Rangpur, Bangladesh",
    },

    {
        degree: "Higher Secondary Certificate (HSC)",
        institution: "Hazi Asmot Government College",
        duration: "2016 — 2018",
        cgpa: "GPA: 4.08 / 5.00",
        location: "Bhairab, Kishoreganj, Bangladesh",
    },

    {
        degree: "Secondary School Certificate (SSC)",
        institution: "Chatalpar Waz Uddin High School",
        duration: "2011 — 2016",
        cgpa: "GPA: 4.83 / 5.00",
        location: "Nasirnagar , Brahmanbaria, Bangladesh",
    },
];

export default function Education() {
    return (
        <section id="education">

            <div className="container-custom flex flex-col gap-10">

                {/* title */}

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 flex flex-col gap-3 justify-center items-center"
                >
                    <p className="text-violet-400 mb-3">
                        Academic Journey
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold">
                        My{" "}
                        <span className="gradient-text">
                            Education
                        </span>
                    </h2>

                    <p className="text-muted mt-6 max-w-2xl mx-auto">
                        My academic background and learning journey.
                    </p>

                </motion.div>

                {/* timeline */}

                <div className="relative">

                    {/* center line */}
                    <div className="hidden md:block absolute left-1/2 top-0 w-[2px] h-full bg-zinc-800 -translate-x-1/2" />

                    {educationData.map((item, index) => (

                        <motion.div
                            key={item.degree}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * .1 }}
                            className={`
                mb-10
                flex
                ${index % 2 === 0
                                    ? "md:justify-start"
                                    : "md:justify-end"
                                }
              `}
                        >

                            <div className="card-ui border-glow p-6 md:w-[46%] relative flex flex-col gap-4">

                                {/* timeline dot */}

                                <div
                                    className="
                  hidden md:flex
                  absolute
                  top-10
                  w-5
                  h-5
                  rounded-full
                  bg-violet-500
                "

                                    style={{
                                        right:
                                            index % 2 === 0
                                                ? "-42px"
                                                : "auto",

                                        left:
                                            index % 2 !== 0
                                                ? "-42px"
                                                : "auto"
                                    }}
                                />

                                <div className="flex items-center gap-3 mb-4">

                                    <GraduationCap
                                        className="text-violet-400"
                                        size={28}
                                    />

                                    <h3 className="font-bold text-xl">
                                        {item.degree}
                                    </h3>

                                </div>

                                <p className="font-medium">
                                    {item.institution}
                                </p>

                                <div className="flex flex-wrap gap-4 mt-5">

                                    <div className="flex items-center gap-2 text-muted text-sm">
                                        <Calendar size={16} />
                                        {item.duration}
                                    </div>

                                    <div className="flex items-center gap-2 text-muted text-sm">
                                        <MapPin size={16} />
                                        {item.location}
                                    </div>

                                </div>

                                <p className="text-violet-400 mt-5">
                                    {item.cgpa}
                                </p>

                            </div>

                        </motion.div>

                    ))}

                </div>

            </div>

        </section>
    );
}