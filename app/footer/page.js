import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'; // Import the icons you need
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.footerRow}>
        <div className={styles.footerCol}>
          <h4>About Us</h4>
          <ul className={styles.links}>
            <li><Link href="#">Our Story</Link></li>
            <li><Link href="#">Team</Link></li>
            <li><Link href="#">Photography Services</Link></li>
            <li><Link href="#">Blog</Link></li>
            <li><Link href="#">Press</Link></li>
          </ul>
        </div>

        <div className={styles.footerCol}>
          <h4>Portfolio</h4>
          <ul className={styles.links}>
            <li><Link href="#">Wedding Photography</Link></li>
            <li><Link href="#">Event Photography</Link></li>
            <li><Link href="#">Product Photography</Link></li>
            <li><Link href="#">Portraits</Link></li>
            <li><Link href="#">Aerial Photography</Link></li>
            <li><Link href="#">Nature Photography</Link></li>
          </ul>
        </div>

        <div className={styles.footerCol}>
          <h4>Customer Support</h4>
          <ul className={styles.links}>
            <li><Link href="#">FAQs</Link></li>
            <li><Link href="#">Pricing</Link></li>
            <li><Link href="#">Booking Information</Link></li>
            <li><Link href="#">Contact Us</Link></li>
            <li><Link href="#">Return & Refund Policy</Link></li>
          </ul>
        </div>

        <div className={styles.footerCol}>
          <h4>Newsletter</h4>
          <p>
            Subscribe to our newsletter for a weekly dose of news, updates, helpful tips, and exclusive offers.
          </p>
          <form action="#">
            <input type="text" placeholder="Your email" required />
            <button type="submit">SUBSCRIBE</button>
          </form>
          <div className={styles.icons}>
            <FaFacebookF size={24} />
            <FaTwitter size={24} />
            <FaLinkedin size={24} />
            <FaGithub size={24} />
          </div>
        </div>
      </div>

      {/* Copyright Notice */}
      <div className={styles.footerBottom}>
        <p className={styles.copyright}>
          Copyright © {new Date().getFullYear()} All Rights Reserved By SnapU Photography
        </p>
      </div>
    </section>
  );
};

export default Footer;
