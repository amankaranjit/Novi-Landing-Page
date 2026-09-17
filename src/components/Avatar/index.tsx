interface AvatarProps {
  initials: string;
  className?: string;
  ring?: boolean;
}

export default function Avatar({ initials, className = '', ring = false }: AvatarProps) {
  return (
    <span
      className={`bg-gradient-primary inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-semibold text-white ${
        ring ? 'ring-2 ring-white' : ''
      } ${className}`}
    >
      {initials}
    </span>
  );
}
