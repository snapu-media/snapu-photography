"use client"; // Marks the file as a client component

import { useState } from "react";
import Link from "next/link"; // Import Next.js Link component
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header id="nav-menu" aria-label="navigation bar" className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.navStart}>
          <Link href="/" className={styles.logo}>
            <img
              src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/06/Starbucks_Corporation_Logo_2011.svg-e1657703028844.png?auto=format&q=60&fit=max&w=930"
              alt="Inc Logo"
            />
          </Link>
          <nav
            className={`${styles.menu} ${menuOpen ? styles.show : ""}`}
            onClick={(e) => e.stopPropagation()}
          >
            <ul className={styles.menuBar}>
              {/* Portfolio */}
              <li>
                <Link href="/landingpage" className={styles.navLink}>
                  Portfolio
                </Link>
              </li>

              {/* Services */}
              <li className={styles.dropdown}>
                <button
                  className={`${styles.navLink} ${styles.dropdownBtn}`}
                  aria-haspopup="true"
                >
                  Photography Services
                  <i className="bx bx-chevron-down" aria-hidden="true"></i>
                </button>
                <div className={styles.dropdownMenu}>
                  <ul role="menu">
                    <li>
                      <span className={styles.dropdownLinkTitle}>Our Services</span>
                    </li>
                    <li role="menuitem">
                      <Link href="/services/Product-Photography" className={styles.dropdownLink}>
                        Product Photography
                      </Link>
                    </li>
                    <li role="menuitem">
                      <Link href="/services/RealEstate-Photography" className={styles.dropdownLink}>
                      Realestate Photography
                      </Link>
                    </li>
                    <li role="menuitem">
                      <Link href="/services/Wedding-Photography" className={styles.dropdownLink}>
                      Wedding Photography
                      </Link>
                    </li>
                    <li role="menuitem">
                      <Link href="/services/Corporate-Events-Photography" className={styles.dropdownLink}>
                      Corporate Events Photography
                      </Link>
                      <li role="menuitem">
                      <Link href="/services/Baby-Born-Photography" className={styles.dropdownLink}>
                      Baby Born Photography
                      </Link>
                    </li>
                    <li role="menuitem">
                      <Link href="/services/Maternity-Photography" className={styles.dropdownLink}>
                      Maternity Photography
                      </Link>
                    </li>
                    </li>
                  </ul>
                </div>
              </li>

              {/* Other Services */}
              <li className={styles.dropdown}>
  <button
    className={`${styles.navLink} ${styles.dropdownBtn}`}
    aria-haspopup="true"
  >
    Packages
    <i className="bx bx-chevron-down" aria-hidden="true"></i>
  </button>
  <div className={styles.dropdownMenu}>
    <div className={styles.dropdownColumns}>
      {/* UK Packages Column */}
      <ul role="menu" className={styles.dropdownColumn}>
        <li>
          <span className={styles.dropdownLinkTitle}>UK Packages</span>
        </li>
        <li role="menuitem">
          <Link href="/photographypackages" className={styles.dropdownLink}>
            Wedding Photography
          </Link>
        </li>
        <li role="menuitem">
          <Link href="/meternityphotographypackages" className={styles.dropdownLink}>
            Maternity Photography
          </Link>
        </li>
        <li role="menuitem">
          <Link href="realestatephotographypackages" className={styles.dropdownLink}>
            Real Estate Photography
          </Link>
        </li>
        <li role="menuitem">
          <Link href="babybornphotographypackages" className={styles.dropdownLink}>
            Baby Born Photography
          </Link>
        </li>
        <li role="menuitem">
          <Link href="productphotographypackages" className={styles.dropdownLink}>
            Product Photography
          </Link>
        </li>
        <li role="menuitem">
          <Link href="corporateeventsphotographypackages" className={styles.dropdownLink}>
            Corporate Events Photography
          </Link>
        </li>
      </ul>

      {/* India Packages Column */}
      <ul role="menu" className={styles.dropdownColumn}>
        <li>
          <span className={styles.dropdownLinkTitle}>India Packages</span>
        </li>
        <li role="menuitem">
          <Link href="/photographypackages" className={styles.dropdownLink}>
            Wedding Photography
          </Link>
        </li>
        <li role="menuitem">
          <Link href="/meternityphotographypackages" className={styles.dropdownLink}>
            Maternity Photography
          </Link>
        </li>
        <li role="menuitem">
          <Link href="realestatephotographypackages" className={styles.dropdownLink}>
            Real Estate Photography
          </Link>
        </li>
        <li role="menuitem">
          <Link href="babybornphotographypackages" className={styles.dropdownLink}>
            Baby Born Photography
          </Link>
        </li>
        <li role="menuitem">
          <Link href="productphotographypackages" className={styles.dropdownLink}>
            Product Photography
          </Link>
        </li>
        <li role="menuitem">
          <Link href="corporateeventsphotographypackages" className={styles.dropdownLink}>
            Corporate Events Photography
          </Link>
        </li>
      </ul>
    </div>
  </div>
</li>



              {/* Demo */}
             {/* Client Albums Dropdown */}
<li className={styles.dropdown}>
  <button
    className={`${styles.navLink} ${styles.dropdownBtn}`}
    aria-haspopup="true"
  >
    Client Albums
    <i className="bx bx-chevron-down" aria-hidden="true"></i>
  </button>
  <div className={styles.dropdownMenu}>
    <div className={styles.dropdownColumns}>
      <ul role="menu" className={styles.dropdownColumn}>
        <li>
          <span className={styles.dropdownLinkTitle}>Client Albums</span>
        </li>
        <li role="menuitem">
          <Link href="/demos/client-albums/india" className={styles.dropdownLink}>
            India
          </Link>
        </li>
        <li role="menuitem">
          <Link href="/demos/client-albums/uk" className={styles.dropdownLink}>
            UK
          </Link>
        </li>
      </ul>
      <ul role="menu" className={styles.dropdownColumn}>
        <li>
          <span className={styles.dropdownLinkTitle}>Demos</span>
        </li>
        <li role="menuitem">
          <Link href="/demos/event-types" className={styles.dropdownLink}>
            Event Types
          </Link>
        </li>
        <li role="menuitem">
          <Link href="/demos/services" className={styles.dropdownLink}>
            Services
          </Link>
        </li>
      </ul>
    </div>
  </div>
</li>


              {/* About */}
              <li>
                <Link href="/about" className={styles.navLink}>
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.navEnd}>
          <div className={styles.rightContainer}>
            <Link href="/contact">
              <button className={`${styles.btn} ${styles.btnPrimary}`}>Contact</button>
            </Link>
          </div>
          <button
            id="hamburger"
            aria-label="hamburger"
            aria-haspopup="true"
            aria-expanded={menuOpen}
            className={styles.hamburger}
            onClick={toggleMenu}
          >
            <i className="bx bx-menu" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </header>
  );
}
