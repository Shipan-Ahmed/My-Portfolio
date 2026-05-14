"use client";

import { Card } from "@heroui/react";

const skillGroups = [
    {
        title: 'Languages',
        icon: '⚡',
        skills: ['C', 'C++', 'C#', 'JavaScript'],
    },
    {
        title: 'Frontend',
        icon: '🎨',
        skills: ['React.js', 'Next.js', 'HTML', 'CSS', 'TailwindCSS'],
    },
    {
        title: 'Backend',
        icon: '⚙️',
        skills: ['Node.js', 'Express.js', 'System Design', 'DSA'],
    },
    {
        title: 'Databases',
        icon: '🗄️',
        skills: ['MySQL', 'MongoDB'],
    },
    {
        title: 'Tools & Platforms',
        icon: '🧰',
        skills: ['Git', 'GitHub', 'VS Code'],
    },
    {
        title: 'CS Core',
        icon: '🧠',
        skills: ['Data Structures', 'Algorithms', 'System Design', 'OOP', 'Operating Systems', 'Computer Networks'],
    },
    {
        title: 'Soft Skills',
        icon: '🤝',
        skills: ['Leadership', 'Project Management', 'Team Work', 'Communication'],
    },
];


const Skills = () => {
    return (
        <section id="skills">
            <div className="container-custom flex flex-col gap-10 py-20">

                <div className="text-center mb-16">

                    <p className="text-violet-400 mb-3">
                        Technologies I Use
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold">
                        My <span className="gradient-text">Skills</span>
                    </h2>

                </div>

                <div className="grid md:grid-cols-2 gap-6">

                    {skillGroups.map((group) => (
                        <Card
                            key={group.title}
                            className="card-ui  p-8 hover:-translate-y-2 transition text-center flex flex-col  justify-center items-center"
                        >
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <span>{group.icon}</span> {group.title}
                            </h3>

                            <div className="flex flex-wrap gap-3">

                                {group.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="
                                                px-6
                                                py-3
                                                rounded-full
                                                bg-zinc-900
                                                border
                                                border-zinc-800
                                                text-sm
                                                hover:border-violet-500
                                                transition
                                            "
                                    >
                                        {skill}
                                    </span>
                                ))}

                            </div>
                        </Card>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default Skills;