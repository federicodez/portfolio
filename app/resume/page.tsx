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
          <div className="m-5 pt-3">
            <p>
              Firefighter turned Software Engineer with a proven track record of
              writing clean and efficient code to tackle complex challenges with
              optimal runtime efficiency. Skilled in front-end development with
              a continuous focus on expanding knowledge in back-end
              technologies, specifically in AI and ML. Leveraging experience
              from the Fire Department, I have demonstrated a disciplined
              approach and a commitment to self-learning essential for driving
              successful project outcomes in dynamic environments.
            </p>
          </div>
          <h1 className="linethrough font-bold text-2xl">EMPLOYMENT</h1>
          <div className="p-5">
            <h1 className="font-bold text-lg">Terrytown Fire Department</h1>
            <h2 className="underline underline-1">Operator / FireFighter</h2>
            <div className="flex justify-between">
              <p>2016 - 2021</p>
              <p>Terrytown, LA</p>
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
            <h1 className="font-bold text-lg">Bowen Pain Center</h1>
            <h2 className="underline underline-1">Software Developer</h2>
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
            <h1 className="font-bold text-lg">
              Hack Reactor - Operation Spark
            </h1>
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
          <h1 className="linethrough font-bold text-2xl">TECHNICAL SKILLS</h1>
          <div className="skills">
            <ul className="skill-list">
              <h1 className="font-bold text-lg">Front End</h1>
              <li className="skill-item">HTML5</li>
              <li className="skill-item">JavaScript</li>
              <li className="skill-item">TypeScript</li>
              <li className="skill-item">NextJS</li>
              <li className="skill-item">React</li>
              <li className="skill-item">CSS</li>
              <li className="skill-item">TailwindCSS</li>
              <li className="skill-item">Bootstrap</li>
            </ul>
            <ul className="skill-list">
              <h1 className="font-bold text-lg">Back End</h1>
              <li className="skill-item">Python</li>
              <li className="skill-item">NodeJS</li>
              <li className="skill-item">ExpressJS</li>
              <li className="skill-item">MySQL</li>
              <li className="skill-item">Sequelize</li>
              <li className="skill-item">MongoDB</li>
              <li className="skill-item">Mongoose</li>
              <li className="skill-item">Prisma</li>
              <li className="skill-item">Restful APIs</li>
            </ul>
            <ul className="skill-list">
              <h1 className="font-bold text-lg">Others End</h1>
              <li className="skill-item">Git</li>
              <li className="skill-item">GitHub</li>
              <li className="skill-item">Webpack</li>
              <li className="skill-item">Vim</li>
              <li className="skill-item">Tmux</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
