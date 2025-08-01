import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-16 sm:py-0">
      {/* Background Image using Next.js Image */}
      <Image
        src="/images/WoodlandManorOffice.jpg"
        alt="Woodland Manor Office"
        fill
        style={{ objectFit: 'cover' }}
        priority
        quality={90}
      />
      
      {/* Text Overlay with Glassmorphism */}
      <div className="relative z-10 text-left text-white px-4 sm:px-6 lg:px-8 w-full max-w-7xl mx-auto">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl transform hover:scale-105 transition-all duration-500 max-w-xs sm:max-w-2xl lg:max-w-4xl ml-0 sm:ml-8 lg:ml-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-6 drop-shadow-lg font-bebas">
            Welcome to Woodland Manor
          </h1>
          
          {/* Welcoming Message */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-6 sm:mb-8 leading-relaxed drop-shadow-md font-medium">
            Your premier community in the heart of DeLand, Florida. Where neighbors become family and every day feels like home.
          </p>
          
          {/* Learn More Button */}
          <Link 
            href="/about"
            className="inline-block bg-black/30 backdrop-blur-sm border border-white/20 text-white font-semibold py-3 px-6 sm:py-4 sm:px-8 rounded-lg text-lg sm:text-xl hover:bg-black/40 transition-all duration-300 transform hover:scale-110 drop-shadow-lg"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;