import type { FeatureIconProps } from './types';

import { BoardsIcon, ThreadsIcon, TimelineIcon, IntegrationsIcon } from '@/assets/svgs';

const icons = {
  boards: BoardsIcon,
  threads: ThreadsIcon,
  timeline: TimelineIcon,
  integrations: IntegrationsIcon,
};

const FeatureIcon = ({ name, className = 'h-6 w-6' }: FeatureIconProps) => {
  const Icon = icons[name];

  return <Icon className={className} />;
};

export default FeatureIcon;
