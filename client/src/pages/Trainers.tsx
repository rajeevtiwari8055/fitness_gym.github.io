import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Star, Award, Users } from 'lucide-react';

/**
 * Trainers Page
 * Features: Trainer profiles, specializations, ratings, booking
 * Design: Card-based layout with hover effects
 */
export default function Trainers() {
  const trainers = [
    {
      id: 1,
      name: 'Alex Turner',
      specialty: 'Strength & Bodybuilding',
      experience: '12 years',
      certifications: ['NASM', 'ISSA', 'ACE'],
      rating: 4.9,
      reviews: 156,
      clients: 45,
      bio: 'Expert in building muscle and strength training. Specializes in periodized training programs.',
      avatar: '👨‍💼',
      availability: 'Mon, Wed, Fri',
    },
    {
      id: 2,
      name: 'Emma Wilson',
      specialty: 'HIIT & Cardio',
      experience: '8 years',
      certifications: ['NASM', 'ISSA'],
      rating: 4.8,
      reviews: 142,
      clients: 38,
      bio: 'High-energy trainer focused on cardio fitness and metabolic conditioning.',
      avatar: '👩‍🏫',
      availability: 'Tue, Thu, Sat',
    },
    {
      id: 3,
      name: 'Marcus Johnson',
      specialty: 'Functional Training',
      experience: '10 years',
      certifications: ['NASM', 'CrossFit Level 2'],
      rating: 4.7,
      reviews: 128,
      clients: 42,
      bio: 'Specializes in functional movements and athletic performance training.',
      avatar: '👨‍⚕️',
      availability: 'Mon, Wed, Thu, Sat',
    },
    {
      id: 4,
      name: 'Lisa Chen',
      specialty: 'Yoga & Flexibility',
      experience: '9 years',
      certifications: ['RYT-200', 'NASM'],
      rating: 4.9,
      reviews: 167,
      clients: 35,
      bio: 'Certified yoga instructor helping clients achieve flexibility and mindfulness.',
      avatar: '🧘‍♀️',
      availability: 'Daily',
    },
    {
      id: 5,
      name: 'James Rodriguez',
      specialty: 'Weight Loss & Nutrition',
      experience: '11 years',
      certifications: ['NASM', 'ISSN', 'ISSA'],
      rating: 4.8,
      reviews: 151,
      clients: 50,
      bio: 'Combines training with nutrition coaching for comprehensive transformation.',
      avatar: '👨‍⚖️',
      availability: 'Mon, Tue, Wed, Thu',
    },
    {
      id: 6,
      name: 'Sarah Thompson',
      specialty: 'Women\'s Fitness',
      experience: '7 years',
      certifications: ['NASM', 'ACE'],
      rating: 4.9,
      reviews: 139,
      clients: 40,
      bio: 'Dedicated to empowering women through fitness and building confidence.',
      avatar: '👩‍💼',
      availability: 'Tue, Wed, Fri, Sat',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-primary/10 to-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center animate-fade-in-scale">
            <h1 className="section-title mb-4">Expert Trainers</h1>
            <p className="section-subtitle max-w-2xl mx-auto">
              Work with certified professionals dedicated to your success
            </p>
          </div>
        </div>
      </section>

      {/* Trainers Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainers.map((trainer) => (
              <div
                key={trainer.id}
                className="bg-white rounded-xl overflow-hidden border border-border hover:border-primary transition-all hover:shadow-xl group"
              >
                {/* Avatar Section */}
                <div className="h-48 bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-7xl group-hover:scale-110 transition-transform">
                  {trainer.avatar}
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-1">{trainer.name}</h3>
                  <p className="text-primary font-semibold text-sm mb-4">{trainer.specialty}</p>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={i < Math.floor(trainer.rating) ? 'fill-primary text-primary' : 'text-muted-foreground'}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-foreground">{trainer.rating}</span>
                    <span className="text-xs text-muted-foreground">({trainer.reviews} reviews)</span>
                  </div>

                  {/* Bio */}
                  <p className="text-muted-foreground text-sm mb-4">{trainer.bio}</p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 py-4 border-y border-border mb-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-primary">{trainer.experience}</p>
                      <p className="text-xs text-muted-foreground">Experience</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-primary">{trainer.clients}</p>
                      <p className="text-xs text-muted-foreground">Clients</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-primary">{trainer.certifications.length}</p>
                      <p className="text-xs text-muted-foreground">Certs</p>
                    </div>
                  </div>

                  {/* Certifications */}
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-muted-foreground mb-2">CERTIFICATIONS</p>
                    <div className="flex flex-wrap gap-2">
                      {trainer.certifications.map((cert, idx) => (
                        <span key={idx} className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Availability */}
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-muted-foreground mb-2">AVAILABILITY</p>
                    <p className="text-sm text-foreground">{trainer.availability}</p>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex gap-2">
                    <button className="flex-1 btn-primary text-sm py-2">Book Session</button>
                    <button className="flex-1 btn-outline text-sm py-2">View Profile</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Personal Training */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-4">Why Personal Training?</h2>
          <p className="section-subtitle text-center max-w-2xl mx-auto mb-12">
            Achieve faster results with expert guidance
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: 'Personalized Programs',
                description: 'Custom workout plans tailored to your goals and fitness level',
              },
              {
                icon: Users,
                title: 'Expert Guidance',
                description: 'Learn proper form and technique from certified professionals',
              },
              {
                icon: Star,
                title: 'Accountability',
                description: 'Stay motivated with regular check-ins and progress tracking',
              },
            ].map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div key={idx} className="bg-white p-8 rounded-xl border border-border hover:border-primary transition-all">
                  <div className="p-4 bg-primary/10 rounded-lg w-fit mb-4">
                    <Icon className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Training Packages */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-4">Training Packages</h2>
          <p className="section-subtitle text-center max-w-2xl mx-auto mb-12">
            Flexible options to fit your schedule and budget
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { sessions: 4, price: 199, perSession: 49.75, popular: false },
              { sessions: 8, price: 359, perSession: 44.88, popular: true },
              { sessions: 12, price: 499, perSession: 41.58, popular: false },
              { sessions: 24, price: 899, perSession: 37.46, popular: false },
            ].map((pkg, idx) => (
              <div
                key={idx}
                className={`rounded-xl p-8 text-center transition-all ${
                  pkg.popular
                    ? 'bg-gradient-to-br from-primary to-secondary text-white shadow-xl scale-105'
                    : 'bg-white border border-border hover:border-primary'
                }`}
              >
                {pkg.popular && (
                  <div className="mb-4">
                    <span className="bg-white text-primary px-3 py-1 rounded-full text-xs font-bold">
                      BEST VALUE
                    </span>
                  </div>
                )}
                <div className="mb-4">
                  <p className={`text-4xl font-bold ${pkg.popular ? 'text-white' : 'text-primary'}`}>
                    {pkg.sessions}
                  </p>
                  <p className={`text-sm ${pkg.popular ? 'text-white/80' : 'text-muted-foreground'}`}>
                    Sessions
                  </p>
                </div>
                <div className="mb-6">
                  <p className={`text-5xl font-bold ${pkg.popular ? 'text-white' : 'text-foreground'}`}>
                    ${pkg.price}
                  </p>
                  <p className={`text-sm ${pkg.popular ? 'text-white/80' : 'text-muted-foreground'}`}>
                    ${pkg.perSession}/session
                  </p>
                </div>
                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-all ${
                    pkg.popular
                      ? 'bg-white text-primary hover:shadow-lg'
                      : 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform?</h2>
          <p className="text-xl mb-8 opacity-90">
            Book a free consultation with one of our expert trainers today
          </p>
          <button className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-bold hover:shadow-xl hover:scale-105 transition-all">
            Schedule Free Consultation
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
