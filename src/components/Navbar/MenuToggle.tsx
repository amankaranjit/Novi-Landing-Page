import { menuToggleClassName } from './constant';
import type { MenuToggleProps } from './types';

const MenuToggle = ({ open, onClick }: MenuToggleProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={open ? 'Close menu' : 'Open menu'}
      aria-expanded={open}
      className={menuToggleClassName?.button}
    >
      <span className={menuToggleClassName?.icon}>
        <span
          className={`${menuToggleClassName?.line} top-0 ${open ? 'translate-y-1.75 rotate-45' : ''}`}
        />

        <span className={`${menuToggleClassName?.middle} ${open ? 'opacity-0' : 'opacity-100'}`} />

        <span
          className={`${menuToggleClassName?.line} bottom-0 ${open ? '-translate-y-1.75 -rotate-45' : ''}`}
        />
      </span>
    </button>
  );
};

export default MenuToggle;
