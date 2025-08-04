'use client';
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Clock, MapPin } from 'lucide-react';

interface Event {
  date: string;
  type: string;
  time: string;
  special?: boolean;
}

const Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  
  const events: Event[] = [
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

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const firstDayWeekday = firstDay.getDay();
    const daysInMonth = lastDay.getDate();

    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayWeekday; i++) {
      days.push(null);
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }
    
    return days;
  };

  const getEventsForDate = (day: number) => {
    if (!day) return [];
    
    const dateStr = `${monthNames[currentDate.getMonth()]} ${day}, ${currentDate.getFullYear()}`;
    return events.filter(event => event.date === dateStr);
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      if (direction === 'prev') {
        newDate.setMonth(prev.getMonth() - 1);
      } else {
        newDate.setMonth(prev.getMonth() + 1);
      }
      return newDate;
    });
  };

  const goToToday = () => {
    setCurrentDate(new Date());
  };

  const isToday = (day: number) => {
    if (!day) return false;
    const today = new Date();
    return (
      day === today.getDate() &&
      currentDate.getMonth() === today.getMonth() &&
      currentDate.getFullYear() === today.getFullYear()
    );
  };

  const days = getDaysInMonth(currentDate);

  return (
    <div className="min-h-screen bg-woodland-cream p-4 sm:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-woodland-primary mb-4 font-bebas tracking-wide">
            Community Calendar
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay up to date with all Woodland Manor events and meetings
          </p>
        </div>

        {/* Calendar Controls */}
        <div className="woodland-glass-card p-6 mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => navigateMonth('prev')}
                className="bg-woodland-primary hover:bg-woodland-secondary text-white p-3 rounded-xl transition-colors duration-200"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <h2 className="text-2xl font-bold text-woodland-primary min-w-[200px] text-center">
                {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
              </h2>
              
              <button 
                onClick={() => navigateMonth('next')}
                className="bg-woodland-primary hover:bg-woodland-secondary text-white p-3 rounded-xl transition-colors duration-200"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            
            <button 
              onClick={goToToday}
              className="bg-woodland-accent hover:bg-woodland-primary text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-200"
            >
              Today
            </button>
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="woodland-glass-card p-4 sm:p-8 mb-8">
          {/* Day Headers */}
          <div className="grid grid-cols-7 gap-1 mb-4">
            {dayNames.map(day => (
              <div key={day} className="bg-woodland-primary text-white p-3 text-center font-semibold text-sm uppercase tracking-wide first:rounded-l-lg last:rounded-r-lg">
                {day}
              </div>
            ))}
          </div>
          
          {/* Days Grid */}
          <div className="grid grid-cols-7 gap-1 bg-stone-200 rounded-lg overflow-hidden">
            {days.map((day, index) => {
              const dayEvents = day ? getEventsForDate(day) : [];
              const isTodayCell = day && isToday(day);
              
              return (
                <div 
                  key={index} 
                  className={`
                    min-h-[100px] sm:min-h-[120px] p-2 sm:p-3 transition-all duration-200 border-2 border-transparent
                    ${!day ? 'bg-stone-100 opacity-50' : 'bg-woodland-cream hover:bg-stone-100 hover:border-woodland-primary hover:scale-[1.02] hover:z-10 hover:shadow-lg'}
                    ${isTodayCell ? 'bg-woodland-light border-woodland-primary font-bold' : ''}
                  `}
                >
                  {day && (
                    <>
                      <div className={`text-lg font-semibold mb-2 ${isTodayCell ? 'text-woodland-primary' : 'text-gray-800'}`}>
                        {day}
                      </div>
                      {dayEvents.map((event, eventIndex) => (
                        <div 
                          key={eventIndex} 
                          className={`
                            text-xs font-medium p-1 rounded mb-1 text-center cursor-pointer transition-all duration-200
                            ${event.special 
                              ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white animate-pulse hover:from-orange-600 hover:to-orange-700' 
                              : 'bg-woodland-primary text-white hover:bg-woodland-secondary'
                            }
                          `}
                          title={`${event.type} at ${event.time}`}
                        >
                          {event.type}
                        </div>
                      ))}
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Events List */}
        <div className="woodland-glass-card p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-woodland-primary mb-6 flex items-center gap-3">
            <CalendarIcon className="w-6 h-6" />
            Upcoming Events
          </h2>
          
          <div className="space-y-4">
            {events.map((event, index) => (
              <div 
                key={index} 
                className={`
                  bg-white rounded-xl p-6 border-2 transition-all duration-200 hover:shadow-lg hover:-translate-y-1
                  ${event.special 
                    ? 'border-orange-400 bg-gradient-to-r from-orange-50 to-yellow-50' 
                    : 'border-woodland-primary/20 hover:border-woodland-primary'
                  }
                `}
              >
                <div className={`text-lg font-bold mb-2 ${event.special ? 'text-orange-600' : 'text-woodland-primary'}`}>
                  {event.date}
                </div>
                <div className="text-gray-800 font-semibold mb-2">
                  {event.type}
                </div>
                <div className="flex items-center gap-4 text-gray-600 text-sm">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {event.time}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    Woodland Manor Community Center
                  </div>
                </div>
                {event.special && (
                  <div className="mt-3 text-orange-700 text-sm font-medium">
                    Annual meeting - All community members encouraged to attend
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
