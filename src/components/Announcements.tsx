'use client';
import { useState } from 'react';
import { ChevronDown, ChevronUp, Megaphone, Calendar, Clock } from 'lucide-react';
import Link from 'next/link';

const Announcements = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const upcomingEvents = [
    { date: 'October 13, 2025', type: 'Monthly Board Meeting', time: '6:30 PM' },
    { date: 'November 10, 2025', type: 'Monthly Board Meeting', time: '6:30 PM' },
    { date: 'December 8, 2025', type: 'Monthly Board Meeting', time: '6:30 PM' },
    { date: 'January 12, 2026', type: 'Monthly Board Meeting', time: '6:30 PM' },
    { date: 'February 9, 2026', type: 'Monthly Board Meeting', time: '6:30 PM' },
    { date: 'March 9, 2026', type: 'Monthly Board Meeting', time: '6:30 PM' },
    { date: 'March 28, 2026', type: 'Annual Board Meeting', time: '10:00 AM', special: true },
    { date: 'April 13, 2026', type: 'Monthly Board Meeting', time: '6:30 PM' },
    { date: 'May 11, 2026', type: 'Monthly Board Meeting', time: '6:30 PM' }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-woodland-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-woodland-cream rounded-full mb-4">
            <Megaphone className="w-8 h-8 text-woodland-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-woodland-primary mb-4">
            <span style={{ fontFamily: 'Bebas Neue, cursive' }}>
              Community Updates
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Stay informed with the latest community news and upcoming events
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Announcements Column */}
          <div className="bg-gray-50 rounded-xl p-6 sm:p-8 border border-gray-200 shadow-lg">
            <div className="flex items-center space-x-2 mb-6">
              <Megaphone className="w-5 h-5 text-woodland-primary" />
              <h3 className="text-2xl font-bold text-woodland-light">Announcements</h3>
            </div>

            {/* Header */}
            <div className="border-b border-gray-300 pb-4 mb-6">
              <h4 className="text-xl font-bold text-woodland-primary mb-1">FROM OUR PRESIDENT</h4>
              <p className="text-gray-600 text-sm">June 4, 2025</p>
            </div>

            {/* Content */}
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                <span className="font-medium">Dear Woodland community,</span>
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                I hope this finds everyone well. As I&apos;m sure you are well aware by now, 
                we are under a pretty much new regime.
              </p>

              <p className="text-gray-700 leading-relaxed">
                We have formed a committee to deal with violations within our community. 
                At this time, I would like to thank those of you who are in compliance, 
                and those of you who have been in contact to work with us to remedy your individual situations.
              </p>

              {/* Expandable Content */}
              <div className={`transition-all duration-500 ease-in-out ${
                isExpanded ? 'max-h-none opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
              }`}>
                <div className="space-y-4 pt-2">
                  <p className="text-gray-700 leading-relaxed">
                    You can contact your president, Lisa, at{' '}
                    <a href="tel:802-324-8027" className="text-blue-600 hover:text-blue-800 font-medium">
                      802-324-8027
                    </a>{' '}
                    or{' '}
                    <a href="mailto:lmurray39@gmail.com" className="text-blue-600 hover:text-blue-800 font-medium">
                      lmurray39@gmail.com
                    </a>{' '}
                    to talk about violations or get a set of our governing documents.
                  </p>

                  <p className="text-gray-700 leading-relaxed">
                    We have also set up a volunteer list to help people in need, that just cannot do it 
                    themselves or have no one here to help. You can contact Sandi Passante at{' '}
                    <a href="tel:610-563-4998" className="text-blue-600 hover:text-blue-800 font-medium">
                      610-563-4998
                    </a>. You can also contact Sandi to have your name added to the volunteer committee.
                  </p>

                  {/* Reminders Section */}
                  <div className="mt-8 p-6 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg">
                    <h5 className="text-lg font-bold text-yellow-800 mb-4">REMINDERS</h5>
                    
                    <div className="space-y-3">
                      <div className="flex items-start space-x-2">
                        <span className="text-yellow-600 mt-1">•</span>
                        <p className="text-gray-700 leading-relaxed">
                          <strong>Speed limit:</strong> The speed limit in our community is 20 mph. 
                          It&apos;s summertime and children will be out playing, so please keep an eye out for them.
                        </p>
                      </div>
                      
                      <div className="flex items-start space-x-2">
                        <span className="text-yellow-600 mt-1">•</span>
                        <p className="text-gray-700 leading-relaxed">
                          <strong>Dog policies:</strong> Your dogs must be leashed at all times when not 
                          in your fully secured fenced in yard. You must also pick up your dog&apos;s waste.
                        </p>
                      </div>
                      
                      <div className="flex items-start space-x-2">
                        <span className="text-yellow-600 mt-1">•</span>
                        <p className="text-gray-700 leading-relaxed">
                          <strong>No fireworks allowed!</strong> Our homes are very close together, if one 
                          catches on fire the whole community could go up in flames. You would be held 
                          responsible per Florida law. We have veterans that live in our community - 
                          it&apos;s triggering for them!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Read More Button */}
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center space-x-2 text-woodland-primary hover:text-woodland-dark font-medium transition-colors duration-200 mt-6"
              >
                <span>{isExpanded ? 'Read Less' : 'Read More'}</span>
                {isExpanded ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* Upcoming Events Column */}
          <div className="bg-woodland-light rounded-xl p-6 sm:p-8 border border-woodland-light shadow-lg">
            <div className="flex items-center space-x-2 mb-6">
              <Calendar className="w-5 h-5 text-woodland-primary" />
              <h3 className="text-2xl font-bold text-woodland-primary">Upcoming Events</h3>
            </div>

            {/* Meeting Info Header */}
            <div className="bg-white p-4 rounded-lg border border-blue-200 mb-6">
              <h4 className="font-bold text-woodland-dark mb-2">Woodland Mobile Home Association Inc.</h4>
              <p className="text-gray-700 text-sm mb-1">
                <strong>Monthly Meetings:</strong> Second Monday of the month at 6:30 PM
              </p>
              <p className="text-gray-700 text-sm mb-2">
                <strong>Location:</strong> The Clubhouse<br />
                4119 Woodland Circle<br />
                DeLand, FL 32724
              </p>
            </div>

            <div className="space-y-4 mb-8">
              {upcomingEvents.map((event, index) => (
                <div 
                  key={index} 
                  className={`p-4 rounded-lg border-l-4 ${
                    event.special 
                      ? 'bg-green-50 border-green-400' 
                      : 'bg-white border-blue-400'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 mb-1">{event.type}</h4>
                      <p className="text-gray-600 text-sm mb-2">{event.date}</p>
                      <div className="flex items-center space-x-1 text-gray-500 text-sm">
                        <Clock className="w-3 h-3" />
                        <span>{event.time}</span>
                      </div>
                      {event.special && (
                        <p className="text-green-700 text-sm mt-2 font-medium">
                          Annual meeting - All community members encouraged to attend
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              <div className="p-4 bg-gray-100 rounded-lg text-center">
                <p className="text-gray-600 text-sm italic">
                  Monthly meetings: Second Monday of each month at 6:30 PM
                  <br />
                  <span className="text-gray-500">No meetings June - September</span>
                </p>
              </div>
            </div>

            {/* View Full Calendar Button */}
            <Link 
              href="/calendar"
              className="block w-full bg-woodland-forest hover:bg-woodland-primary text-white font-semibold py-3 px-6 rounded-lg text-center transition-colors duration-200"
            >
              View Full Calendar
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Announcements;