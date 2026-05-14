"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const platforms = [
    {
        icon: "/public/codeforces.png",
        name: "Codeforces",
        handle: "S.H.I.P.A.N",
        solved: "1400+",
        max_rating: "1381",
        badge: "Pupil",
        link: "#",
    },

    {
        icon: "/public/leetcode.png",
        name: "LeetCode",
        handle: "Lazy_coder",
        solved: "250+",
        max_rating: "1578+",
        badge: "Active",
        link: "#",
    },

    {
        icon: "/public/codechef.png",
        name: "CodeChef",
        handle: "shipan",
        solved: "250+",
        max_rating: "1650+",
        badge: "Active",
        link: "#",
    },
];

const achievements = [
    {
        icon: '🏆',
        title: 'ICPC-Asia Dhaka Regional 2021',
        team: 'Team BRUR_unco',
        rank: 'Rank: 73',
        type: 'ICPC Regional',
        color: '#f59e0b',
    },
    {
        icon: '🥇',
        title: 'ICPC-Asia Dhaka Regional 2024',
        team: 'Team BRUR_DFS',
        rank: 'Rank: 224',
        type: 'ICPC Regional',
        color: '#7c3aed',
    },
    {
        icon: '🏅',
        title: 'BRUR CSE FEST 2024',
        team: 'Champion',
        rank: 'Intra Department',
        type: 'Programming Contest',
        color: '#10b981',
    },
    {
        icon: '📍',
        title: 'Rangpur Divisional Collegiate Programming Contest 2024',
        team: 'BRUR',
        rank: 'Rank: 11',
        type: 'Regional',
        color: '#06b6d4',
    },
    {
        icon: '📍',
        title: 'Rangpur Divisional Collegiate Programming Contest 2025',
        team: 'HSTU',
        rank: 'Rank: 17',
        type: 'Regional',
        color: '#ec4899',
    },
    {
        icon: '🎓',
        title: '13th National Math Olympiad',
        team: 'Participant',
        rank: 'National Level',
        type: 'Mathematics',
        color: '#f59e0b',
    },
    {
        icon: '🔬',
        title: 'Bangladesh Science Olympiad',
        team: 'Participant',
        rank: 'National Level',
        type: 'Science',
        color: '#06b6d4',
    },
]


const Competitive = () => {
    return (
        <section id="competitive">

            <div className="container-custom flex flex-col gap-10">

                {/* title */}

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 flex flex-col gap-3 justify-center items-center"
                >

                    <p className="text-violet-400 mb-3">
                        Problem Solving Journey
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold">

                        Competitive{" "}

                        <span className="gradient-text">
                            Programming
                        </span>

                    </h2>

                    <p className="text-muted mt-6 max-w-2xl mx-auto">

                        Solved 2000+ problems across platforms,
                        participated in ICPC contests and competitive
                        programming events.

                    </p>

                </motion.div>


                {/* platform cards */}

                <div className="grid md:grid-cols-3 gap-6 mb-16 ">

                    {platforms.map((item) => (

                        <motion.a

                            href={item.link}

                            key={item.name}

                            whileHover={{
                                y: -8
                            }}

                            className="
              card-ui
              p-10
              block
              flex
              flex-col
              gap-2
              transition
              duration-300
            "
                        >

                            <div className="flex justify-between items-center bg-red-500 ">

                                <div className="w-12 h-12 rounded-full bg-violet-500/10 flex items-center justify-center">
                                    <Image src={item?.icon} alt={item?.name} width={200} height={200} className="mx-auto" />
                                </div>

                                {/* <div
                                    className="
                  px-6
                  py-2
                  rounded-full
                  text-xs
                  bg-violet-500/10
                  text-violet-400
                  
                "
                                >
                                    <span>{item.badge}</span>
                                </div> */}

                            </div>

                            <h3 className="text-2xl font-bold mt-6">
                                {item.name}
                            </h3>

                            <p className="text-muted mt-1">
                                @{item.handle}
                            </p>

                            <div className="mt-8 flex justify-between">

                                <div>

                                    <p className="text-muted text-sm">
                                        Solved
                                    </p>

                                    <h2 className="font-bold text-xl">
                                        {item.solved}
                                    </h2>

                                </div>

                                <div>

                                    <p className="text-muted text-sm">
                                        Rating
                                    </p>

                                    <h2 className="font-bold text-xl">
                                        {item.max_rating}
                                    </h2>

                                </div>

                            </div>

                        </motion.a>

                    ))}

                </div>


                {/* achievements */}

                <h3 className="text-2xl font-bold mb-8">

                    🏆 Achievements

                </h3>

                <div className="grid md:grid-cols-2 gap-5">

                    {achievements.map((item) => (

                        <motion.div

                            key={item.title}

                            whileHover={{
                                x: 5
                            }}

                            className="
              card-ui
              p-5
              flex
              items-center
              gap-5
            "
                        >

                            <div className="text-3xl">

                                {item.icon}

                            </div>

                            <div>

                                <h4 className="font-semibold">

                                    {item.title}

                                </h4>

                                <p className="text-muted text-sm">

                                    {item.team}

                                </p>

                                <p className="text-violet-400 text-sm mt-2">

                                    {item.rank}

                                </p>

                            </div>

                        </motion.div>

                    ))}

                </div>

            </div>

        </section>
    );
};

export default Competitive;