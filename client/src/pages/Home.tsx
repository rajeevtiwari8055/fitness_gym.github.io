import { useEffect, useState } from 'react';
import { Link } from 'wouter';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, Zap, Users, Award, TrendingUp } from 'lucide-react';

/**
 * Home Page
 * Features: Hero section with CTA, feature highlights, testimonials, animated counters
 * Design: Bold typography, gradient accents, scroll animations
 */
export default function Home() {
  const [counters, setCounters] = useState({ members: 0, classes: 0, trainers: 0, years: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('stats-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  // Animated counter effect
  useEffect(() => {
    if (!isVisible) return;

    const targets = { members: 5000, classes: 150, trainers: 25, years: 10 };
    const duration = 2000;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      setCounters({
        members: Math.floor(targets.members * progress),
        classes: Math.floor(targets.classes * progress),
        trainers: Math.floor(targets.trainers * progress),
        years: Math.floor(targets.years * progress),
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  }, [isVisible]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/images/hero-main.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left space-y-6">
              <div className="inline-block">
                <span className="bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                  ⚡ Transform Your Body Today
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Your Fitness Journey
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  {' '}Starts Here
                </span>
              </h1>

              <p className="text-xl text-gray-200 max-w-lg">
                Join thousands of members who have transformed their lives. Expert trainers, state-of-the-art facilities, and personalized programs await you.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/membership">
                  <a className="btn-primary inline-flex items-center justify-center gap-2">
                    Get Started <ArrowRight size={20} />
                  </a>
                </Link>
                <button className="btn-outline text-white border-white hover:bg-white hover:text-primary">
                  Watch Demo
                </button>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <Award className="text-primary" size={20} />
                  <span className="text-sm">Award Winning Facility</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="text-secondary" size={20} />
                  <span className="text-sm">Expert Trainers</span>
                </div>
              </div>
            </div>

            {/* Right side - Floating element */}
            <div className="hidden lg:block relative h-96">
              <div className="absolute inset-0 animate-float">
                <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/30">
                  <img
                    src="/images/hero-classes.jpg"
                    alt="Group fitness class"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats-section" className="py-20 bg-gradient-to-r from-foreground to-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, label: 'Active Members', value: counters.members, suffix: '+' },
              { icon: Zap, label: 'Classes Monthly', value: counters.classes, suffix: '+' },
              { icon: Award, label: 'Expert Trainers', value: counters.trainers, suffix: '+' },
              { icon: TrendingUp, label: 'Years Experience', value: counters.years, suffix: '+' },
            ].map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="text-center group">
                  <div className="mb-4 flex justify-center">
                    <div className="p-4 bg-primary/20 rounded-lg group-hover:bg-primary/40 transition-all">
                      <Icon className="text-primary" size={32} />
                    </div>
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    {stat.value}
                    <span className="text-secondary">{stat.suffix}</span>
                  </div>
                  <p className="text-gray-300">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Why Choose FitForce?</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Discover what makes us the premier fitness destination in the city
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'State-of-the-Art Equipment',
                description: 'Latest fitness technology and equipment to maximize your workouts',
                icon: '⚙️',
              },
              {
                title: 'Expert Personal Trainers',
                description: 'Certified professionals dedicated to your fitness goals',
                icon: '👨‍🏫',
              },
              {
                title: 'Diverse Class Schedule',
                description: 'From yoga to HIIT, find the perfect class for you',
                icon: '🎯',
              },
              {
                title: 'Nutrition Guidance',
                description: 'Personalized meal plans to complement your training',
                icon: '🥗',
              },
              {
                title: 'Progress Tracking',
                description: 'Advanced analytics to monitor your transformation',
                icon: '📊',
              },
              {
                title: 'Community Support',
                description: 'Join a supportive community of fitness enthusiasts',
                icon: '🤝',
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="card-hover bg-white p-8 rounded-xl border border-border hover:border-primary group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white relative overflow-hidden">
        {/* Diagonal background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.1) 10px, rgba(255,255,255,.1) 20px)'
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join FitForce today and get a FREE consultation with our expert trainers
          </p>
          <Link href="/membership">
            <a className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-bold hover:shadow-xl hover:scale-105 transition-all">
              Start Your Free Trial
            </a>
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Member Success Stories</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Real transformations from real people
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'John Smith',
                role: 'Lost 50 lbs',
                testimonial: 'FitForce changed my life. The trainers are supportive and the community is amazing!',
                avatar: '👨',
              },
              {
                name: 'Sarah Johnson',
                role: 'Built Muscle',
                testimonial: 'Best investment I ever made. The results speak for themselves!',
                avatar: '👩',
              },
              {
                name: 'Mike Davis',
                role: 'Improved Health',
                testimonial: 'Professional trainers and great equipment. Highly recommended!',
                avatar: '👨‍💼',
              },
            ].map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-xl border border-border hover:border-primary transition-all hover:shadow-lg"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl">{testimonial.avatar}</div>
                  <div>
                    <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-primary font-semibold">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">"{testimonial.testimonial}"</p>
                <div className="flex gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-primary text-lg">★</span>
                  ))}
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
