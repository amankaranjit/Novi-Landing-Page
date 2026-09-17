import { footerNavigationClassName } from './constant';
import { footerColumns } from './footerData';

export const FooterNavigation = () => {
  return (
    <nav aria-label="Footer" className={footerNavigationClassName?.nav}>
      {footerColumns?.length &&
        footerColumns?.map((column) => (
          <div key={column?.title}>
            <h2 className={footerNavigationClassName?.title}>{column.title}</h2>

            <ul className={footerNavigationClassName?.list}>
              {column?.links?.map((link) => (
                <li key={link?.label}>
                  <a href={link?.href} className={footerNavigationClassName?.link}>
                    {link?.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
    </nav>
  );
};
