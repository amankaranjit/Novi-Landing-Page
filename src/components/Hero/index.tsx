import { heroClassName } from "./constant";
import HeroContent from "./HeroContent";
import HeroVisual from "./HeroVisual";

const Hero = () => {
  return (
    <section className={heroClassName?.section}>
      <div className={heroClassName?.container}>
        <HeroContent />
        <HeroVisual />
      </div>
    </section>
  );
};

export default Hero;