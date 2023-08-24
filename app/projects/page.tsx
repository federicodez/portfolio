import Image from "next/image";
import nufright from "@/public/nufright.gif";
import { CiShare1 } from "react-icons/ci";

export default function Project() {
  return (
    <div className="container project wrapper" id="project">
      <ul className="project-list">
        <li className="project-item">
          <video className="bpc-video" src="/bpc.mp4" autoPlay={true}></video>
          <p className="description">
            Built website for the company to be able to get in contact with
            patients and teach the public about the procedures offered by the
            doctor Designed the site to be responsive to desktop, laptop, tablet
            and cellphone devices Architected site to be highly available and
            reliable with AWS load balancers to distribute at the application
            layer Utilized Route53 to register a custom domain for the site and
            direct all traffic through a secure protocol
          </p>
          <button className="project-btn">
            <a
              href="https://www.bowenpaincenter.com"
              target="_blank"
              rel="noopener"
            >
              See Live
            </a>
            <CiShare1 />
          </button>
          <button className="project-btn">
            <a
              href="https://github.com/federicodez/bpc"
              target="_blank"
              rel="noopener"
            >
              Source Code
            </a>
            <CiShare1 />
          </button>
        </li>
        <li className="project-item">
          <Image src={nufright} alt={""} />
          <p className="description">
            A one-stop shop for all horror related content. Deployed the app
            resiliently through AWS by using ELB with auto scaling to maintain
            instances running at all times, Cloudfront to deliver the app to
            users quickly, and IGW with NACL and security groups to keep the app
            safe. Displayed haunted houses near the user’s location using MapBox
            and allowed the user to transition from location to location.
            Designed the app with Bootstrap to align content when using the app
            on different size devices and keep the design pattern consistent
            throughout the app. Integrated TypeScript and Webpack, which
            compiled all the files into one and forced potential errors to be
            resolved early in the project.
          </p>
          <button className="project-btn">
            <a href="" target="_blank" rel="noopener">
              See Live
            </a>
            <CiShare1 />
          </button>
          <button className="project-btn">
            <a
              href="https://github.com/federicodez/nuFright"
              target="_blank"
              rel="noopener"
            >
              Source Code
            </a>
            <CiShare1 />
          </button>
        </li>
      </ul>
    </div>
  );
}
