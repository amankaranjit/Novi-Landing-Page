import { FooterBottom } from './FooterBottom';
import { FooterBrand } from './FooterBrand';
import { FooterNavigation } from './FooterNavigation';
import { FooterUpdates } from './FooterUpdates';

const Footer = () => {
  return (
    <footer className="bg-bg-footer text-text-muted">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
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
