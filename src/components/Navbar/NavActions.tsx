import { navActionClassName } from './constant';
import type { NavActionsProps } from './types';

const NavActions = ({ onSignIn, onStart }: NavActionsProps) => {
  return (
    <div className={navActionClassName?.container}>
      <button type="button" onClick={onSignIn} className={navActionClassName?.signIn}>
        Sign in
      </button>

      <button type="button" onClick={onStart} className={navActionClassName?.start}>
        Start Free
      </button>
    </div>
  );
};

export default NavActions;
