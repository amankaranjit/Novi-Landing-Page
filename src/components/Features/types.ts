export type FeatureIconName = 'boards' | 'threads' | 'timeline' | 'integrations';

export interface Feature {
  icon: FeatureIconName;
  iconBg: string;
  iconColor: string;
  title: string;
  description: string;
}
export interface FeatureCardProps {
  feature: Feature;
}
