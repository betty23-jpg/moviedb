import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import styles from "./Footer.module.css";

const footerLinks = [
  [
    "Audio Description",
    "Investor Relations",
    "Legal Notices",
  ],
  [
    "Help Centre",
    "Jobs",
    "Cookie Preferences",
  ],
  [
    "Gift Cards",
    "Terms of Use",
    "Corporate Information",
  ],
  [
    "Media Centre",
    "Privacy",
    "Contact Us",
  ],
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Social Icons */}
        <div className={styles.socialIcons}>
          <a href="#" aria-label="Facebook">
            <FaFacebookF />
          </a>

          <a href="#" aria-label="Instagram">
            <FaInstagram />
          </a>

          <a href="#" aria-label="Twitter">
            <FaTwitter />
          </a>

          <a href="#" aria-label="YouTube">
            <FaYoutube />
          </a>
        </div>

        {/* Footer Links */}
        <div className={styles.linksGrid}>
          {footerLinks.map((column, index) => (
            <div key={index} className={styles.column}>
              {column.map((link) => (
                <a key={link} href="#" className={styles.link}>
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className={styles.copyright}>
          © 1997–2026 Netflix, Inc.
        </div>
      </div>
    </footer>
  );
};

export default Footer;