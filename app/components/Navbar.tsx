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
        <Image className="logo" id="logo" src={logo} alt="logo img" />
        <ul className="nav-list">
          <li className="nav-item">
            <Link className="link" style={{ color: "white" }} href="/">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="link" style={{ color: "white" }} href="#resume">
              Resume
            </Link>
          </li>
          <li className="nav-item">
            <Link className="link" style={{ color: "white" }} href="#project">
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link className="link" style={{ color: "white" }} href="#contact">
              Contact Me
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
