import type { FooterColumn, FooterLink, SocialLink } from './types';

export const footerColumns: FooterColumn[] = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '/features' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Integrations', href: '/integrations' },
      { label: 'Changelog', href: '/changelog' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About us', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Docs', href: '/docs' },
      { label: 'Help Center', href: '/help' },
      { label: 'Community', href: '/community' },
      { label: 'Guides', href: '/guides' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy', href: '/privacy' },
      { label: 'Terms', href: '/terms' },
      { label: 'Cookies', href: '/cookies' },
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
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
];
