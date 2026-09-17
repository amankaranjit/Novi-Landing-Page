import type { FeatureIconName } from './types';

const paths: Record<FeatureIconName, string> = {
  // stacked board / columns
  boards:
    'M4 4.5A1.5 1.5 0 0 1 5.5 3h13A1.5 1.5 0 0 1 20 4.5v15a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 19.5zM7 7h4M7 10.5h6M7 14h3',
  // chat bubble
  threads:
    'M4 5.5A1.5 1.5 0 0 1 5.5 4h13A1.5 1.5 0 0 1 20 5.5v9A1.5 1.5 0 0 1 18.5 16H9l-4 4v-4H5.5A1.5 1.5 0 0 1 4 14.5z',
  // calendar / timeline
  timeline:
    'M4 5.5A1.5 1.5 0 0 1 5.5 4h13A1.5 1.5 0 0 1 20 5.5v13a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 18.5zM4 9h16M8 2v4M16 2v4M8 13h.01M12 13h.01M16 13h.01',
  // plug / integrations
  integrations: 'M9 3v4M15 3v4M6 7h12v3a6 6 0 0 1-12 0zM12 16v5',
};

interface FeatureIconProps {
  name: FeatureIconName;
  className?: string;
}

export default function FeatureIcon({ name, className = 'h-6 w-6' }: FeatureIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d={paths[name]} />
    </svg>
  );
}
