"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

function Tools() {
    const [showFrontendTools, setShowFrontendTools] = useState(false);
    const [showBackendTools, setShowBackendTools] = useState(false);
    const [showDatabaseTools, setShowDatabaseTools] = useState(false);

    return (
        <div className="m-10">
            <div>
                <h2 className="font-bold text-xl">Tools that I have used.</h2>
                <p className="text-green-600">
                    Here's a curated list of tools and technologies that I have utilized in my projects to build innovative solutions.
                </p>
                <div className="border-t border-gray-300 my-4"></div>
            </div>

            {/* Frontend Development Section */}
            <div className="flex justify-start">
                <button
                    onClick={() => setShowFrontendTools(!showFrontendTools)}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-4 rounded-2xl mb-4"
                >
                    Frontend Development
                </button>
            </div>
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: showFrontendTools ? "auto" : 0, opacity: showFrontendTools ? 1 : 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="overflow-hidden"
            >
                <div className="flex justify-center items-center space-x-4 p-4 flex-wrap mt-4">
                    {["HTML", "CSS", "SCSS", "JavaScript", "TypeScript", "EJS", "React", "Redux", "Tailwind CSS", "Next.js", "Bootstrap", "Next UI"].map(tool => (
                        <button key={tool} className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-2xl">
                            {tool}
                        </button>
                    ))}
                </div>
            </motion.div>

            {/* Backend Development Section */}
            <div className="flex justify-start">
                <button
                    onClick={() => setShowBackendTools(!showBackendTools)}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-4 rounded-2xl mb-4"
                >
                    Backend Development
                </button>
            </div>
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: showBackendTools ? "auto" : 0, opacity: showBackendTools ? 1 : 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="overflow-hidden"
            >
                <div className="flex justify-center items-center space-x-4 p-4 flex-wrap mt-4">
                    {["NodeJs", "ExpressJs", "Sockets"].map(tool => (
                        <button key={tool} className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-2xl">
                            {tool}
                        </button>
                    ))}
                </div>
            </motion.div>

            {/* Database Management Section */}
            <div className="flex justify-start">
                <button
                    onClick={() => setShowDatabaseTools(!showDatabaseTools)}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-4 rounded-2xl mb-4"
                >
                    Database Management
                </button>
            </div>
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: showDatabaseTools ? "auto" : 0, opacity: showDatabaseTools ? 1 : 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="overflow-hidden"
            >
                <div className="flex justify-center items-center space-x-4 p-4 flex-wrap mt-4">
                    {["MySQL", "PostgreSQL", "MongoDB"].map(tool => (
                        <button key={tool} className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-2xl">
                            {tool}
                        </button>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}

export default Tools;
