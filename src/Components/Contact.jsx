"use client";

import { motion } from "framer-motion";
import {
    Mail,
    MapPin,
    Phone,
} from "lucide-react";
import Link from "next/link";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";

const contacts = [
    {
        icon: <Mail size={20} />,
        title: "Email",
        value: "shipan.cse.brur@gmail.com",
        link: "mailto:shipan.cse.brur@gmail.com",
    },

    {
        icon: <Phone size={20} />,
        title: "Phone",
        value: "+8801776256168",
        link: "tel:+8801776256168",
    },

    {
        icon: <MapPin size={20} />,
        title: "Location",
        value: "Dhaka, Bangladesh",
        link: "#",
    },
];

const socials = [
    {
        icon: <BsGithub size={20} />,
        name: "GitHub",
        link: "https://github.com/Shipan-Ahmed",
    },

    {
        icon: <BsLinkedin size={20} />,
        name: "LinkedIn",
        link: "https://linkedin.com/in/shipan-ahmed",
    },
    {
        icon: <BsFacebook size={20} />,
        name: "Facebook",
        link: "https://www.facebook.com/shipan.ahmed.01/",
    },
];

const Contact = () => {
    return (
        <section id="contact">

            <div className="container-custom flex flex-col gap-10 justify-center items-center">

                {/* heading */}

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <p className="text-violet-400 mb-3">
                        Let's Connect
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold">
                        Contact{" "}
                        <span className="gradient-text">
                            Me
                        </span>
                    </h2>

                    <p className="text-muted mt-6 max-w-xl mx-auto">
                        Open for internships, software engineering
                        opportunities and collaborations.
                    </p>

                </motion.div>


                <div className="grid lg:grid-cols-2 gap-8">

                    {/* left */}

                    <div className="card-ui p-8 flex flex-col gap-8">

                        <h3 className="text-2xl font-bold mb-8">
                            Contact Information
                        </h3>

                        <div className="flex flex-col gap-6">

                            {contacts.map((item) => (

                                <Link
                                    key={item.title}
                                    href={item.link}
                                    className="
                  flex
                  gap-5
                  items-center
                  hover:translate-x-2
                  transition
                "
                                >

                                    <div
                                        className="
                    p-4
                    rounded-xl
                    bg-violet-500/10
                    text-violet-400
                  "
                                    >
                                        {item.icon}
                                    </div>

                                    <div>

                                        <p className="text-muted text-sm">
                                            {item.title}
                                        </p>

                                        <p>{item.value}</p>

                                    </div>

                                </Link>

                            ))}

                        </div>


                        {/* socials */}

                        <div className="flex gap-4 my-10">
                            <h2 className="text-xl font-bold">Follow Me</h2>
                            {socials.map((item, index) => (

                                <Link
                                    key={index}
                                    href={item.link}
                                    target="_blank"
                                    className="
                  p-4
                  rounded-xl
                  border
                  border-zinc-800
                  hover:border-violet-500
                  transition
                "
                                >
                                    {item.icon}
                                </Link>

                            ))}

                        </div>

                    </div>


                    {/* form */}

                    <div className="card-ui p-8 flex flex-col gap-8">

                        <h3 className="text-2xl font-bold mb-8">
                            Send Message
                        </h3>

                        <form className="space-y-5 gap-2">

                            <input
                                type="text"
                                placeholder="Your Name"
                                className="
                w-full
                bg-zinc-900
                border
                border-zinc-800
                rounded-xl
                p-4
                outline-none
                focus:border-violet-500
              "
                            />

                            <input
                                type="email"
                                placeholder="Your Email"
                                className="
                w-full
                bg-zinc-900
                border
                border-zinc-800
                rounded-xl
                p-4
                outline-none
                focus:border-violet-500
              "
                            />

                            <textarea
                                rows="6"
                                placeholder="Your Message"
                                className="
                w-full
                bg-zinc-900
                border
                border-zinc-800
                rounded-xl
                p-4
                outline-none
                resize-none
                focus:border-violet-500
              "
                            />

                            <button
                                className="
                primary-btn
                w-full
              "
                            >
                                Send Message
                            </button>

                        </form>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default Contact;