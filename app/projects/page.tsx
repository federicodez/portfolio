import { CiShare1 } from "react-icons/ci";
import Link from "next/link";

const Projects = () => {
  return (
    <>
      <h1 className="linethrough font-bold text-2xl" id="projects">
        PROJECTS
      </h1>
      <div className="projects wrapper">
        <iframe className="fitbyfede" src="https://fitbyfede.com"></iframe>
        <p className="description">
          Fitness app to log and keep track of all your workouts. Add from a
          selection of exercises or create one, along with the weight and
          repetitions for each set. And discover which workouts you do the most
          or least.
        </p>
        <div className="flex flex-col justify-center items-center">
          <div className="">
            <Link
              href="https://fitbyfede.com"
              rel="noopener"
              target="_blank"
              className="flex flex-row items-center gap-2"
            >
              <CiShare1 />
              <p>Visit Live</p>
            </Link>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex flex-row">
              <p className="pr-2">Username:</p>
              <p className="bg-white rounded-md px-1">chandler@bing.com</p>
            </div>
            <div className="flex flex-row">
              <p className="pr-2">Password:</p>
              <p className="bg-white rounded-md px-1">friends</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
