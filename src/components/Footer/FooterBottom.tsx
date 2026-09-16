import { legalLinks } from './footerData';

export const FooterBottom = () => {
  return (
    <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-sm">© 2026 Novi. All rights reserved.</p>

      <ul className="flex gap-6">
        {legalLinks.map((link) => (
          <li key={link.label}>
            <a href={link.href} className="text-sm hover:text-white">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
