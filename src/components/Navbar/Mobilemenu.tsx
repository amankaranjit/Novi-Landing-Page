import { mobileMenuClassName, navLinks } from './constant';
import type { MobileMenuProps } from './types';

import { useLockBodyScroll } from '@/hooks/useLockBodyScroll';

const MobileMenu = ({ open, onSignIn, onStart }: MobileMenuProps) => {
  useLockBodyScroll(open);

  return (
    <div
      aria-hidden={!open}
      className={`${mobileMenuClassName?.menu} ${open ? 'translate-x-0' : '-translate-x-full'}`}
    >
      <div className={mobileMenuClassName?.content}>
        <ul className={mobileMenuClassName?.list}>
          {navLinks.map((link, index) => (
            <li
              key={link.label}
              className={`${mobileMenuClassName?.item} ${
                open ? 'translate-x-0 opacity-100' : '-translate-x-6 opacity-0'
              }`}
              style={{
                transitionDelay: open ? `${100 + index * 60}ms` : '0ms',
              }}
            >
              <a href={link.href} className={mobileMenuClassName?.link}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div
          className={`${mobileMenuClassName?.actions} ${
            open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
          style={{
            transitionDelay: open ? '320ms' : '0ms',
          }}
        >
          <button type="button" onClick={onSignIn} className={mobileMenuClassName?.signIn}>
            Sign in
          </button>

          <button type="button" onClick={onStart} className={mobileMenuClassName?.start}>
            Start Free
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
