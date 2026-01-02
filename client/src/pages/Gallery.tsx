import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

/**
 * Gallery Page
 * Features: Photo gallery, before/after transformations, filterable views
 * Design: Grid layout with lightbox-style viewing
 */
export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const galleryItems = [
    { id: 1, category: 'transformation', title: 'John - 50 lbs Lost', image: '👨', badge: '-50 lbs' },
    { id: 2, category: 'transformation', title: 'Sarah - Muscle Gain', image: '👩', badge: '+15 lbs muscle' },
    { id: 3, category: 'facilities', title: 'Weight Training Area', image: '🏋️', badge: 'Facilities' },
    { id: 4, category: 'transformation', title: 'Mike - Strength', image: '👨‍💼', badge: '3x Stronger' },
    { id: 5, category: 'classes', title: 'Group HIIT Class', image: '⚡', badge: 'Classes' },
    { id: 6, category: 'facilities', title: 'Cardio Zone', image: '🚴', badge: 'Facilities' },
    { id: 7, category: 'transformation', title: 'Emma - 6 Month Journey', image: '👩‍🦱', badge: 'Transformation' },
    { id: 8, category: 'classes', title: 'Yoga Session', image: '🧘‍♀️', badge: 'Classes' },
    { id: 9, category: 'facilities', title: 'Recovery Area', image: '🛌', badge: 'Facilities' },
  ];

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'transformation', name: 'Transformations' },
    { id: 'facilities', name: 'Facilities' },
    { id: 'classes', name: 'Classes' },
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-primary/10 to-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center animate-fade-in-scale">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">Gallery</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real transformations and our amazing facilities
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-white text-foreground border border-border hover:border-primary'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all cursor-pointer"
              >
                {/* Image Container */}
                <div className="h-64 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-7xl group-hover:scale-110 transition-transform duration-300">
                  {item.image}
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-white/80 text-sm">{item.category.charAt(0).toUpperCase() + item.category.slice(1)}</p>
                </div>

                {/* Badge */}
                <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-bold">
                  {item.badge}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformation Stories */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Success Stories</h2>
          <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Inspiring transformations from our members
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {[
              {
                name: 'John Smith',
                before: 'Overweight, low energy',
                after: 'Lost 50 lbs, runs marathons',
                duration: '12 months',
                avatar: '👨',
              },
              {
                name: 'Sarah Johnson',
                before: 'Weak, no muscle tone',
                after: 'Built lean muscle, strong',
                duration: '8 months',
                avatar: '👩',
              },
              {
                name: 'Mike Davis',
                before: 'Sedentary lifestyle',
                after: 'Athlete, competing in events',
                duration: '10 months',
                avatar: '👨‍💼',
              },
              {
                name: 'Emma Wilson',
                before: 'Struggled with confidence',
                after: 'Fit, confident, healthy',
                duration: '6 months',
                avatar: '👩‍🦱',
              },
            ].map((story, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl border border-border hover:border-primary transition-all">
                <div className="text-6xl mb-4">{story.avatar}</div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{story.name}</h3>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-sm text-muted-foreground font-semibold mb-1">Before</p>
                    <p className="text-foreground">{story.before}</p>
                  </div>
                  <div className="flex justify-center">
                    <div className="text-2xl text-primary font-bold">→</div>
                  </div>
                  <div>
                    <p className="text-sm text-primary font-semibold mb-1">After</p>
                    <p className="text-foreground font-semibold">{story.after}</p>
                  </div>
                </div>

                <p className="text-center text-sm text-muted-foreground border-t border-border pt-4">
                  <span className="font-bold text-primary">{story.duration}</span> of dedication
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '500+', label: 'Transformations' },
              { number: '5000+', label: 'Active Members' },
              { number: '150+', label: 'Classes Monthly' },
              { number: '98%', label: 'Satisfaction Rate' },
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <p className="text-white/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Transformation?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our community and become the next success story
          </p>
          <button className="inline-block bg-primary text-white px-8 py-4 rounded-lg font-bold hover:shadow-lg hover:scale-105 transition-all">
            Start Your Journey
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
