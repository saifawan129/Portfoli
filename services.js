"use client";
import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosRocket } from "react-icons/io";
import GitHubIcon from './icons/github';
import GmailIcon from './icons/gmail';
import LinkedinIcon from './icons/linkedin';

function Services() {
    // State to track which question is expanded
    const [expandedQuestion, setExpandedQuestion] = useState(null);

    // Function to handle question click
    const handleQuestionClick = (index) => {
        if (expandedQuestion === index) {
            // If the clicked question is already expanded, collapse it
            setExpandedQuestion(null);
        } else {
            // Otherwise, expand the clicked question
            setExpandedQuestion(index);
        }
    };

    // FAQ data
    const faqs = [
        {
            question: "Can you fix bugs or errors in my existing backend?",
            answer: "Yes, I offer comprehensive backend troubleshooting and bug-fixing services. I ensure your system operates without issues and provide recommendations to enhance its performance and reliability."
        },
        {
            question: "Do you offer support after project delivery?",
            answer: "Yes, I provide post-delivery support to ensure your backend system and APIs function smoothly. If any issues arise, I’ll assist you promptly to resolve them. Extended maintenance services are also available upon request."
        },
        {
            question: "Can you fix issues or update my existing website?",
            answer: "Yes! I can fix errors, bugs, or broken features and also update your website with new functionality or a fresh design."
        },
        {
            question: "What technologies do you use for backend development?",
            answer: "I work with modern frameworks and tools like Node.js. For databases, I use MySQL, MongoDB, and PostgreSQL. The choice of technology depends on your project requirements."
        },
        {
            question: "Do you provide deployment services?",
            answer: "Yes, I can deploy your website to hosting platforms like Vercel, Netlify, or your preferred hosting service."
        },
        {
            question: "How long does it take to complete a project?",
            answer: "Project timelines depend on the scope and complexity of the work. For small to medium-sized projects, it typically takes 1-3 weeks. Larger projects or custom solutions may require more time, but I always strive to deliver within the agreed deadline."
        },
        {
            question: "Which technologies do you use for frontend development?",
            answer: "I primarily use modern technologies like React.js, Next.js, HTML, CSS, and Tailwind CSS to ensure high-quality and scalable solutions."
        }
    ];

    return (
        <div className="m-4 sm:m-10">
            {/* FAQ Header */}
            <div>
                <h2 className="font-bold text-xl sm:text-2xl">FAQ's</h2>
                <p className="text-green-600 text-sm sm:text-base">
                    Find answers to common queries and concerns below.
                </p>
            </div>

            {/* Book a Service Button */}
            <div className="flex justify-end mt-4 sm:mt-0">
                <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-4 rounded-2xl text-sm sm:text-base"
                >
                    Book a Service
                </button>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-300 my-4"></div>

            {/* FAQ Grid */}
            <div>
                <ul className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                    {faqs.map((faq, index) => (
                        <li
                            key={index}
                            onClick={() => handleQuestionClick(index)}
                            className='rounded-xl bg-gray-700 text-white p-4 cursor-pointer hover:bg-gray-600 transition-colors'
                        >
                            <div className="flex justify-between items-center">
                                <span className="text-sm sm:text-base">{faq.question}</span>
                                <IoIosArrowDown className={`transform ${expandedQuestion === index ? 'rotate-180' : 'rotate-0'} transition-transform`} />
                            </div>
                            {expandedQuestion === index && (
                                <p className="mt-2 text-gray-300 text-sm sm:text-base">{faq.answer}</p>
                            )}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Let's Work Together Section */}
            <div className='rounded-xl bg-gray-600 p-4 sm:p-6 mt-7'>
                <h1 className='text-2xl sm:text-4xl flex items-center gap-2'>
                    <IoIosRocket /> Let's work together!
                </h1>
                <p className='text-sm sm:text-md mt-2'>
                    I help create exceptional digital experiences for businesses by leveraging strategic development and innovative solutions, ensuring every product aligns with their unique goals and delivers measurable success.
                    <br /><br />
                    I‘m open for freelance projects, feel free to email me to see how can we collaborate.
                </p>
                <div className='flex mt-4 gap-2'>
                    <GitHubIcon className="w-6 h-6 sm:w-8 sm:h-8" />
                    <GmailIcon className="w-6 h-6 sm:w-8 sm:h-8" />
                    <LinkedinIcon className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
            </div>
        </div>
    );
}

export default Services;