'use client';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {

  return (
  <section className="relative flex items-start justify-start overflow-hidden pt-8 sm:pt-10 pb-4" style={{ minHeight: 'calc(100vh - 120px)' }}>
      {/* Background Image using Next.js Image */}
      <Image
        src="/images/hero-image.png"
        alt="Woodland Manor Office"
        fill
        style={{ objectFit: 'cover' }}
        className="object-center sm:object-center md:object-left-top"
        priority
        quality={90}
      />
      
      {/* Text Overlay with Glassmorphism */}
      <div className="relative z-10 text-left text-white pl-2 sm:pl-4 lg:pl-6 pr-4 w-full max-w-7xl">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl sm:rounded-2xl p-5 sm:p-7 lg:p-8 shadow-2xl transition-all duration-500 max-w-md sm:max-w-xl lg:max-w-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold leading-tight mb-3 sm:mb-5 drop-shadow-lg font-bebas">
            Welcome to Woodland Manor
          </h1>
          
          {/* Welcoming Message */}
          <p className="text-base sm:text-lg md:text-xl lg:text-xl mb-5 sm:mb-7 leading-relaxed drop-shadow-md font-medium">
            Your premier community in the heart of DeLand, Florida. Where neighbors become family and every day feels like home.
          </p>
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/about"
              className="inline-block bg-black/30 backdrop-blur-sm border border-white/20 text-white font-semibold py-3 px-6 sm:py-4 sm:px-8 rounded-lg text-lg sm:text-xl hover:bg-black/40 transition-all duration-300 transform hover:scale-105 drop-shadow-lg"
            >
              Learn More
            </Link>
            <Link 
              href="/map" /* route is /map (singular); change if /maps added */
              className="inline-block bg-woodland-primary/90 backdrop-blur-sm border border-white/20 text-white font-semibold py-3 px-6 sm:py-4 sm:px-8 rounded-lg text-lg sm:text-xl hover:bg-woodland-secondary transition-all duration-300 transform hover:scale-105 drop-shadow-lg"
            >
              View Community Map
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;