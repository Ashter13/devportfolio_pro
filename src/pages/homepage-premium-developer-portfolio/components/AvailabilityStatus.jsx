import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const AvailabilityStatus = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isAvailable, setIsAvailable] = useState(true);
  const [nextAvailability, setNextAvailability] = useState(null);

  // Mock availability data
  const availabilityData = {
    status: "available", // available, busy, partially_available
    currentProjects: 2,
    maxProjects: 4,
    nextOpenSlot: new Date(2025, 1, 15), // February 15, 2025
    responseTime: "Within 24 hours",
    timezone: "EST (UTC-5)",
    workingHours: "9:00 AM - 6:00 PM EST"
  };

  const upcomingSchedule = [
    {
      id: 1,
      date: "2025-01-10",
      type: "consultation",
      title: "Project Discovery Call",
      time: "2:00 PM - 3:00 PM EST",
      status: "available"
    },
    {
      id: 2,
      date: "2025-01-12",
      type: "development",
      title: "Sprint Planning",
      time: "10:00 AM - 12:00 PM EST",
      status: "busy"
    },
    {
      id: 3,
      date: "2025-01-15",
      type: "consultation",
      title: "Technical Review",
      time: "3:00 PM - 4:00 PM EST",
      status: "available"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Simulate availability calculation
    const now = new Date();
    const workStart = new Date(now);
    workStart?.setHours(9, 0, 0, 0);
    const workEnd = new Date(now);
    workEnd?.setHours(18, 0, 0, 0);

    const isWorkingHours = now >= workStart && now <= workEnd;
    const isWeekday = now?.getDay() >= 1 && now?.getDay() <= 5;

    setIsAvailable(isWorkingHours && isWeekday);
    setNextAvailability(availabilityData?.nextOpenSlot);
  }, [currentTime]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'available':
        return 'text-success bg-success/10 border-success/20';
      case 'busy':
        return 'text-error bg-error/10 border-error/20';
      case 'partially_available':
        return 'text-warning bg-warning/10 border-warning/20';
      default:
        return 'text-text-muted bg-muted border-border';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'available':
        return 'CheckCircle';
      case 'busy':
        return 'XCircle';
      case 'partially_available':
        return 'Clock';
      default:
        return 'Circle';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'available':
        return 'Available for New Projects';
      case 'busy':
        return 'Currently Fully Booked';
      case 'partially_available':
        return 'Limited Availability';
      default:
        return 'Status Unknown';
    }
  };

  const formatDate = (date) => {
    return new Intl.DateTimeFormat('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })?.format(new Date(date));
  };

  const handleScheduleConsultation = () => {
    // In a real app, this would open a calendar booking system
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Current Availability
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Real-time project availability and scheduling information
          </p>
        </motion.div>

        {/* Main Availability Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-2xl shadow-brand-lg border border-border p-8 mb-8"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Status Information */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className={`flex items-center space-x-2 px-4 py-2 rounded-full border ${getStatusColor(availabilityData?.status)}`}>
                  <Icon name={getStatusIcon(availabilityData?.status)} size={16} />
                  <span className="font-medium text-sm">
                    {getStatusText(availabilityData?.status)}
                  </span>
                </div>
                <div className="flex items-center space-x-1 text-sm text-text-muted">
                  <Icon name="Clock" size={14} />
                  <span>Updated: {currentTime.toLocaleTimeString()}</span>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-primary mb-4">
                Ready to Start Your Project
              </h3>

              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-text-secondary">Current Projects</span>
                  <span className="font-semibold text-text-primary">
                    {availabilityData?.currentProjects}/{availabilityData?.maxProjects}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-text-secondary">Response Time</span>
                  <span className="font-semibold text-success">{availabilityData?.responseTime}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-text-secondary">Working Hours</span>
                  <span className="font-semibold text-text-primary">{availabilityData?.workingHours}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-text-secondary">Timezone</span>
                  <span className="font-semibold text-text-primary">{availabilityData?.timezone}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  variant="default"
                  iconName="Calendar"
                  iconPosition="left"
                  onClick={handleScheduleConsultation}
                  className="flex-1"
                >
                  Schedule Consultation
                </Button>
                <Button
                  variant="outline"
                  iconName="MessageCircle"
                  iconPosition="left"
                  onClick={handleScheduleConsultation}
                  className="flex-1"
                >
                  Quick Chat
                </Button>
              </div>
            </div>

            {/* Visual Availability Indicator */}
            <div className="relative">
              <div className="w-full aspect-square max-w-sm mx-auto relative">
                {/* Circular Progress */}
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-border"
                  />
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className="text-success"
                    strokeDasharray={`${2 * Math.PI * 45}`}
                    initial={{ strokeDashoffset: 2 * Math.PI * 45 }}
                    whileInView={{ 
                      strokeDashoffset: 2 * Math.PI * 45 * (1 - (availabilityData?.maxProjects - availabilityData?.currentProjects) / availabilityData?.maxProjects)
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, ease: "easeOut" }}
                  />
                </svg>

                {/* Center Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="text-3xl font-bold text-primary mb-1">
                    {availabilityData?.maxProjects - availabilityData?.currentProjects}
                  </div>
                  <div className="text-sm text-text-secondary text-center">
                    Project Slots<br />Available
                  </div>
                </div>

                {/* Floating Status Indicator */}
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -top-2 -right-2 w-6 h-6 bg-success rounded-full flex items-center justify-center shadow-brand-md"
                >
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Upcoming Schedule Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-card rounded-2xl shadow-brand-lg border border-border p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-primary">Upcoming Schedule</h3>
            <Button
              variant="ghost"
              size="sm"
              iconName="Calendar"
              iconPosition="left"
              onClick={handleScheduleConsultation}
            >
              View Full Calendar
            </Button>
          </div>

          <div className="space-y-4">
            {upcomingSchedule?.map((item) => (
              <div
                key={item?.id}
                className="flex items-center justify-between p-4 bg-muted/30 rounded-lg border border-border"
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-3 h-3 rounded-full ${
                    item?.status === 'available' ? 'bg-success' : 'bg-error'
                  }`}></div>
                  <div>
                    <div className="font-semibold text-text-primary">{item?.title}</div>
                    <div className="text-sm text-text-secondary">
                      {formatDate(item?.date)} • {item?.time}
                    </div>
                  </div>
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                  item?.status === 'available' ?'bg-success/10 text-success' :'bg-error/10 text-error'
                }`}>
                  {item?.status === 'available' ? 'Available' : 'Busy'}
                </div>
              </div>
            ))}
          </div>

          {nextAvailability && (
            <div className="mt-6 pt-6 border-t border-border text-center">
              <p className="text-text-secondary mb-2">Next available project slot:</p>
              <p className="text-lg font-semibold text-primary">
                {formatDate(nextAvailability)}
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default AvailabilityStatus;