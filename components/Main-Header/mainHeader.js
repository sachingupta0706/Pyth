"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import classes from "./mainHeader.module.css";

export default function MainHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.ContainerLogo}>
          <Link href="/" className={classes.ImageLogo} aria-label="Go to home">
            <Image src="/Frame.png" alt="" width={42} height={42} priority />
          </Link>
          <div className={classes.TextLogo}>
            <div className={classes.brand}>Confident</div>
            <div className={classes.sub}>Dental Care Clinic</div>
          </div>
        </div>

        <div className={classes.info}>
          <div className={classes.location}>
            <span className={classes.icon1}>
              <Image src="/location1.svg" alt="loca" width={19} height={24} />
            </span>
            <span className={classes.text1}>St. Sanguin Number 40</span>
          </div>
          <div className={classes.phone}>
            <span className={classes.icon2}>
              <Image src="/phone1.svg" alt="loca" width={24} height={24} />
            </span>
            <span className={classes.text2}>+1234 - 4567 - 890</span>
          </div>
        </div>

        <div className={classes.headerRight}>
          <Link href="/#" className={classes.button}>
            <span className={classes.textbtn}>APPOINTMENT</span>
          </Link>
          <button
            type="button"
            className={classes.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span className={classes.hamburgerLine} />
            <span className={classes.hamburgerLine} />
            <span className={classes.hamburgerLine} />
          </button>
        </div>
      </div>

      <nav className={`${classes.Navbar} ${menuOpen ? classes.NavbarOpen : ""}`}>
        <ul className={classes.menu}>
          <li>
            <Link className={classes.active} href="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link className={classes.link} href="/#" onClick={() => setMenuOpen(false)}>
              About Us
            </Link>
          </li>
          <li>
            <Link className={classes.link} href="/#" onClick={() => setMenuOpen(false)}>
              Services
            </Link>
          </li>
          <li>
            <Link className={classes.link} href="/#" onClick={() => setMenuOpen(false)}>
              Pages
              <Image src="/Arrow.svg" alt="" width={13} height={14} />
            </Link>
          </li>
          <li>
            <Link className={classes.link} href="/#" onClick={() => setMenuOpen(false)}>
              Blog
              <Image src="/Arrow.svg" alt="" width={13} height={14} />
            </Link>
          </li>
          <li>
            <Link className={classes.link} href="/#" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>

        <div className={classes.SearchBox}>
          <input
            type="text"
            placeholder="Search In here"
            className={classes.Input}
          />
          <Link href="/" className={classes.searchBtn} aria-label="Search">
            <Image src="/Search.png" alt="" width={35} height={32} />
          </Link>
        </div>
      </nav>

      <div className={classes.hero}>
        <div className={classes.left}>
          <div className={classes.content}>
            <div className={classes.content1}>
              <div>
                <span className={classes.tag}>WELCOME TO CONFIDENT</span>
              </div>

              <div className={classes.textcont}>
                <h1>
                  High Quality & <br />
                  <span>Painless</span> Dentistry
                </h1>
              </div>
            </div>

            <div className={classes.para}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua ut
                enim ad minim veniam, quis nostrud.
              </p>
            </div>
          </div>

          <div className={classes.actions}>
            <div className={classes.btn7}>
              <button className={classes.primaryBtn}>
                <span className={classes.textc}>CONTACT US</span>
              </button>
            </div>

            <div className={classes.video}>
              <span className={classes.play}>
                <Image
                  src="/play.svg"
                  alt="play button"
                  width={36}
                  height={36}
                />
              </span>
              <span className={classes.textwatch}>Watch Video Profile</span>
            </div>
          </div>
        </div>
        <div className={classes.right}>
          <div className={classes.circle}>
            <Image
              src="/Group 17.svg"
              alt="Doctor"
              width={648}
              height={648}
              priority
            />
            <Image
              src="/Item 04.svg"
              alt="Doctor"
              width={237}
              height={94}
              priority
              className={classes.imgdoc}
            />
          </div>
        </div>
      </div>
    </>
  );
}


