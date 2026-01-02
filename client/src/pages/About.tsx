import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { CheckCircle, Heart, Zap } from 'lucide-react';

/**
 * About Page
 * Features: Company story, mission/vision, team profiles
 * Design: Asymmetric layout with image and text blocks
 */
export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-primary/10 to-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center animate-fade-in-scale">
            <h1 className="section-title mb-4">About FitForce</h1>
            <p className="section-subtitle max-w-2xl mx-auto">
              Discover the story behind your fitness transformation
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <img
                src="/images/hero-trainers.jpg"
                alt="FitForce gym story"
                className="rounded-2xl shadow-xl hover:shadow-2xl transition-shadow"
              />
            </div>
            <div className="animate-slide-in-right space-y-6">
              <div>
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Story</span>
                <h2 className="text-4xl font-bold mt-2 mb-4 text-foreground">
                  From Vision to Reality
                </h2>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                FitForce was founded in 2014 with a simple mission: to make premium fitness accessible to everyone. What started as a small gym with 50 members has grown into a thriving fitness community with over 5,000 active members.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe that fitness is not just about physical transformation—it's about building confidence, strength, and a supportive community. Every piece of equipment, every class, and every trainer on our team is dedicated to helping you achieve your goals.
              </p>

              <div className="space-y-3 pt-4">
                {[
                  'State-of-the-art facilities',
                  'Certified professional trainers',
                  'Personalized fitness programs',
                  'Supportive community atmosphere',
                ].map((point, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle className="text-primary flex-shrink-0" size={24} />
                    <span className="text-foreground font-medium">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-r from-foreground to-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: 'Our Mission',
                description: 'To empower individuals to achieve their fitness goals through expert guidance, cutting-edge facilities, and a supportive community.',
              },
              {
                icon: Zap,
                title: 'Our Vision',
                description: 'To be the most trusted and innovative fitness destination, where transformation is not just physical but also mental and emotional.',
              },
              {
                icon: CheckCircle,
                title: 'Our Values',
                description: 'Excellence, integrity, inclusivity, and continuous improvement in everything we do for our members.',
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="space-y-4 hover:scale-105 transition-transform">
                  <div className="p-4 bg-primary/20 rounded-lg w-fit">
                    <Icon className="text-primary" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Meet Our Team</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Expert professionals dedicated to your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: 'Alex Turner',
                role: 'Founder & CEO',
                specialty: 'Strength Training',
                avatar: '👨‍💼',
              },
              {
                name: 'Emma Wilson',
                role: 'Head Trainer',
                specialty: 'HIIT & Cardio',
                avatar: '👩‍🏫',
              },
              {
                name: 'Marcus Johnson',
                role: 'Nutrition Coach',
                specialty: 'Meal Planning',
                avatar: '👨‍⚕️',
              },
              {
                name: 'Lisa Chen',
                role: 'Yoga Instructor',
                specialty: 'Flexibility & Mindfulness',
                avatar: '🧘‍♀️',
              },
            ].map((member, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl overflow-hidden border border-border hover:border-primary transition-all group"
              >
                <div className="h-48 bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-6xl group-hover:scale-110 transition-transform">
                  {member.avatar}
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg font-bold text-foreground">{member.name}</h3>
                  <p className="text-primary font-semibold text-sm mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.specialty}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Why Members Love FitForce</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              The reasons our members keep coming back
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { number: '01', title: 'Premium Facilities', description: 'State-of-the-art equipment and clean, modern facilities' },
              { number: '02', title: 'Expert Guidance', description: 'Certified trainers with years of experience' },
              { number: '03', title: 'Community', description: 'Supportive environment with like-minded individuals' },
              { number: '04', title: 'Results', description: 'Proven track record of member transformations' },
              { number: '05', title: 'Flexibility', description: 'Flexible membership plans to fit your lifestyle' },
              { number: '06', title: 'Innovation', description: 'Latest fitness trends and technology' },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6 hover:translate-x-2 transition-transform">
                <div className="text-4xl font-bold text-primary/20 flex-shrink-0">
                  {item.number}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
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
