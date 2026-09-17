import { heroContentClassName } from './constant';

const HeroContent = () => {
  return (
    <div className={heroContentClassName?.container}>
      <span className={heroContentClassName?.badge}>Simple. Fast. Built for small teams.</span>

      <h1 className={heroContentClassName?.heading}>
        Run your team without{' '}
        <span className={heroContentClassName?.highlight}>the tab switching.</span>
      </h1>

      <p className={heroContentClassName?.description}>
        Novi brings tasks, docs, and conversations into one calm workspace built for small, fast
        moving teams.
      </p>

      <div className={heroContentClassName?.actions}>
        <button type="button" className={heroContentClassName?.primaryButton}>
          Start Free →
        </button>

        <button type="button" className={heroContentClassName?.secondaryButton}>
          <span className={heroContentClassName?.playButton}>▶</span>
          See how it works
        </button>
      </div>
    </div>
  );
};

export default HeroContent;
