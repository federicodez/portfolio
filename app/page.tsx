import Image from "next/image";
import dynamic from "next/dynamic";
import profilePic from "@/public/profilePic.jpg";
import Contact from "./contact/page";
import Resume from "./resume/page";
const Project = dynamic(() => import("./projects/page"), { ssr: false });

export default function Home() {
  return (
    <main className="wrapper">
      <div className="home" id="about">
        <div className="catch-phrase">
          <i className="fire">Firefighter</i>
          <b className="turned">=&gt;</b>
          <i className="dev">&#x7B;Software.Developer&#x7D;</i>
        </div>
        <Image
          className="profile-pic md:w-96"
          src={profilePic}
          alt="profile pic"
          priority={true}
        />
      </div>
      <div className="about">
        <h1 className="about-header font-bold text-2xl">ABOUT</h1>
        <p className="about-description">
          How you doin? I&apos;m a former firefighter from New Orleans. Now
          living in NY. Huge friends and Game of Thrones fan. Blood type is
          coffee. Fitness junkie. Amateur chess player. Now I code. I know my
          way around the front and back end of applications, full-stack. I enjoy
          watching my code come to life on the web. I even get a kick from
          solving bugs and figuring things out. Used to put out fires in houses,
          now I'm putting them out in my code.
        </p>
      </div>
      <Resume />
      <Project />
      <Contact />
    </main>
  );
}
