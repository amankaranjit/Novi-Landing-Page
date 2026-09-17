export interface MobileMenuProps {
  open: boolean;
  onSignIn?: () => void;
  onStart?: () => void;
}

export interface NavbarProps {
  onSignIn?: () => void;
  onStart?: () => void;
}
export interface NavActionsProps {
  onSignIn?: () => void;
  onStart?: () => void;
}
export interface MenuToggleProps {
  open: boolean;
  onClick: () => void;
}
