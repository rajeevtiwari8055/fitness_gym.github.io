import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Dumbbell, Zap, Droplet, Wifi } from 'lucide-react';

/**
 * Facilities Page
 * Features: Equipment showcase, amenities, virtual tour
 * Design: Grid layout with image galleries and feature cards
 */
export default function Facilities() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/images/hero-facilities.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-white text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-in-up">
            State-of-the-Art Facilities
          </h1>
          <p className="text-2xl mb-8 max-w-2xl mx-auto opacity-90">
            Everything you need for your fitness journey
          </p>
        </div>
      </section>

      {/* Main Amenities */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Dumbbell,
                title: 'Weight Training',
                description: 'Complete range of dumbbells, barbells, and strength machines',
                items: ['Free weights', 'Squat racks', 'Benches', 'Cable machines'],
              },
              {
                icon: Zap,
                title: 'Cardio Zone',
                description: 'Latest cardio equipment with entertainment systems',
                items: ['Treadmills', 'Ellipticals', 'Bikes', 'Rowing machines'],
              },
              {
                icon: Droplet,
                title: 'Recovery Area',
                description: 'Complete facilities for post-workout recovery',
                items: ['Sauna', 'Steam room', 'Ice bath', 'Stretching area'],
              },
              {
                icon: Wifi,
                title: 'Tech & Amenities',
                description: 'Modern technology and comfort features',
                items: ['Free WiFi', 'Lockers', 'Showers', 'Towel service'],
              },
            ].map((amenity, idx) => {
              const Icon = amenity.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-8 rounded-xl border border-border hover:border-primary transition-all hover:shadow-lg"
                >
                  <div className="p-4 bg-primary/10 rounded-lg w-fit mb-4">
                    <Icon className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">{amenity.title}</h3>
                  <p className="text-muted-foreground mb-4">{amenity.description}</p>
                  <ul className="space-y-2">
                    {amenity.items.map((item, i) => (
                      <li key={i} className="text-sm text-foreground flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Equipment Gallery */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Equipment Showcase</h2>
          <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Explore our premium equipment and facilities
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { emoji: '🏋️', name: 'Free Weights', count: '500+ lbs' },
              { emoji: '🚴', name: 'Stationary Bikes', count: '20 units' },
              { emoji: '🏃', name: 'Treadmills', count: '15 units' },
              { emoji: '🤸', name: 'Functional Rigs', count: '8 stations' },
              { emoji: '💪', name: 'Cable Machines', count: '12 stations' },
              { emoji: '🧘', name: 'Yoga Studio', count: '1,500 sq ft' },
            ].map((equipment, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-xl border border-border hover:border-primary hover:shadow-lg transition-all text-center group"
              >
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">{equipment.emoji}</div>
                <h3 className="text-xl font-bold text-foreground mb-2">{equipment.name}</h3>
                <p className="text-primary font-semibold">{equipment.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Details */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Premium Amenities</h2>
          <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Everything to enhance your fitness experience
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {[
              {
                title: 'Locker Rooms',
                description: 'Spacious, clean locker rooms with secure storage, premium toiletries, and hair dryers',
                features: ['24/7 security', 'Climate controlled', 'Premium amenities', 'Family changing rooms'],
              },
              {
                title: 'Nutrition Bar',
                description: 'Fresh smoothies, protein shakes, and healthy snacks prepared by our nutritionists',
                features: ['Organic ingredients', 'Custom blends', 'Meal prep service', 'Protein options'],
              },
              {
                title: 'Relaxation Zone',
                description: 'Sauna, steam room, and ice bath for optimal recovery and muscle relaxation',
                features: ['Infrared sauna', 'Steam room', 'Ice bath', 'Massage chairs'],
              },
              {
                title: 'Group Fitness Studio',
                description: 'State-of-the-art studio with surround sound, mirrors, and climate control',
                features: ['Sound system', 'Full mirrors', 'AC/heating', 'Flexible layout'],
              },
            ].map((amenity, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl border border-border hover:border-primary transition-all">
                <h3 className="text-2xl font-bold text-foreground mb-3">{amenity.title}</h3>
                <p className="text-muted-foreground mb-6">{amenity.description}</p>
                <ul className="space-y-2">
                  {amenity.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operating Hours */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Hours & Access</h2>
          <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            We're open when you need us
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-6">Regular Hours</h3>
              <div className="space-y-3">
                {[
                  { day: 'Monday - Friday', hours: '5:00 AM - 11:00 PM' },
                  { day: 'Saturday', hours: '6:00 AM - 10:00 PM' },
                  { day: 'Sunday', hours: '7:00 AM - 9:00 PM' },
                  { day: 'Holidays', hours: '8:00 AM - 6:00 PM' },
                ].map((schedule, idx) => (
                  <div key={idx} className="flex justify-between items-center py-2 border-b border-border last:border-b-0">
                    <span className="font-semibold text-foreground">{schedule.day}</span>
                    <span className="text-primary font-bold">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-6">Access Options</h3>
              <div className="space-y-3">
                {[
                  { option: 'Key Card Access', desc: '24/7 entry with membership' },
                  { option: 'Mobile App', desc: 'Check-in and class booking' },
                  { option: 'Guest Passes', desc: 'Bring a friend anytime' },
                  { option: 'Family Accounts', desc: 'Manage multiple memberships' },
                ].map((access, idx) => (
                  <div key={idx} className="py-2 border-b border-border last:border-b-0">
                    <p className="font-semibold text-foreground">{access.option}</p>
                    <p className="text-sm text-muted-foreground">{access.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Experience Our Facilities</h2>
          <p className="text-xl mb-8 opacity-90">
            Schedule a tour and see our premium gym firsthand
          </p>
          <button className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-bold hover:shadow-xl hover:scale-105 transition-all">
            Schedule a Tour
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
