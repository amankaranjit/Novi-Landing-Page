import { socialLinks } from './footerData';
import type { SocialIcon, SocialIconName } from './types';

import { GitHub, LinkedIn, Logo, Twitter, YouTube } from '@/assets/svgs';

const socialIcons: Record<SocialIconName, SocialIcon> = {
  twitter: Twitter,
  linkedin: LinkedIn,
  github: GitHub,
  youtube: YouTube,
};

export const FooterBrand = () => {
  return (
    <div className="lg:col-span-3">
      <a href="/" className="flex items-center gap-2">
        <Logo />
        <span className="text-xl font-bold text-white">Novi</span>
      </a>

      <p className="mt-4 text-sm">Better teamwork. Less chaos.</p>

      <div className="mt-6 flex items-center gap-5">
        {socialLinks.map(({ icon, href, label }) => {
          const Icon = socialIcons[icon];

          return (
            <a
              key={icon}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="flex h-5 w-5 items-center justify-center hover:text-white"
            >
              <Icon className="h-5 w-5" />
            </a>
          );
        })}
      </div>
    </div>
  );
};
