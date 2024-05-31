import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";
const projects = [
  {
    name: "HR Dashboard",
    description:
      "HR Dashboard is a web application for managing employees like contracts and insurance.",
    image: "/hc-dashboard.png",
    github: "#",
    link: "#"
  },
  {
    name: "Sigma",
    description:
      "Sigma is a website that provides services like web design, Enterprise portal, etc....",
    image: "/sigma.png",
    github: "#",
    link: "https://www.sigma.ir/"
  },
  {
    name: "Irancell",
    description:
      "Irancell is a telecommunication company that provides services such as SIM cards and all types of internet.",
    image: "/irancell.png",
    github: "#",
    link: "https://irancell.ir/"
  }
];
const ProjectSection = () => {
  return (
    <section id="projects">
      <h2 className="text-center my-10 font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-sky-500 border-0 rounded"></hr>
      </h2>
      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col md:flex-row md:space-x-12 animate-slideUpCubiBezier animation-delay-2">
                  <div className="md:w-1/2 mt-8">
                    <Link href={project.link} target="_blank">
                      <Image
                        src={project.image}
                        alt={project.name}
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="md:w-1/2 mt-12">
                    <h3 className="text-4xl font-bold mb-6">{project.name}</h3>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectSection;
