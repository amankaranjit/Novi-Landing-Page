import { navLinkClassName, navLinks } from './constant';

const NavLinks = () => {
  return (
    <ul className={navLinkClassName?.nav}>
      {navLinks?.length &&
        navLinks?.map((link) => (
          <li key={link?.label}>
            <a href={link?.href} className={navLinkClassName?.link}>
              {link?.label}
            </a>
          </li>
        ))}
    </ul>
  );
};

export default NavLinks;
