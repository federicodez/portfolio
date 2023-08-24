import Image from "next/image";
import profilePic from "@/public/profilePic.jpg";

export default function Home() {
  return (
    <main className="wrapper">
      <div className="home md:mx-10 md:my-50">
        <Image className="profile-pic md:w-96" src={profilePic} alt="" />
        <div className="catch-phrase">
          <i className="fire">Firefighter</i>
          <b className="turned">=&gt;</b>
          <i className="dev">Software Developer</i>
        </div>
      </div>
      <div className="about" id="about">
        <h1 className="about-header">About</h1>
        <p className="about-description">
          I&apos;m a former firefighter from New Orleans. Now living in NY. Huge
          friends and Game of Thrones fan. Really enjoy watching movies. Blood
          type is coffee. Fitness junkie. Amateur chess player.
        </p>
      </div>
    </main>
  );
}
