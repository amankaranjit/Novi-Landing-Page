import type { ComponentType, SVGProps } from 'react';

export type SocialIconName = 'twitter' | 'linkedin' | 'github' | 'youtube';

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface SocialLink {
  label: string;
  href: string;
  icon: SocialIconName;
}
export type SocialIcon = ComponentType<SVGProps<SVGSVGElement>>;
