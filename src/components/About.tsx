'use client';
import React from 'react';
import Link from 'next/link';

export const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-woodland-cream relative py-20 px-4">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-woodland-cream via-stone-100 to-stone-200 opacity-50"></div>
      <div className="absolute inset-0 woodland-nature-orbs"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-woodland-primary mb-6 font-bebas tracking-wider">
            About Woodland Manor
          </h1>
          <p className="text-xl text-gray-600 font-medium max-w-2xl mx-auto leading-relaxed">
            Building a vibrant community for our residents.
          </p>
        </div>

        {/* President's Letter */}
        <div className="woodland-glass-card p-8 lg:p-12 mb-12">
          <div className="border-b border-gray-300 pb-4 mb-6">
            <h2 className="text-2xl font-bold text-woodland-primary mb-1">From Our President</h2>
            <p className="text-gray-600 text-sm">June 4, 2025</p>
          </div>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p><span className="font-medium">Dear Woodland community,</span></p>
            <p>
              I hope this finds everyone well. As I&apos;m sure you are well aware by now, we are under a pretty much new regime.
            </p>
            <p>
              We have formed a committee to deal with violations within our community. At this time, I would like to thank those of you who are in compliance, and those of you who have been in contact to work with us to remedy your individual situations.
            </p>
            <p>
              You can contact your president, Lisa, at <a href="tel:802-324-8027" className="text-woodland-primary hover:underline">802-324-8027</a> or <a href="mailto:lmurray39@gmail.com" className="text-woodland-primary hover:underline">lmurray39@gmail.com</a> to talk about violations or get a set of our governing documents.
            </p>
            <p>
              We have also set up a volunteer list to help people in need, that just cannot do it themselves or have no one here to help. You can contact Sandi Passante at <a href="tel:610-563-4998" className="text-woodland-primary hover:underline">610-563-4998</a>. You can also contact Sandi to have your name added to the volunteer committee.
            </p>
            <div className="mt-8 p-6 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg space-y-3">
              <h3 className="text-lg font-bold text-yellow-800 mb-2">Reminders</h3>
              <div className="flex items-start space-x-2">
                <span className="text-yellow-600 mt-1">•</span>
                <p><strong>Speed limit:</strong> The speed limit in our community is 20 mph. It&apos;s summertime and children will be out playing, so please keep an eye out for them.</p>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-yellow-600 mt-1">•</span>
                <p><strong>Dog policies:</strong> Your dogs must be leashed at all times when not in your fully secured fenced in yard. You must also pick up your dog&apos;s waste.</p>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-yellow-600 mt-1">•</span>
                <p><strong>No fireworks allowed!</strong> Our homes are very close together, if one catches on fire the whole community could go up in flames. You would be held responsible per Florida law. We have veterans that live in our community - it&apos;s triggering for them!</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="woodland-glass-card p-8 lg:p-12 mb-12">
          {/* Mission Card */}
          <div className="bg-gradient-to-br from-woodland-primary/5 to-woodland-accent/5 border border-woodland-primary/10 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-woodland-primary/20 hover:border-woodland-primary/20">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-woodland-primary to-woodland-secondary rounded-xl mb-6 shadow-lg">
              <span className="text-2xl">🏘️</span>
            </div>
            <h2 className="text-2xl font-bold text-woodland-primary mb-4">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Woodland Manor is a vibrant community dedicated to enhancing the quality of life for all residents. Our mission is to foster a welcoming environment.
            </p>
          </div>

          {/* Core Values */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {/* Updated first value card */}
            <div className="bg-woodland-cream/80 border border-woodland-cream/50 rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:bg-woodland-cream/95 hover:shadow-lg">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-woodland-primary to-woodland-secondary rounded-full flex items-center justify-center shadow-lg">
                <span className="text-2xl">🌿</span>
              </div>
              <h3 className="text-xl font-semibold text-woodland-primary mb-3">Responsible Stewardship</h3>
              <p className="text-gray-600 leading-relaxed">
                We take pride in maintaining shared spaces, protecting property values, and making thoughtful decisions that benefit every resident today and tomorrow.
              </p>
            </div>

            {/* Existing second value */}
            <div className="bg-woodland-cream/80 border border-woodland-cream/50 rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:bg-woodland-cream/95 hover:shadow-lg">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold text-woodland-primary mb-3">Safety & Beauty</h3>
              <p className="text-gray-600 leading-relaxed">
                We are committed to maintaining the beauty and safety of our neighborhood through active participation.
              </p>
            </div>

            {/* Existing third value */}
            <div className="bg-woodland-cream/80 border border-woodland-cream/50 rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:bg-woodland-cream/95 hover:shadow-lg">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-woodland-accent to-woodland-primary rounded-full flex items-center justify-center shadow-lg">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="text-xl font-semibold text-woodland-primary mb-3">Transparent Communication</h3>
              <p className="text-gray-600 leading-relaxed">
                Open dialogue and community engagement are the foundations of our decision-making process.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-br from-woodland-primary to-woodland-secondary text-white rounded-3xl p-8 lg:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed">
            Together, we&apos;re making Woodland Manor a wonderful place to live, work, and play!
          </p>
          <Link 
            href="/" 
            className="inline-flex items-center gap-3 bg-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-white/30 hover:-translate-y-1 hover:shadow-lg border border-white/30"
          >
            <span>←</span>
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
};