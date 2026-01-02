import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Clock, Users, Zap } from 'lucide-react';

/**
 * Classes Page
 * Features: Class types, schedule, instructor info, booking
 * Design: Grid layout with filter functionality
 */
export default function Classes() {
  const [selectedDay, setSelectedDay] = useState('monday');
  const [selectedType, setSelectedType] = useState('all');

  const classTypes = [
    { id: 'all', name: 'All Classes', icon: '🎯' },
    { id: 'hiit', name: 'HIIT', icon: '⚡' },
    { id: 'yoga', name: 'Yoga', icon: '🧘' },
    { id: 'strength', name: 'Strength', icon: '💪' },
    { id: 'cardio', name: 'Cardio', icon: '🏃' },
    { id: 'pilates', name: 'Pilates', icon: '🤸' },
  ];

  const schedule = {
    monday: [
      { time: '6:00 AM', class: 'Morning Cardio', instructor: 'Sarah', type: 'cardio', duration: 45, capacity: 20, enrolled: 18 },
      { time: '7:00 AM', class: 'Strength Training', instructor: 'Mike', type: 'strength', duration: 60, capacity: 25, enrolled: 22 },
      { time: '12:00 PM', class: 'Lunch HIIT', instructor: 'Emma', type: 'hiit', duration: 30, capacity: 30, enrolled: 28 },
      { time: '5:30 PM', class: 'Evening Yoga', instructor: 'Lisa', type: 'yoga', duration: 60, capacity: 20, enrolled: 15 },
      { time: '6:45 PM', class: 'Pilates Core', instructor: 'Jessica', type: 'pilates', duration: 45, capacity: 20, enrolled: 19 },
    ],
    tuesday: [
      { time: '6:00 AM', class: 'HIIT Bootcamp', instructor: 'Alex', type: 'hiit', duration: 45, capacity: 30, enrolled: 29 },
      { time: '7:15 AM', class: 'Yoga Flow', instructor: 'Lisa', type: 'yoga', duration: 60, capacity: 20, enrolled: 14 },
      { time: '12:00 PM', class: 'Strength Training', instructor: 'Mike', type: 'strength', duration: 60, capacity: 25, enrolled: 23 },
      { time: '5:30 PM', class: 'Cardio Blast', instructor: 'Sarah', type: 'cardio', duration: 45, capacity: 25, enrolled: 20 },
    ],
    wednesday: [
      { time: '6:00 AM', class: 'Morning Strength', instructor: 'Mike', type: 'strength', duration: 60, capacity: 25, enrolled: 24 },
      { time: '7:30 AM', class: 'Pilates', instructor: 'Jessica', type: 'pilates', duration: 45, capacity: 20, enrolled: 18 },
      { time: '12:00 PM', class: 'Yoga Basics', instructor: 'Lisa', type: 'yoga', duration: 60, capacity: 20, enrolled: 16 },
      { time: '6:00 PM', class: 'HIIT Challenge', instructor: 'Emma', type: 'hiit', duration: 45, capacity: 30, enrolled: 27 },
    ],
    thursday: [
      { time: '6:00 AM', class: 'Cardio Mix', instructor: 'Sarah', type: 'cardio', duration: 45, capacity: 25, enrolled: 21 },
      { time: '7:15 AM', class: 'Strength & Power', instructor: 'Mike', type: 'strength', duration: 60, capacity: 25, enrolled: 25 },
      { time: '5:30 PM', class: 'Evening HIIT', instructor: 'Alex', type: 'hiit', duration: 45, capacity: 30, enrolled: 26 },
      { time: '6:45 PM', class: 'Restorative Yoga', instructor: 'Lisa', type: 'yoga', duration: 60, capacity: 20, enrolled: 12 },
    ],
    friday: [
      { time: '6:00 AM', class: 'Full Body Strength', instructor: 'Mike', type: 'strength', duration: 60, capacity: 25, enrolled: 23 },
      { time: '7:30 AM', class: 'Pilates Power', instructor: 'Jessica', type: 'pilates', duration: 45, capacity: 20, enrolled: 17 },
      { time: '12:00 PM', class: 'Lunch Cardio', instructor: 'Sarah', type: 'cardio', duration: 45, capacity: 25, enrolled: 19 },
      { time: '5:30 PM', class: 'HIIT Friday', instructor: 'Emma', type: 'hiit', duration: 45, capacity: 30, enrolled: 30 },
    ],
  };

  const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
  const dayLabels: Record<string, string> = {
    monday: 'Monday',
    tuesday: 'Tuesday',
    wednesday: 'Wednesday',
    thursday: 'Thursday',
    friday: 'Friday',
  };

  const currentSchedule = schedule[selectedDay as keyof typeof schedule] || [];
  const filteredClasses = selectedType === 'all' 
    ? currentSchedule 
    : currentSchedule.filter(c => c.type === selectedType);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-primary/10 to-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center animate-fade-in-scale">
            <h1 className="section-title mb-4">Group Classes</h1>
            <p className="section-subtitle max-w-2xl mx-auto">
              Find your perfect class and join our fitness community
            </p>
          </div>
        </div>
      </section>

      {/* Class Types Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: '⚡',
                name: 'HIIT',
                description: 'High-intensity interval training for maximum calorie burn',
                duration: '30-45 min',
              },
              {
                icon: '🧘',
                name: 'Yoga',
                description: 'Flexibility, balance, and mindfulness training',
                duration: '45-60 min',
              },
              {
                icon: '💪',
                name: 'Strength',
                description: 'Build muscle and increase your strength',
                duration: '60 min',
              },
              {
                icon: '🏃',
                name: 'Cardio',
                description: 'Improve your cardiovascular fitness',
                duration: '45 min',
              },
              {
                icon: '🤸',
                name: 'Pilates',
                description: 'Core strengthening and body conditioning',
                duration: '45 min',
              },
              {
                icon: '🎯',
                name: 'Mixed',
                description: 'Combination of different training styles',
                duration: 'Varies',
              },
            ].map((classType, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-xl border border-border hover:border-primary hover:shadow-lg transition-all group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{classType.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-2">{classType.name}</h3>
                <p className="text-muted-foreground mb-4">{classType.description}</p>
                <p className="text-sm text-primary font-semibold">Duration: {classType.duration}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-4">Weekly Schedule</h2>
          <p className="section-subtitle text-center max-w-2xl mx-auto mb-12">
            Choose your day and find the perfect class
          </p>

          {/* Day Selection */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {days.map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  selectedDay === day
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-white text-foreground border border-border hover:border-primary'
                }`}
              >
                {dayLabels[day]}
              </button>
            ))}
          </div>

          {/* Class Type Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {classTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setSelectedType(type.id)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 ${
                  selectedType === type.id
                    ? 'bg-secondary text-white'
                    : 'bg-white text-foreground border border-border hover:border-secondary'
                }`}
              >
                <span>{type.icon}</span>
                {type.name}
              </button>
            ))}
          </div>

          {/* Classes List */}
          <div className="space-y-4 max-w-4xl mx-auto">
            {filteredClasses.length > 0 ? (
              filteredClasses.map((cls, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-lg border border-border hover:border-primary hover:shadow-lg transition-all group"
                >
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                    <div>
                      <p className="text-sm text-muted-foreground">Time</p>
                      <p className="text-2xl font-bold text-primary">{cls.time}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Class</p>
                      <p className="text-lg font-bold text-foreground">{cls.class}</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Clock size={16} className="text-primary" />
                        <span>{cls.duration} min</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Users size={16} className="text-primary" />
                        <span>{cls.enrolled}/{cls.capacity} enrolled</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="text-sm text-muted-foreground">Instructor</p>
                      <p className="font-semibold text-foreground">{cls.instructor}</p>
                      <button className="btn-primary text-sm py-2">Book Now</button>
                    </div>
                  </div>

                  {/* Capacity bar */}
                  <div className="mt-4 pt-4 border-t border-border">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs text-muted-foreground">Capacity</span>
                      <span className="text-xs font-semibold text-primary">{Math.round((cls.enrolled / cls.capacity) * 100)}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all"
                        style={{ width: `${(cls.enrolled / cls.capacity) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">No classes found for this filter</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Instructor Spotlight */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-4">Meet Our Instructors</h2>
          <p className="section-subtitle text-center max-w-2xl mx-auto mb-12">
            Expert instructors passionate about your success
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Sarah', specialty: 'Cardio Expert', classes: 12, avatar: '👩‍🏫' },
              { name: 'Mike', specialty: 'Strength Coach', classes: 15, avatar: '👨‍🏫' },
              { name: 'Emma', specialty: 'HIIT Specialist', classes: 10, avatar: '👩‍💼' },
              { name: 'Lisa', specialty: 'Yoga Master', classes: 14, avatar: '🧘‍♀️' },
            ].map((instructor, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg overflow-hidden border border-border hover:border-primary transition-all hover:shadow-lg"
              >
                <div className="h-40 bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-5xl">
                  {instructor.avatar}
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg font-bold text-foreground">{instructor.name}</h3>
                  <p className="text-primary text-sm font-semibold mb-2">{instructor.specialty}</p>
                  <p className="text-muted-foreground text-sm">{instructor.classes} classes/month</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
