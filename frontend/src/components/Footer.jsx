import React, { useEffect, useState } from 'react'
import { footerStyles } from '../assets/dummyStyles'
import { 
   ArrowUp,
   Clapperboard, 
   Film, 
   Mail, 
   MapPin, 
   Phone, 
   Popcorn, 
   Star, 
   Ticket
   } from 'lucide-react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaRedditAlien, FaDiscord, FaWhatsapp, FaLinkedin, FaTelegram } from 'react-icons/fa';
import { FaBluesky, FaXTwitter } from "react-icons/fa6";

const Footer = () => {

    const currentYear = new Date().getFullYear();
    const [isVisible, setIsVisible] = useState(false)

      const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }; //for smooth scroll
  
  const links = [
    { label: "Home", href: "/" },
    { label: "Movies", href: "/movies" },
    { label: "Releases", href: "/releases" },
    { label: "Contact", href: "/contact" },
    { label: "Login", href: "/login" }
  ];
  
  const genreLinks = [
    { label: "Horror", href: "/movies" },
    { label: "Thriller", href: "/movies" },
    { label: "Action", href: "/movies" },
    { label: "Drama", href: "/movies" },
    { label: "Comedy", href: "/movies" },
  ];

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Array of icon components for the floating animation
  const floatingIcons = [Clapperboard, Film, Star, Ticket, Popcorn];

    
  return (
    <footer className={footerStyles.footer}>
        <div className={footerStyles.animatedBorder}></div>

        <div>
            <div className={footerStyles.bgContainer}></div>
            <div className={footerStyles.bgGlow1}></div>
            <div className={footerStyles.bgGlow2}></div>
        </div>

          {/* Floating icons - hidden on small devices to avoid overlap; still visible on md+ (tablet & desktop) */}
      <div className={footerStyles.floatingIconsContainer}>
        {[...Array(12)].map((_, i) => {
          const IconComponent = floatingIcons[i % floatingIcons.length];
          const left = (i * 23) % 100;
          const top = (i * 17) % 100;
          const dur = 6 + (i % 5);
          const delay = (i % 4) * 0.6;
          return (
            <div
              key={i}
              className={footerStyles.floatingIcon}
              style={{
                left: `${left}%`,
                top: `${top}%`,
                animation: `float ${dur}s infinite ease-in-out`,
                animationDelay: `${delay}s`
              }}
            >
              <IconComponent className="w-8 h-8" />
            </div>
          );
        })}
      </div>

      <div className={footerStyles.mainContainer}>
        <div className={footerStyles.gridContainer}>
            <div className={footerStyles.brandContainer}>
                <div className={footerStyles.brandLogoContainer}>
                <div className='relative'>
                    <div className={footerStyles.logoGlow}></div>
                        <div className={footerStyles.logoContainer}>
                        <Clapperboard className={footerStyles.logoIcon} />
                    </div>
                </div>
                <h2 className={footerStyles.brandTitle}>
                    Movie <span className={footerStyles.brandTitleWhite}>Mania</span>
                </h2>
                </div>
                <p className={footerStyles.brandDescription}>
                    Follow the latest news, reviews, and exclusive content on the page.
                </p>
                <div className={footerStyles.socialContainer}>
                    { [
                      { Icon: FaInstagram },
                      { Icon: FaYoutube },
                      { Icon: FaXTwitter },
                      { Icon: FaLinkedin },
                      // { Icon: FaDiscord },
                      { Icon: FaRedditAlien }

                    ].map((item, index) => (
                      <a href="#" key={index} className={footerStyles.socialLink}>
                        <item.Icon className={footerStyles.socialIcon} />
                      </a>
                    ))}
                </div>
            </div>

            {/* Quicks Links  */}
            <div >
                <h3 className={footerStyles.sectionHeader}>
                    <div className={footerStyles.sectionDot} />
                    Explore 
                </h3>
                <ul className={footerStyles.linksList}>
                    {links.map((link) => (
                      <li key={link.href}>
                        <a href={link.href} className={footerStyles.linkItem}>
                          <span className={footerStyles.linkDot} />
                          {link.label}
                        </a>
                      </li>
                    ))}
                </ul>
            </div>
            
            {/* genre link  */}
            <div >
                <h3 className={footerStyles.sectionHeader}>
                    <div className={footerStyles.sectionDot} />
                    Genres
                </h3>
                <ul className={footerStyles.linksList}>
                    {genreLinks.map((link) => (
                      // <li key={link.href}>
                      <li key={link.label}>
                        <a href={link.href} className={footerStyles.linkItem}>
                          <span className={footerStyles.linkDot} />
                          {link.label}
                        </a>
                      </li>
                    ))}
                </ul>
            </div>

             {/* Contact Info */}
            <div>
              <h3 className={footerStyles.sectionHeader}>
                <div className={footerStyles.sectionDot} />
                Contact Us
              </h3>
              <ul className={footerStyles.contactList}>
                <li className={footerStyles.contactItem}>
                  <div className={footerStyles.contactIconContainer}>
                    <Mail className={footerStyles.contactIcon} />
                  </div>
                  <span className={footerStyles.contactText}>prototype.myid@gmail.com</span>
                </li>
                <li className={footerStyles.contactItem}>
                  <div className={footerStyles.contactIconContainer}>
                    <Phone className={footerStyles.contactIcon} />
                  </div>
                  <span className={footerStyles.contactText}>+91 ****742282</span>
                </li>
                <li className={footerStyles.contactItem}>
                  <div className={footerStyles.contactIconContainer}>
                    <MapPin className={footerStyles.contactIcon} />
                  </div>
                  <span className={footerStyles.contactText}>Chhattisgarh, India</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider  */}
          <div className={footerStyles.divider}>
            <div className={footerStyles.dividerIconContainer}>
              <Film className={footerStyles.dividerIcon} />
            </div>
          </div>

          <div className={footerStyles.bottomBar}>
            <div className={footerStyles.designedBy}>
              <span className={footerStyles.designedByText}>Designed by</span>
              <a
               href="https://www.linkedin.com/in/harsh-sahu-09aa80249"
               >
                @Harsh Linkedin 
               </a>
            </div>

            <div className={footerStyles.policyLinks}>
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item, index) => (
              <a 
                key={index}
                href="#" 
                className={footerStyles.policyLink}
              >
                {item}
              </a>
            ))}
          </div>
  
          </div>

      </div>

      {isVisible && (
        <button onClick={scrollToTop} className={footerStyles.scrollTopButton}>
          <ArrowUp className={footerStyles.scrollTopIcon} />
        </button>
      )}
      <style className={footerStyles.customCSS}></style>
    </footer>
  )
}

export default Footer