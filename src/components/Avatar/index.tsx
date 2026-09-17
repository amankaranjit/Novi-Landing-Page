interface AvatarProps {
  initials: string;
  className?: string;
  ring?: boolean;
}

export default function Avatar({ initials, className = "", ring = false }: AvatarProps) {
  return (
    <span
      className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-indigo-500 to-violet-500 text-xs font-semibold text-white ${
        ring ? "ring-2 ring-white" : ""
      } ${className}`}
    >
      {initials}
    </span>
  );
}