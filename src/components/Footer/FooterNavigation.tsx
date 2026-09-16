import { footerColumns } from './footerData';

export const FooterNavigation = () => {
  return (
    <nav aria-label="Footer" className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-6">
      {footerColumns.map((column) => (
        <div key={column.title}>
          <h2 className="text-xs font-semibold tracking-wider uppercase">{column.title}</h2>

          <ul className="mt-4 space-y-3">
            {column.links.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-sm hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
};
