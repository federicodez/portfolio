import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";

export function Navbar() {
  return (
    <header className="primary-header">
      <div className="wrapper">
        <div className="navigation">
          <ul className="nav-list">
            <li className="nav-item">
              <Link href="#top">
                <Image className="logo-img" id="logo" src={logo} alt="" />
              </Link>
            </li>
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
              <Link style={{ color: "black" }} href="#about">
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
