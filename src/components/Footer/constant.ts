import type { FooterColumn, FooterLink, SocialLink } from './types';

export const footerBottomClassName = {
  container:
    'mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between',
  copyright: 'text-sm',
  links: 'flex gap-6',
  link: 'text-sm hover:text-text-white',
};

export const footerBrandClassName = {
  container: 'lg:col-span-3',
  logoLink: 'flex items-center gap-2',
  logoText: 'text-xl font-bold text-text-white',
  description: 'mt-4 text-sm',
  socialLinks: 'mt-6 flex items-center gap-5',
  socialLink: 'flex h-5 w-5 items-center justify-center hover:text-text-white',
  socialIcon: 'h-5 w-5',
};

export const footerFormClassName = {
  form: 'w-full',
  wrapper: 'flex w-full max-w-sm overflow-hidden rounded-lg bg-white/5 ring-1 ring-white/10',
  input:
    'min-w-0 flex-1 bg-transparent px-4 py-2.5 text-sm text-text-white placeholder:text-text-muted focus:outline-none',
  button:
    'shrink-0 bg-primary-600 px-5 py-2.5 text-sm font-medium text-text-white transition-colors hover:bg-primary-500 focus-visible:outline-offset-2 focus-visible:outline-primary-400',
};

export const footerNavigationClassName = {
  nav: 'grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-6',
  title: 'text-xs font-semibold uppercase tracking-wider',
  list: 'mt-4 space-y-3',
  link: 'text-sm hover:text-text-white',
};

export const footerUpdatesClassName = {
  container: 'lg:col-span-3',
  title: 'font-semibold text-text-white',
  description: 'mt-3 mb-5 text-sm leading-relaxed',
};

export const footerClassName = {
  footer: 'bg-bg-footer text-text-muted',
  container: 'mx-auto max-w-7xl px-6 py-16 lg:px-8',
  content: 'grid gap-12 lg:grid-cols-12',
};

export const footerColumns: FooterColumn[] = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '#' },
      { label: 'Pricing', href: '#' },
      { label: 'Integrations', href: '#' },
      { label: 'Changelog', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About us', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Docs', href: '#' },
      { label: 'Help Center', href: '#' },
      { label: 'Community', href: '#' },
      { label: 'Guides', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy', href: '#' },
      { label: 'Terms', href: '#' },
      { label: 'Cookies', href: '#' },
    ],
  },
];

export const socialLinks: SocialLink[] = [
  {
    label: 'Novi on X',
    href: 'https://x.com',
    icon: 'twitter',
  },
  {
    label: 'Novi on LinkedIn',
    href: 'https://linkedin.com',
    icon: 'linkedin',
  },
  {
    label: 'Novi on GitHub',
    href: 'https://github.com',
    icon: 'github',
  },
  {
    label: 'Novi on YouTube',
    href: 'https://youtube.com',
    icon: 'youtube',
  },
];

export const legalLinks: FooterLink[] = [
  { label: 'Privacy', href: '#' },
  { label: 'Terms', href: '#' },
];
