import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
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
      <div className="relative z-10 text-left text-white ml-16 sm:ml-24 lg:ml-32 mr-auto">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-10 shadow-2xl transform hover:scale-105 transition-all duration-500 max-w-4xl">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6 drop-shadow-lg">
            <span style={{ fontFamily: 'Bebas Neue, cursive' }}>
              Welcome to Woodland Manor
            </span>
          </h1>
          
          {/* Welcoming Message */}
          <p className="text-xl sm:text-2xl lg:text-3xl mb-8 max-w-3xl leading-relaxed drop-shadow-md font-medium">
            Your premier community in the heart of DeLand, Florida. Where neighbors become family and every day feels like home.
          </p>
          
          {/* Learn More Button */}
          <Link 
            href="/about"
            className="inline-block bg-black/30 backdrop-blur-sm border border-white/20 text-white font-semibold py-4 px-8 rounded-lg text-xl hover:bg-black/40 transition-all duration-300 transform hover:scale-110 drop-shadow-lg"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;