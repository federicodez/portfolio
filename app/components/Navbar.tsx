"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import logo from "@/public/logo.png";

export default function Navbar() {
  const [active, setActive] = useState(false);

  const primaryHeader = document.querySelector(".primary-header");
  const scrollWatcher = document.createElement("div");

  scrollWatcher.setAttribute("data-scroll-watcher", "");
  primaryHeader?.before(scrollWatcher);

  const navObserver = new IntersectionObserver((entries) => {
    primaryHeader?.classList.toggle("sticking", !entries[0].isIntersecting);
  });

  navObserver.observe(scrollWatcher);

  return (
    <header className="primary-header">
      <div className="wrapper">
        <div className="navigation">
          <ul className="nav-list">
            <li className="nav-item">
              <Link href="#top" onClick={() => setActive(!active)}>
                <Image className="logo-img" id="logo" src={logo} alt="" />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                style={{ color: "black" }}
                href="#resume"
                onClick={() => setActive(!active)}
              >
                Resume
              </Link>
            </li>
            <li className="nav-item">
              <Link
                style={{ color: "black" }}
                href="#project"
                onClick={() => setActive(!active)}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                style={{ color: "black" }}
                href="#about"
                onClick={() => setActive(!active)}
              >
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
