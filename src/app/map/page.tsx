import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Community Map | Woodland Manor',
  description: 'Map of Woodland Manor lots and layout.'
};

export default function MapPage() {
  return (
    <div className="min-h-screen bg-woodland-cream relative py-20 px-4">
      <div className="absolute inset-0 bg-gradient-to-br from-woodland-cream via-stone-100 to-stone-200 opacity-50" />
      <div className="absolute inset-0 woodland-nature-orbs" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-woodland-primary mb-4 font-bebas tracking-wider">Community Map</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">Below is the current layout of Woodland Manor lots. This reference map is provided for orientation and planning purposes.</p>
        </div>
        <div className="woodland-glass-card p-4 sm:p-8 mb-12 space-y-10">
          <div className="relative w-full overflow-auto rounded-xl border border-woodland-primary/20 bg-white/60 backdrop-blur">
            <div className="min-w-[800px]">
              <Image 
                src="/images/Lots.webp" 
                alt="Woodland Manor Lots Map" 
                width={2000}
                height={1400}
                className="w-full h-auto rounded-lg shadow-md"
                priority
              />
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-woodland-primary mb-4">Interactive Location</h2>
            <div className="rounded-xl overflow-hidden border border-woodland-primary/20 shadow-md bg-white/70 backdrop-blur-sm">
              <iframe
                title="Woodland Manor on Google Maps"
                // Added &t=k for satellite (k = satellite) and z=18 for closer zoom
                src="https://www.google.com/maps?q=4119+Woodland+Circle+DeLand+FL+32724&output=embed&t=k&z=18"
                width="100%"
                height="450"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            {/* Buttons (left) and location box (right) in one row */}
            <div className="mt-6 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 w-full">
              <div className="flex flex-col items-center sm:items-start gap-3">
                <a
                  href="https://maps.google.com/?q=4119+Woodland+Circle+DeLand+FL+32724"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-woodland-primary hover:bg-woodland-secondary text-white font-semibold px-6 py-3 rounded-lg transition-colors shadow w-full sm:w-auto text-center"
                >
                  Open in Google Maps
                </a>
                <div className="flex flex-col xs:flex-row sm:flex-row gap-3 w-full sm:w-auto">
                  <a
                    href="/images/Lots.webp"
                    download
                    className="inline-block bg-woodland-primary hover:bg-woodland-secondary text-white font-semibold px-6 py-3 rounded-lg transition-colors w-full sm:w-auto text-center"
                  >
                    Download Map
                  </a>
                  <Link
                    href="/"
                    className="inline-block bg-black/30 hover:bg-black/50 text-white font-semibold px-6 py-3 rounded-lg transition-colors border border-white/30 backdrop-blur-sm w-full sm:w-auto text-center"
                  >
                    Return Home
                  </Link>
                </div>
              </div>
              <div className="w-full sm:w-60 md:w-64 bg-woodland-primary/10 border border-woodland-primary/30 rounded-xl px-4 py-6 backdrop-blur-sm shadow-inner min-h-[150px] sm:ml-auto">
                <h3 className="text-woodland-primary font-semibold text-xs tracking-wider mb-2 uppercase text-center sm:text-left">Physical Location</h3>
                <p className="text-xs text-gray-800 leading-relaxed text-center sm:text-left">
                  Behind <span className="font-medium">Walgreens</span> at <span className="font-medium">15A &amp; 17/92</span> in <span className="font-medium">DeLand, FL</span>.
                </p>
                <p className="mt-3 text-[11px] text-gray-600 leading-relaxed text-center sm:text-left">Use the button for directions or zoom the map above.</p>
              </div>
            </div>
          </div>
          {/* Download and Return buttons moved into unified row above */}
          <p className="text-xs text-gray-500 text-center mt-6">If you require a clearer or printed copy, please contact the board for an official version.</p>
        </div>
      </div>
    </div>
  );
}
