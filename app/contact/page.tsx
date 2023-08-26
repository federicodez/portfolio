"use client";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
  AiFillPhone,
} from "react-icons/ai";
import submitContact from "@/app/libs/submit";

export default function Contact() {
  return (
    <>
      <h1 className="linethrough font-bold text-2xl">CONTACT ME</h1>
      <div className="contact wrapper" id="contact">
        <form action={submitContact}>
          <div className="contact-form">
            <div className="first-name">
              <label htmlFor="firstName">First name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Jon"
                required
              />
            </div>
            <div className="last-name">
              <label htmlFor="lastName">Last name</label>
              <input
                type="text"
                id="lastName"
                className="name"
                placeholder="Snow"
                required
              />
            </div>
            <div className="phone">
              <label htmlFor="phone">Phone number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="281-330-8004"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                required
              />
            </div>
            <div className="email">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                id="email"
                placeholder="jon.snow@castleblack.com"
                required
              />
            </div>
          </div>
          <div className="message">
            <label htmlFor="message">Your message</label>
            <textarea
              id="message"
              rows={4}
              placeholder="Write your thoughts here..."
            ></textarea>
          </div>
          <button className="form-btn" type="submit">
            Send Message
          </button>
        </form>

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
