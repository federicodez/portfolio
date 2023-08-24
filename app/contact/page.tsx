import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
  AiFillPhone,
} from "react-icons/ai";

export default function Contact() {
  return (
    <div className="contact wrapper" id="contact">
      <ul className="contact-list">
        <li className="contact-item">
          <a
            href="https://www.github.com/federicodez"
            target="_blank"
            rel="noopener"
          >
            <AiFillGithub />
          </a>
        </li>
        <li className="contact-item">
          <a
            href="https://www.linkedin.com/in/federicodes"
            target="_blank"
            rel="noopener"
          >
            <AiFillLinkedin />
          </a>
        </li>
        <li className="contact-item">
          <a
            href="mailto:jfedericodes@gmail.com"
            target="_blank"
            rel="noopener"
          >
            <AiFillMail />
          </a>
        </li>
        <li className="contact-item">
          <a href="tel:+15044215995">
            <AiFillPhone />
          </a>
        </li>
      </ul>
    </div>
  );
}
