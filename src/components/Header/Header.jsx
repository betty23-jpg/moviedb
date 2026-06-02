import React, {useEffect, useState} from "react";
import logo from "../../assets/image/logo.png";
import {Link} from 'react-router-dom'
import {Search, Bell, User, ChevronDown} from 'lucide-react'
import styles from './Header.module.css'
function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isprofileOpen, setIsprofileOpen] = useState(false);
//for blur
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 50){
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        {/* logo */}
        <img className={styles.logo} src={logo} alt="" />

        {/* navigation links */}
        <nav className={styles.nav}>
          <a className={styles.navLink} href="">Home</a>
          <a className={styles.navLink} href="">Tv Shows</a>
          <a className={styles.navLink} href="">Movies</a>
          <a className={styles.navLink} href="">New & popular</a>
          <a className={styles.navLink} href="">My List</a>
          <a className={styles.navLink} href="">Browse by Language</a>
        </nav>

        {/* right side section */}
        <div className={styles.rightSection}>
          <div className={styles.searchContainer}>
            <button 
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className={styles.searchButton}>
              <Search size={20} />
            </button>

               {isSearchOpen && (  

                <input type="text" placeholder="Search..." className={styles.searchInput} />

              )}

          </div>

          {/* notification */}
          <button className={styles.iconButton}>
            <Bell size={20} />
            <span className={styles.notificationBadge}>4</span>
          </button>

          {/* profile */}
          <div className={styles.profileContainer}>
            <button
            onClick={() => setIsprofileOpen(!isprofileOpen)}
             className={styles.profileButton}>
              <div className={styles.profileAvatar}>
                <User size={20} />
              </div>
              <ChevronDown size={20} />
            </button>
            {isprofileOpen && (
              <div className={styles.profileMenu}>
                <Link  className={styles.profileMenuItem}>Account</Link>
                <Link className={styles.profileMenuItem}>help center</Link>
                <hr className={styles.profileMenuDivider}/>
                <button className={styles.profileMenuItem}>Logout</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
