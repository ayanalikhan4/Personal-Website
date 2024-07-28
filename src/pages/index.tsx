import Head from "next/head";
import Navbar from "../../components/Navbar";
import SocialButton from "../../components/SocialButton";
import Dribble from "../../public/dribbble.svg";
import Instagram from "../../public/instagram.svg";
import Linkedin from "../../public/linkedin.svg";
import ProjectPreview from "../../components/ProjectPreview";
import Github from "../../public/github.svg";
import Doc from "../../public/Doc.svg";
import SkillCard from "../../components/SkillCard";
import AboutMe from "../../components/AboutMe";
import PhotoGallery from "../../components/PhotoGallery";
import Experience from "../../components/Experience";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const transition = {
  type: "spring",
  stiffness: 100,
  damping: 10,
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Ayan Khan</title>
        <meta name="description" content="Ayan's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <section
        id="home"
        className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4 mb-4"
      >
        <div className="h-[25rem] rounded-3xl p-10 flex flex-col justify-between animated-gradient bg-cover">
          <h1 className="text-4xl font-semibold mb-10">
            {" "}
            Ayan Khan | Software Engineer{" "}
          </h1>
          <div className="mt-auto">
            <div className="flex flex-col lg:flex-row items-center gap-4 justify-self-end mb-4">
              <button className="bg-black text-white font-medium py-3 px-12 rounded-full w-60 lg:w-auto">
                <a
                  href="https://www.linkedin.com/in/ayanalikhan/"
                  target="_blank"
                >
                  Contact me
                </a>
              </button>
              <div className="flex items-center gap-4">
                <SocialButton
                  bgColor="github"
                  link="https://github.com/ayanalikhan4"
                >
                  <Github className="w-6 h-6" />
                </SocialButton>
                <SocialButton
                  bgColor="linkedin"
                  link="https://www.linkedin.com/in/ayanalikhan/"
                >
                  <Linkedin className="w-5 h-5" />
                </SocialButton>
                <SocialButton
                  bgColor="dribble"
                  link="https://drive.google.com/file/d/11ubBWkbIldv4yWy2lTWrTyTr0sqLFi60/view?usp=share_link"
                >
                  <Doc className="w-5 h-5" />
                </SocialButton>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[25rem] rounded-3xl p-8 bg-[url('/ayanK.JPEG')] bg-cover bg-center" />
      </section>

      {/* hero banner section ends */}

      <section className="grid grid-cols-1 mb-8">
        <AboutMe />
      </section>

      <section
        id="experience"
        className="grid grid-cols-1 lg:grid-cols-1 gap-4 my-4 mb-8"
      >
        <div className="bg-[#ffffff] rounded-3xl shadow-xl overflow-hidden text-black p-6 md:p-8">
          <h2 className="text-balck text-3xl font-semibold mb-6">Experience</h2>
          <Experience
            companyName="Ingenico"
            role="Software Engineer Intern"
            experiencePoints={[
              "Developed full-stack dashboards to visualize the delivery of advertisement metrics for customer campaigns.",
              "Wrote SQL queries to extract info from databases improving performance by 7% through query optimization",
              "Contributed to the development of microservices using Spring Boot and React integrating Web-pack & Babel.",
            ]}
            dark={false}
            link="https://ingenico.com/en"
            logoSrc="/ingenico.png"
          />
          <Experience
            companyName="Nytia Labs"
            role="Software Engineer Intern"
            experiencePoints={[
              "Utilized React, to create dynamic and interactive interfaces, resulting in a 20% increase in user interactions.",
              "Optimized website code by asynchronous script loading & caching resulting in 4% improved page load speed.",
              "Developed RESTful APIs, enabling seamless communication between the frontend and backend components.",
            ]}
            dark={false}
            link="https://nytialabs.com"
            logoSrc="/nytia.jpg"
          />
          <Experience
            companyName="Wilfrid Laurier University"
            role="Research Assistant"
            experiencePoints={[
              "Designed convolutional neural networks using TensorFlow, achieving 90% accuracy in image classification.",
              "Fine-tuned the model with different loss functions and optimization algorithms, improving accuracy.",
              "Developed scripts for batch image processing & classification streamlining workflow and enhancing efficiency.",
              "Created a detailed documentation for the machine learning workflows to increase knowledge sharing.",
            ]}
            dark={false}
            link="https://www.wlu.ca"
            logoSrc="/laurier.jpeg"
          />
          <Experience
            companyName="Wilfrid Laurier University"
            role="Instructional Assistant"
            experiencePoints={[
              "Assisted professors in implementing lesson plans tailored to students' needs while also grading assignments.",
              "Provided one-on-one support to students requiring additional assistance with coursework, labs etc.",
              "Facilitated group activities and discussions to reinforce classroom concepts and increase understanding. ",
              "Courses: Calculus I, Calculus II, Linear Algebra I, Data Structures I, Data Structures II, OOP's",
            ]}
            dark={false}
            link="https://www.wlu.ca"
            logoSrc="/laurier.jpeg"
          />
        </div>
      </section>
      <section id="projects">
        <div className="bg-[#fcf7f7] rounded-3xl mb-8 shadow-xl overflow-hidden text-black p-6 md:p-9">
          <h2 className="text-balck text-3xl font-semibold mb-6">Projects</h2>
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-4">
            <ProjectPreview
              name="Leetr"
              description="Save time & Prepare effectively "
              imageUrl="/project-1.png"
              bgColor="#252525"
              dark
              link="https://github.com/ayanalikhan4"
            />

            <ProjectPreview
              name="Eco Tracker"
              description="Make eco-friendly choices"
              imageUrl="/eco.png"
              bgColor="#252525"
              dark
              link="https://github.com/ayanalikhan4"
            />
            <ProjectPreview
              name="Password Manager"
              description="Secure password management program"
              imageUrl="/pass.png"
              bgColor="#252525"
              dark
              link="https://github.com/ayanalikhan4"
            />
            <ProjectPreview
              name="Research2Slides"
              description="Convert research papers to powerpoints!"
              imageUrl="/project-4.png"
              bgColor="#252525"
              dark
              link="https://github.com/ayanalikhan4"
            />
          </section>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
      >
        <SkillCard
          title="Tech Stack"
          items={[
            "Python",
            "C++",
            "Go",
            "JavaScript",
            "TypeScript",
            "HTML/CSS",
            "NextJS",
            "ExpressJS",
            "React",
            "NodeJS",
            "SQL",
            "MongoDB",
          ]}
        />
        <SkillCard
          title="Tools"
          items={[
            "Git and Github",
            "Tableau",
            "PowerBI",
            "Firebase",
            "Linux",
            "PostgreSQL",
            "Spring Boot",
            "Selenium",
            "R",
          ]}
        />
        <SkillCard
          title="Interests"
          items={[
            "Hackathons",
            "Robotics",
            "Weightlifting",
            "Camping",
            "Hiking",
            "Aviation & Aerospace",
            "Machine learning & AI",
            "Cooking",
          ]}
        />
      </section>

      <section id="photos" className="mb-8">
        <PhotoGallery />
      </section>

      {/* footer section */}
      <section id="contact" className="grid grid-cols-1 mb-8">
        <div className="h=[30rem] rounded-3xl p-10 flex flex-col gap-16 animated-gradient bg-cover">
          <h1 className="text-4xl font-semibold">Want to work together?</h1>
          <p className="flex-1">
            Feel free to reach out to collaborate on something or just say
            hello! <br />
            ayanalikhan10@gmail.com
          </p>

          <div className="flex flex-col lg:flex-row items-center gap-4 justify-self-end">
            <button className="bg-black text-white font-medium py-3 px-12 rounded-full w-60 lg:w-auto">
              <a
                href="https://www.linkedin.com/in/ayanalikhan/"
                target="_blank"
              >
                Contact me
              </a>
            </button>
            <div className="flex items-center gap-4">
              <SocialButton
                bgColor="github"
                link="https://github.com/ayanalikhan4"
              >
                <Github className="w-6 h-6" />
              </SocialButton>

              <SocialButton
                bgColor="linkedin"
                link="https://www.linkedin.com/in/ayanalikhan/"
              >
                <Linkedin className="w-5 h-5" />
              </SocialButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
