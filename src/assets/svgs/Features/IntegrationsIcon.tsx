import type { SVGProps } from 'react';

export const IntegrationsIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M9 3v4M15 3v4M6 7h12v3a6 6 0 0 1-12 0z" />
      <path d="M12 16v5" />
    </svg>
  );
};
