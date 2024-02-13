import Image from "next/image";
import developer from "@/public/developer.png";
import architect from "@/public/architect.png";
import { AiOutlineDownload } from "react-icons/ai";

export default function Resume() {
  return (
    <>
      <h1 className="linethrough font-bold text-2xl" id="resume">
        RESUME
      </h1>
      <div className="wrapper">
        <button className="resume-btn">
          <a
            href="/Federico Jimenez Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            DOWNLOAD CV
          </a>
          <AiOutlineDownload />
        </button>
        <div className="container resume">
          <h1 className="linethrough font-bold text-2xl">EMPLOYMENT</h1>
          <div className="p-5">
            <div className="flex flex-row justify-between">
              <div className="flex flex-col">
                <h1 className="font-bold text-lg">Terrytown Fire Department</h1>
                <h2 className="underline underline-1">
                  Operator / FireFighter
                </h2>
              </div>
              <div className="flex flex-col">
                <p>Terrytown, LA</p>
                <p>2016 - 2021</p>
              </div>
            </div>
            <ul>
              <li className="list-disc list-inside">
                Spearheaded maintenance efforts for fire trucks, ensuring
                optimum functionality during emergency response situations,
                resulting in a 100% operational readiness rate
              </li>
              <li className="list-disc list-inside">
                Led firefighting operations at structure fires, demonstrating
                quick decision-making and coordination skills under
                high-pressure environments, successfully containing and
                minimizing property damage
              </li>
              <li className="list-disc list-inside">
                Implemented efficient medical care procedures for civilians
                impacted by fires, showcasing strong analytical skills and
                empathy, resulting in immediate life-saving interventions and
                positive outcomes
              </li>
              <li className="list-disc list-inside">
                Led training classes and drills, imparting essential
                firefighting knowledge and hands-on skills to team members,
                fostering continuous learning and operational readiness for
                emergency response scenerios
              </li>
            </ul>
          </div>
          <h1 className="linethrough font-bold text-2xl">PROJECTS</h1>
          <div className="p-5">
            <div className="flex flex-row">
              <h1 className="font-bold text-lg underline">fitbyfede</h1>
              <p className="mx-1">/ Fitness application</p>
            </div>
            <ul>
              <li className="list-disc list-inside">
                Leveraged AWS services such as EC2 and Route53 for reliable and
                scalable application deployment, ensuring high performance and
                responseiveness for users accessing the application
              </li>
              <li className="list-disc list-inside">
                Designed application as a progressive web app for cross-platform
                usability, providing users with a consistent and engaging
                experience on various devices
              </li>
              <li className="list-disc list-inside">
                Implemented user subscription handling with Stripe JS, enabling
                hassle-free subscription management and revenue generation
                capabilities
              </li>
              <li className="list-disc list-inside">
                Integrating advanced security features like NextAuth and MongoDB
                for data protection, ensuring user privacy and trust, leading to
                an increase in user retention rate
              </li>
            </ul>
          </div>
          <div className="p-5">
            <div className="flex flex-row">
              <h1 className="font-bold text-lg underline">Bowen Pain Center</h1>
              <p className="mx-1">/ Medical Management App and Website</p>
            </div>
            <ul>
              <li className="list-disc list-inside">
                Engineered a responsive and user-friendly website that educates
                patients about available procedures and connects them with the
                center, enhancing the center&apos;s online presence and
                accessibility to potential patients
              </li>
              <li className="list-disc list-inside">
                Designed application as a progressive web app for cross-platform
                usability, providing users with a consistent and engaging
                experience on various devices
              </li>
              <li className="list-disc list-inside">
                Designed the site to be responsive to desktop, laptop, tablet
                and cellphone devices
              </li>
              <li className="list-disc list-inside">
                Architected the website for high availability and reliability
                using AWS load balancers, ensuring seamless user experience and
                minimal downtime for visitors to the site
              </li>
              <li className="list-disc list-inside">
                Utilized Route53 to register a custom domain for the website,
                enhancing the center&apos;s branding and establishing a
                professional online identity for the organization
              </li>
            </ul>
          </div>
          <h1 className="linethrough font-bold text-2xl">EDUCATION</h1>
          <div className="p-5">
            <div className="flex justify-between">
              <h1 className="font-bold text-lg">
                Hack Reactor - Operation Spark
              </h1>
              <div className="mr-4">February 2022 - November 2022</div>
            </div>
            <p>Advanced Software Engineering Immersive Program</p>
            <p>
              IBC Fundamentals of JavaScript, Functional Programming, and Web
              Development Level 3
            </p>
          </div>
          <h1 className="linethrough font-bold text-2xl">CERTIFICATIONS</h1>
          <div className="certifications">
            <ul className="cert-list">
              <li className="cert-item">
                <Image className="img" src={architect} alt="" />
                <h1>AWS Solutions Architect Certified</h1>
              </li>
              <li className="cert-item">
                <Image className="img" src={developer} alt="" />
                <h1>AWS Developer Certified</h1>
              </li>
            </ul>
          </div>
          <h1 className="linethrough font-bold text-2xl">SKILLS</h1>
          <div className="skills">
            <ul className="skill-list">
              <h1 className="font-bold text-lg">Languages:</h1>
              <li className="skill-item">Spanish,</li>
              <li className="skill-item">English</li>
            </ul>
            <ul className="skill-list">
              <h1 className="font-bold text-lg">Soft:</h1>
              <li className="skill-item">Communication,</li>
              <li className="skill-item">Leadership,</li>
              <li className="skill-item">Teamwork,</li>
              <li className="skill-item">Problem Solving,</li>
            </ul>
            <ul className="skill-list">
              <h1 className="font-bold text-lg">
                Frameworks and Technologies:
              </h1>
              <li className="skill-item">NodeJS,</li>
              <li className="skill-item">React,</li>
              <li className="skill-item">Next,</li>
              <li className="skill-item">TypeScript,</li>
              <li className="skill-item">CSS,</li>
              <li className="skill-item">Bootstrap,</li>
              <li className="skill-item">TailwindCSS,</li>
              <li className="skill-item">Flask,</li>
              <li className="skill-item">Pandas,</li>
              <li className="skill-item">SKLearn,</li>
              <li className="skill-item">Matplotlib,</li>
              <li className="skill-item">AWS,</li>
              <li className="skill-item">MySQL,</li>
              <li className="skill-item">MongoDB,</li>
              <li className="skill-item">Prisma,</li>
              <li className="skill-item">Github</li>
            </ul>
            <ul className="skill-list">
              <h1 className="font-bold text-lg">Programming Languages:</h1>
              <li className="skill-item">HTML,</li>
              <li className="skill-item">JavaScript,</li>
              <li className="skill-item">Python,</li>
              <li className="skill-item">SQL</li>
            </ul>
            <ul className="skill-list">
              <h1 className="font-bold text-lg">Interests:</h1>
              <li className="skill-item">Learning new technologies,</li>
              <li className="skill-item">creating apps,</li>
              <li className="skill-item">movies,</li>
              <li className="skill-item">snowboarding,</li>
              <li className="skill-item">chess,</li>
              <li className="skill-item">and traveling</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
