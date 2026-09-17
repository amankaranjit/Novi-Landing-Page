import FeatureIcon from './FeatureIcon';
import type { FeatureCardProps } from './types';

const FeatureCard = ({ feature }: FeatureCardProps) => {
  const { icon, iconBg, iconColor, title, description } = feature;
  return (
    <article className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg">
      <div
        className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${iconBg} ${iconColor} transition-transform duration-300 group-hover:scale-110`}
      >
        <FeatureIcon name={icon} />
      </div>

      <h3 className="mt-5 text-lg font-semibold tracking-tight text-slate-900">{title}</h3>

      <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
    </article>
  );
};

export default FeatureCard;
