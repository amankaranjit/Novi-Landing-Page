import { footerClassName } from './constant';
import { FooterBottom } from './FooterBottom';
import { FooterBrand } from './FooterBrand';
import { FooterNavigation } from './FooterNavigation';
import { FooterUpdates } from './FooterUpdates';

const Footer = () => {
  return (
    <footer className={footerClassName?.footer}>
      <div className={footerClassName?.container}>
        <div className={footerClassName?.content}>
          <FooterBrand />
          <FooterNavigation />
          <FooterUpdates />
        </div>

        <FooterBottom />
      </div>
    </footer>
  );
};

export default Footer;
