export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: 'Product', href: '#' },
  { label: 'Solutions', href: '#' },
  { label: 'Pricing', href: '#' },
  { label: 'About', href: '#' },
];

export const navLinkClassName = {
  nav: 'flex items-center gap-8',
  link: 'py-2 text-[14px] font-medium text-text-secondary transition-colors duration-200 hover:text-text-primary',
};
export const navActionClassName = {
  container: 'flex items-center gap-7',
  signIn:
    'text-[14px] font-medium text-text-secondary transition-colors hover:text-text-primary cursor-pointer',
  start:
    'rounded-full bg-primary-600 px-5 py-2.5 text-[14px] font-semibold text-white shadow-sm transition-all duration-200 hover:bg-primary-700 hover:shadow-md active:scale-[0.98]',
};
export const mobileMenuClassName = {
  menu: 'fixed inset-x-0 top-18 bottom-0 z-40 bg-bg-primary transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden',
  content: 'flex h-full flex-col overflow-y-auto px-6 py-8',
  list: 'space-y-1',
  item: 'transition-all duration-500 ease-out',
  link: 'block rounded-xl px-4 py-3.5 text-base font-medium text-text-primary transition-colors duration-200 hover:bg-bg-secondary hover:text-primary-600',
  actions:
    'mt-auto flex flex-col gap-3 border-t border-border-light pt-6 transition-all duration-500 ease-out',
  signIn:
    'w-full rounded-full border border-border-light px-4 py-3 text-sm font-semibold text-text-primary transition-colors duration-200 hover:bg-bg-secondary',
  start:
    'w-full rounded-full bg-primary-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-primary-700 hover:shadow-md active:scale-[0.99]',
};
export const menuToggleClassName = {
  button:
    'inline-flex h-10 w-10 items-center justify-center rounded-lg text-text-primary transition-colors duration-200 hover:bg-bg-secondary lg:hidden',
  icon: 'relative block h-4 w-5',
  line: 'absolute left-0 h-0.5 w-5 rounded-full bg-current transition-all duration-300',
  middle:
    'absolute left-0 top-1/2 h-0.5 w-5 -translate-y-1/2 rounded-full bg-current transition-opacity duration-200',
};
export const navbarClassName = {
  header: 'sticky top-0 z-50 bg-bg-primary',
  nav: 'mx-auto flex h-19 max-w-7xl items-center px-6 lg:px-8',
  logo: 'flex shrink-0 items-center gap-2.5',
  logoText: 'text-[22px] font-extrabold tracking-[-0.04em] text-text-primary',
  desktopLinks: 'ml-16 hidden lg:block',
  desktopActions: 'ml-auto hidden lg:block',
  mobileToggle: 'ml-auto lg:hidden',
};
