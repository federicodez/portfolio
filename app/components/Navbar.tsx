"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";
import { AiOutlineMenu } from "react-icons/ai";

export default function Navbar() {
  return (
    <header className="primary-header">
      <nav className="navigation">
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkbtn">
          <AiOutlineMenu />
        </label>
        <Link href="#top">
          <Image className="logo" id="logo" src={logo} alt="logo img" />
        </Link>
        <ul className="nav-list">
          <li className="nav-item">
            <Link style={{ color: "black" }} href="#resume">
              Resume
            </Link>
          </li>
          <li className="nav-item">
            <Link style={{ color: "black" }} href="#project">
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link style={{ color: "black" }} href="#contact">
              Contact Me
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
