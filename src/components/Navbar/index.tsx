import { useState } from 'react';

import { navbarClassName } from './constant';
import MenuToggle from './MenuToggle';
import MobileMenu from './MobileMenu';
import NavActions from './NavActions';
import NavLinks from './NavLinks';
import type { NavbarProps } from './types';

import { Logo } from '@/assets/svgs/Logo';
const Navbar = ({ onSignIn, onStart }: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className={navbarClassName?.header}>
      <nav className={navbarClassName?.nav}>
        <a href="/" aria-label="Novi" className={navbarClassName?.logo}>
          <Logo />

          <span className={navbarClassName?.logoText}>Novi</span>
        </a>

        <div className={navbarClassName?.desktopLinks}>
          <NavLinks />
        </div>

        <div className={navbarClassName?.desktopActions}>
          <NavActions onSignIn={onSignIn} onStart={onStart} />
        </div>

        <div className={navbarClassName?.mobileToggle}>
          <MenuToggle open={menuOpen} onClick={handleMenuToggle} />
        </div>
      </nav>

      <MobileMenu open={menuOpen} onSignIn={onSignIn} onStart={onStart} />
    </header>
  );
};

export default Navbar;
