import Image from "next/image";
import developer from "@/public/developer.png";
import architect from "@/public/architect.png";
import { AiOutlineDownload } from "react-icons/ai";

export default function Resume() {
  return (
    <div className="wrapper">
      <button className="resume-btn">
        <a
          href="/Federico Jimenez Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download
        >
          DOWNLOAD.PDF
        </a>
        <AiOutlineDownload />
      </button>
      <div className="container resume" id="resume">
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
        <h1 className="linethrough font-bold text-2xl">EMPLOYMENT</h1>
        <div className="p-5">
          <h1 className="font-bold text-lg">Bowen Pain Center</h1>
          <h2 className="underline underline-1">Software Developer</h2>
          <div className="flex justify-between">
            <p>2020 - Present</p>
            <p>New York, NY</p>
          </div>
          <ul>
            <li className="list-disc list-inside">
              Built website for the company to be able to get in contact with
              patients and teach the public about the procedures offered by the
              doctor
            </li>
            <li className="list-disc list-inside">
              Designed the site to be responsive to desktop, laptop, tablet and
              cellphone devices
            </li>
            <li className="list-disc list-inside">
              Architected site to be highly available and reliable with AWS load
              balancers to distribute at the application layer
            </li>
            <li className="list-disc list-inside">
              Utilized Route53 to register a custom domain for the site and
              direct all traffic through a secure protocol
            </li>
          </ul>
        </div>
        <div className="p-5">
          <h1 className="font-bold text-lg">Terrytown Fire Department</h1>
          <h2 className="underline underline-1">Operator / FireFighter</h2>
          <div className="flex justify-between">
            <p>2016 - 2021</p>
            <p>Terrytown, LA</p>
          </div>
          <ul>
            <li className="list-disc list-inside">
              Performed general maintenance on the fire trucks
            </li>
            <li className="list-disc list-inside">
              Responded to structure fires by setting up the fire truck to pump
              water, then packed out in full gear to fight the fire and protect
              lives, the environment, and property
            </li>
            <li className="list-disc list-inside">
              Responded to medical calls, analyzed hazardous situations, and
              reacted with quick solutions
            </li>
            <li className="list-disc list-inside">
              Provided medical care to civilians impacted by fire by taking
              pulses, offering CPR, and treating any other life-threatening
              injuries
            </li>
            <li className="list-disc list-inside">
              Supported EMS with procedures, such as administering oxygen,
              loading patient into ambulance and transporting
            </li>
            <li className="list-disc list-inside">
              Taught and participated in training classes and drills
            </li>
          </ul>
        </div>
        <h1 className="linethrough font-bold text-2xl">EDUCATION</h1>
        <div className="p-5">
          <h1 className="font-bold text-lg">Hack Reactor - Operation Spark</h1>
          <p>Advanced Software Engineering Immersive Program</p>
          <p>
            IBC Fundamentals of JavaScript, Functional Programming, and Web
            Development Level 3
          </p>
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
  );
}
