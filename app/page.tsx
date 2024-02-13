import Image from "next/image";
import dynamic from "next/dynamic";
import profilePic from "@/public/profilePic.jpg";
import Contact from "./contact/page";
import Resume from "./resume/page";
import Projects from "./projects/page";
const Work = dynamic(() => import("./work-experience/page"), { ssr: false });

export default function Home() {
  return (
    <main className="wrapper">
      <div className="home" id="about">
        <div className="catch-phrase">
          <span className="fire">fireFighter =&gt;</span>
          <span className="dev">software.developer&#59;</span>
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
          Firefighter turned Software Engineer with a proven track record of
          writing clean and efficient code to tackle complex challenges with
          optimal runtime efficiency. Skilled in front-end development with a
          continuous focus on expanding knowledge in back-end technologies,
          specifically in AI and ML. Leveraging experience from the Fire
          Department, I have demonstrated a disciplined approach and a
          commitment to self-learning essential for driving successful project
          outcomes in dynamic environments.
        </p>
      </div>
      <Resume />
      <Work />
      <Projects />
      <Contact />
    </main>
  );
}
