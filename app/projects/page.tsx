import Image from "next/image";
import { CiShare1 } from "react-icons/ci";
import fitbyfede from "@/app/images/fitbyfede.png";

const Projects = () => {
  return (
    <>
      <h1 className="linethrough font-bold text-2xl" id="projects">
        PROJECTS
      </h1>
      <div className="projects wrapper">
        <Image className="fitbyfede" src={fitbyfede} alt="fitfede" />
        <p className="description">
          Fitness app to log and keep track of all your workouts. Add from a
          selection of exercises or create one, along with the weight and
          repetitions for each set. And discover which workouts you do the most
          or least.
        </p>
        <div className="demo">
          <span className="underline text-center">Demo Account</span>
          <div>
            Email:{" "}
            <span className="select-all bg-white px-1">chandler@bing.com</span>
          </div>
          <div>
            Password: <span className="select-all bg-white px-1">friends</span>
          </div>
        </div>
        <button className="project-btn">
          <a href="https://fitbyfede.com" target="_blank" rel="noopener">
            See Live
          </a>
          <CiShare1 />
        </button>
      </div>
    </>
  );
};

export default Projects;
