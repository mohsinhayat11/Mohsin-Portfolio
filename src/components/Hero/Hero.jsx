import HeroButtons from "./HeroButtons";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

function Hero() {
  return (
    <section className="min-h-[calc(100vh-80px)] bg-black px-6 md:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-16 py-20 lg:grid-cols-2">

        {/* Left Side */}
        <div className="order-2 lg:order-1 text-center lg:text-left">
          <HeroContent />
          <HeroButtons />
        </div>

        {/* Right Side */}
        <div className="order-1 lg:order-2">
          <HeroImage />
        </div>

      </div>
    </section>
  );
}

export default Hero;