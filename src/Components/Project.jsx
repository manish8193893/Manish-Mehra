import React from "react";

const projectsData = [
    {
        image: "home1.png",
        title: "Blog Website",
        description:
            "A full-stack blog website where users can create, edit, and delete their blog posts. Built with React for the frontend and Node.js with Express for the backend. MongoDB is used for data storage.",
        techStack: ["React", "Node.js", "Express", "MongoDB", "CSS"],
        githubLink: "https://github.com/manish8193892",
        liveLink: "https://github.com/manish8193892",
    },
    {
        image: "home1.png",
        title: "E-commerce Platform",
        description:
            "An e-commerce platform that allows users to browse products, add them to the cart, and make purchases. Features include user authentication, product search, and order management. Built with React and Firebase.",
        techStack: ["React.js", "Node.js", "Express.js", "MongoDB","Redux-Toolkit","Bootstrap","MUI","swiper","Rich-Text-Editor","multer","jsonwebtoken"],
        githubLink: "https://github.com/manish8193892",
        liveLink: "https://github.com/manish8193892",
    },
    {
        image: "home1.png",
        title: "Real-time Chat Application",
        description:
            "A real-time chat application that supports multiple chat rooms and private messaging. Built using Socket.io for real-time communication and React for the frontend.",
        techStack: ["React", "Node.js", "Socket.io", "CSS"],
        githubLink: "https://github.com/manish8193892",
        liveLink: "https://github.com/manish8193892",
    },
    {
        image: "portfolio.png",
        title: "Task Management Tool",
        description:
            "A task management tool that helps users organize and prioritize their tasks. Features include task creation, editing, deletion, and categorization. Built with React and Redux for state management.",
        techStack: ["React", "Redux", "CSS"],
        githubLink: "https://github.com/manish8193892",
        liveLink: "https://github.com/manish8193892",
    },
    {
        image: "portfolio.png",
        title: "Portfolio Website",
        description:
            "A personal portfolio website to showcase projects, skills, and experience. Built with React and styled with Tailwind CSS.",
        techStack: ["React", "Tailwind CSS","react-icon","react-lucide"],
        githubLink: "https://github.com/manish8193892",
        liveLink: "https://github.com/manish8193892",
    },
    {
        image: "portfolio.png",
        title: "Weather App",
        description:
            "A weather application that provides current weather information and forecasts for any location. Built with React and integrates with a weather API.",
        techStack: ["React", "API", "CSS"],
        githubLink: "https://github.com/manish8193892",
        liveLink: "https://github.com/manish8193892",
    }
];

export default function Project() {
    return (
        <section className="pt-24 pb-12 bg-linear-to-b from-crypto-blue to-[#12141C] relative overflow-hidden">
            <div className="container flex flex-wrap gap-10 mx-auto px-4 relative z-10">
                <h2 className="w-screen text-center text-3xl md:text-4xl font-bold mb-8 text-gradient">
                    Projects
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                    {projectsData.map((project, index) => (
                        <article
                            key={index}
                            className="w-full bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl shadow-md overflow-hidden flex flex-col p-2"
                        >
                            {/* Adjust image path as needed — here assumed assets are in public/assets */}
                            <img
                                src={`${project.image}`}
                                alt={project.title}
                                className="h-48 w-full object-cover rounded-md"
                            />

                            <div className="p-4 flex flex-col flex-1">
                                <h3 className="text-lg font-medium text-white/70 mb-2">
                                    {project.title}
                                </h3>

                                <p className="text-sm text-gray-500 mb-3 line-clamp-4">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.techStack.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="text-xs bg-gray-700  text-teal-400 px-2 py-1 rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-auto flex gap-3">
                                    {project.githubLink ? (
                                        <a
                                            href={project.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block px-3 py-2 bg-teal-600 text-white rounded-md text-sm hover:bg-teal-700"
                                        >
                                            GitHub
                                        </a>
                                    ) : null}

                                    {project.liveLink ? (
                                        <a
                                            href={project.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block px-3 py-2 border bg-gray-100 text-gray-700 rounded-md text-sm"
                                        >
                                            Live Demo
                                        </a>
                                    ) : null}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
