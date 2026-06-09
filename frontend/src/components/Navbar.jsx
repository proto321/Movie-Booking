import React, { useState } from 'react'
import { navbarStyles } from '../assets/dummyStyles'
import { Clapperboard } from 'lucide-react';


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(false)


    const navItems = [
        { id: "home", label: "Home", icon: Home, path: "/" },
        { id: "movies", label: "Movies", icon: Film, path: "/movies" },
        { id: "releases", label: "Releases", icon: Calendar, path: "/releases" },
        { id: "contact", label: "Contact", icon: Mail, path: "/contact" },
        { id: "bookings", label: "Bookings", icon: Ticket, path: "/bookings" },
      ];

  return (
    <nav className={`${navbarStyles.nav.base} ${
        isScrolled ? navbarStyles.nav.scrolled : navbarStyles.nav.notScrolled
    }`}>
        <div className={navbarStyles.container}>
            <div className={navbarStyles.logoContainer}>
                <div className={navbarStyles.logoIconContainer}>
                    <Clapperboard className={navbarStyles.logoIcon}/>
                </div>
                <div className={navbarStyles.logoText}>CineVerse</div>
            </div>

            <div className={navbarStyles.desktopNav}>
                <div className={navbarStyles.desktopNavItem}>
                    {}
                </div>
            </div>
        </div>
    
    </nav>
  )
}

export default Navbar