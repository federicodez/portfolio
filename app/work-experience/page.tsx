import { CiShare1 } from "react-icons/ci";

const Work = () => {
  return (
    <>
      <h1 className="linethrough font-bold text-2xl" id="work">
        WORK EXPERIENCE
      </h1>
      <div className="work wrapper">
        <iframe className="bpc" src="https://www.bowenpaincenter.com"></iframe>
        <p className="description">
          Built website for the company to be able to get in contact with
          patients and teach the public about the procedures offered by the
          doctor Designed the site to be responsive to desktop, laptop, tablet
          and cellphone devices Architected site to be highly available and
          reliable with AWS load balancers to distribute at the application
          layer Utilized Route53 to register a custom domain for the site and
          direct all traffic through a secure protocol
        </p>
        <button className="work-btn">
          <a
            href="https://www.bowenpaincenter.com"
            target="_blank"
            rel="noopener"
          >
            See Live
          </a>
          <CiShare1 />
        </button>
      </div>
    </>
  );
};

export default Work;
