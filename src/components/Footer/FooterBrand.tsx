import { footerBrandClassName } from './constant';
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
    <div className={footerBrandClassName?.container}>
      <a href="/" className={footerBrandClassName?.logoLink}>
        <Logo />
        <span className={footerBrandClassName?.logoText}>Novi</span>
      </a>

      <p className={footerBrandClassName?.description}>Better teamwork. Less chaos.</p>

      <div className={footerBrandClassName?.socialLinks}>
        {socialLinks?.length &&
          socialLinks?.map(({ icon, href, label }) => {
            const Icon = socialIcons?.[icon];

            if (!Icon) return null;

            return (
              <a
                key={icon || ''}
                href={href || ''}
                target="_blank"
                rel="noreferrer"
                aria-label={label || 'Social Link'}
                className={footerBrandClassName?.socialLink}
              >
                <Icon className={footerBrandClassName?.socialIcon} />
              </a>
            );
          })}
      </div>
    </div>
  );
};
