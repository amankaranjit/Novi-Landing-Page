import { wrapperClassName } from './constant';
import { features } from './constant';
import FeatureCard from './FeatureCard';

const Features = () => {
  return (
    <section className={wrapperClassName?.section}>
      <div className={wrapperClassName?.container}>
        <div className={wrapperClassName?.content}>
          <p className={wrapperClassName?.badge}>Features</p>
          <h2 className={wrapperClassName?.heading}>Everything your team needs</h2>
          <p className={wrapperClassName?.description}>
            Powerful features, simple design. Novi helps you stay aligned, move faster, and get more
            done — together.
          </p>
        </div>
        <div className={wrapperClassName?.grid}>
          {features?.length &&
            features?.map((feature) => <FeatureCard key={feature?.title} feature={feature} />)}
        </div>
      </div>
    </section>
  );
};

export default Features;
