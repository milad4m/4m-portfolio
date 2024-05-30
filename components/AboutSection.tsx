import React from "react";
import Image from "next/image";

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "React" },
  { skill: "Vue js" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Bootstrap" },
  { skill: "Wordpress" },
  { skill: "GitHub" },
  { skill: "C#" },
  { skill: ".Net framework" },
  { skill: "Flutter" }
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-10 pb-12 md:pt-16 md:pb-48">
        <h2 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-sky-500 border-0 rounded"></hr>
        </h2>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h3 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h3>
            <p>
              Hi, my name is Milad and I am a{" "}
              <span className="font-bold">{"highly enthusiastic"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> Front-End Developer
              based in Teheran, IRAN.
            </p>
            <br />
            <p>
              I graduated from Qazvin University, in 2013 with a BS in Computer
              Software Engineering and have been working in the field ever
              since.
            </p>
            <br />
            <p>
              I have a wide range of hobbies and passions that keep me busy.
              From reading, playing computer games, and movies, to making
              various dishes, I am always seeking new experiences and love to
              keep myself engaged and learning new things.
            </p>
            <br />
            <p>
              I believe that you should{" "}
              <span className="font-bold text-sky-500">never stop growing</span>{" "}
              and that&#39;s what I strive to do, I have a passion for
              technology and a desire always to push the limits of what is
              possible. I am excited to see where my career takes me and am
              always open to new opportunities. 🙂
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h3 className="text-2xl font-bold mb-6">My Skills</h3>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
            <Image
              src="/hero-image.png"
              alt=""
              width={200}
              height={200}
              className="hidden md:block mx-auto mt-8 rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
