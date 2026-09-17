import { heroVisualClassName } from './constant';
import { floatingCards } from './constant';
import DashboardMockup from './DashboardMockUp';
import FloatingCard from './FloatingCard';

const HeroVisual = () => {
  return (
    <div className={heroVisualClassName?.container}>
      <div className={heroVisualClassName?.blobTop} aria-hidden="true" />
      <div className={heroVisualClassName?.blobBottom} aria-hidden="true" />
      <div className={heroVisualClassName?.mockup}>
        <DashboardMockup />
      </div>
      {floatingCards?.length &&
        floatingCards?.map((card) => <FloatingCard key={card?.id} card={card} />)}
    </div>
  );
};

export default HeroVisual;
