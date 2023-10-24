import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
  AiFillPhone,
} from "react-icons/ai";

export default function Contact() {
  return (
    <>
      <h1 className="linethrough font-bold text-2xl">CONTACT ME</h1>
      <div className="contact wrapper" id="contact">
        <ul className="icon-list">
          <li className="icon-item">
            <a
              href="https://www.github.com/federicodez"
              target="_blank"
              rel="noopener"
            >
              <AiFillGithub />
            </a>
          </li>
          <li className="icon-item">
            <a
              href="https://www.linkedin.com/in/federicodes"
              target="_blank"
              rel="noopener"
            >
              <AiFillLinkedin />
            </a>
          </li>
          <li className="icon-item">
            <a
              href="mailto:jfedericodes@gmail.com"
              target="_blank"
              rel="noopener"
            >
              <AiFillMail />
            </a>
          </li>
          <li className="icon-item">
            <a href="tel:+15044215995">
              <AiFillPhone />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
