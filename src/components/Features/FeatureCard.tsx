import { cardClassName } from './constant';
import FeatureIcon from './FeatureIcon';
import type { FeatureCardProps } from './types';
const FeatureCard = ({ feature }: FeatureCardProps) => {
  const { icon, iconBg, iconColor, title, description } = feature;
  return (
    <article className={cardClassName?.card}>
      <div className={`${cardClassName?.icon} ${iconBg} ${iconColor}`}>
        <FeatureIcon name={icon} />
      </div>
      <h3 className={cardClassName?.title}>{title}</h3>
      <p className={cardClassName?.description}>{description}</p>
    </article>
  );
};
export default FeatureCard;
