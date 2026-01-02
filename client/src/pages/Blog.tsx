import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Calendar, User, ArrowRight } from 'lucide-react';

/**
 * Blog Page
 * Features: Article listings, categories, search, featured posts
 * Design: Magazine-style layout with featured article
 */
export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const articles = [
    {
      id: 1,
      title: '10 Essential Tips for Building Muscle',
      excerpt: 'Learn the science-backed strategies to maximize muscle growth and strength gains.',
      category: 'training',
      author: 'Alex Turner',
      date: 'Dec 15, 2024',
      readTime: '5 min read',
      image: '💪',
    },
    {
      id: 2,
      title: 'Complete Guide to HIIT Workouts',
      excerpt: 'High-intensity interval training explained: benefits, techniques, and sample workouts.',
      category: 'cardio',
      author: 'Emma Wilson',
      date: 'Dec 12, 2024',
      readTime: '7 min read',
      image: '⚡',
    },
    {
      id: 3,
      title: 'Nutrition Secrets for Weight Loss',
      excerpt: 'Discover the nutritional strategies that actually work for sustainable weight loss.',
      category: 'nutrition',
      author: 'James Rodriguez',
      date: 'Dec 10, 2024',
      readTime: '6 min read',
      image: '🥗',
    },
    {
      id: 4,
      title: 'Yoga for Flexibility and Recovery',
      excerpt: 'How yoga can improve your flexibility, reduce injury risk, and aid recovery.',
      category: 'recovery',
      author: 'Lisa Chen',
      date: 'Dec 8, 2024',
      readTime: '4 min read',
      image: '🧘',
    },
    {
      id: 5,
      title: 'Beginners Guide to Strength Training',
      excerpt: 'Everything you need to know to start your strength training journey safely.',
      category: 'training',
      author: 'Marcus Johnson',
      date: 'Dec 5, 2024',
      readTime: '8 min read',
      image: '🏋️',
    },
    {
      id: 6,
      title: 'Recovery Techniques for Athletes',
      excerpt: 'Advanced recovery methods to enhance performance and prevent overtraining.',
      category: 'recovery',
      author: 'Sarah Thompson',
      date: 'Dec 1, 2024',
      readTime: '6 min read',
      image: '🛌',
    },
  ];

  const categories = [
    { id: 'all', name: 'All Articles' },
    { id: 'training', name: 'Training' },
    { id: 'nutrition', name: 'Nutrition' },
    { id: 'cardio', name: 'Cardio' },
    { id: 'recovery', name: 'Recovery' },
  ];

  const filteredArticles = selectedCategory === 'all' 
    ? articles 
    : articles.filter(a => a.category === selectedCategory);

  const featuredArticle = articles[0];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-primary/10 to-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center animate-fade-in-scale">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">Fitness Blog</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Expert tips, training guides, and fitness insights
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-12 items-center">
              <div className="text-6xl text-center md:text-left">{featuredArticle.image}</div>
              <div className="text-white">
                <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  Featured
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{featuredArticle.title}</h2>
                <p className="text-white/90 mb-6 text-lg">{featuredArticle.excerpt}</p>
                <div className="flex flex-wrap gap-4 mb-6 text-sm text-white/80">
                  <div className="flex items-center gap-2">
                    <User size={16} />
                    {featuredArticle.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    {featuredArticle.date}
                  </div>
                  <span>{featuredArticle.readTime}</span>
                </div>
                <button className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-lg font-bold hover:shadow-lg hover:scale-105 transition-all">
                  Read Article <ArrowRight size={20} />
                </button>
              </div>
            </div>
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

      {/* Articles Grid */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.slice(1).map((article) => (
              <div
                key={article.id}
                className="bg-white rounded-xl overflow-hidden border border-border hover:border-primary hover:shadow-lg transition-all group"
              >
                <div className="h-40 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-5xl group-hover:scale-110 transition-transform">
                  {article.image}
                </div>
                <div className="p-6">
                  <span className="inline-block bg-primary/10 text-primary text-xs px-3 py-1 rounded-full font-semibold mb-3">
                    {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
                  </span>
                  <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2">{article.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{article.excerpt}</p>
                  <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mb-4 pb-4 border-b border-border">
                    <div className="flex items-center gap-1">
                      <User size={14} />
                      {article.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      {article.date}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-semibold text-primary">{article.readTime}</span>
                    <button className="text-primary font-bold hover:translate-x-1 transition-transform">
                      Read →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-gradient-to-r from-primary to-secondary rounded-2xl p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="mb-6 opacity-90">Get the latest fitness tips and articles delivered to your inbox</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-primary px-8 py-3 rounded-lg font-bold hover:shadow-lg transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
