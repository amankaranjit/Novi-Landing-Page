import { footerBottomClassName } from './constant';
import { legalLinks } from './constant';

export const FooterBottom = () => {
  return (
    <div className={footerBottomClassName?.container}>
      <p className={footerBottomClassName?.copyright}>© 2026 Novi. All rights reserved.</p>

      <ul className={footerBottomClassName?.links}>
        {legalLinks?.length &&
          legalLinks?.map((link) => (
            <li key={link?.label || ''}>
              <a href={link?.href || ''} className={footerBottomClassName?.link}>
                {link?.label}
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
};
