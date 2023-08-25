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
    <div className="contact wrapper" id="contact">
      <form action={submitContact}>
        <div className="grid gap-6 mx-4 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="firstName"
              className="block mb-2 text-sm font-medium text-blue-900 light:text-black"
            >
              First name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="bg-gray-50 border border-gray-300 text-blue-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-100 dark:border-gray-600 dark:placeholder-blue-800 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Jon"
              required
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block mb-2 text-sm font-medium text-blue-900 light:text-black"
            >
              Last name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-100 dark:border-gray-600 dark:placeholder-blue-800 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Snow"
              required
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-blue-900 light:text-black"
            >
              Phone number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-100 dark:border-gray-600 dark:placeholder-blue-800 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="281-330-8004"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-blue-900 light:text-black"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-100 dark:border-gray-600 dark:placeholder-blue-800 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="jon.snow@castleblack.com"
              required
            />
          </div>
        </div>
        <div className="mb-6 mx-4">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-blue-900 light:text-black"
          >
            Your message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-blue-100 dark:border-gray-600 dark:placeholder-blue-800 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write your thoughts here..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="text-white m-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Send Message
        </button>
      </form>

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
