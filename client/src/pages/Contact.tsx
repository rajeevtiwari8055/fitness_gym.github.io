import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

/**
 * Contact Page
 * Features: Contact form, location map, hours, contact info
 * Design: Two-column layout with form and info
 */
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-primary/10 to-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center animate-fade-in-scale">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">Get In Touch</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions? We would love to hear from you
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-xl border border-border">
              <h2 className="text-3xl font-bold text-foreground mb-6">Send us a Message</h2>
              
              {submitted && (
                <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg border border-green-300">
                  Thank you! We will get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Subject</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select a subject</option>
                    <option value="membership">Membership Inquiry</option>
                    <option value="classes">Classes Information</option>
                    <option value="training">Personal Training</option>
                    <option value="facilities">Facilities Tour</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Address */}
              <div className="bg-white p-8 rounded-xl border border-border hover:border-primary transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-4 bg-primary/10 rounded-lg">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Location</h3>
                    <p className="text-muted-foreground">123 Fitness Street</p>
                    <p className="text-muted-foreground">Gym City, GC 12345</p>
                    <p className="text-muted-foreground">United States</p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-white p-8 rounded-xl border border-border hover:border-primary transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-4 bg-primary/10 rounded-lg">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Phone</h3>
                    <a href="tel:+1234567890" className="text-primary font-semibold hover:underline">
                      +1 (234) 567-890
                    </a>
                    <p className="text-muted-foreground text-sm mt-1">Mon-Fri, 9 AM - 6 PM</p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white p-8 rounded-xl border border-border hover:border-primary transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-4 bg-primary/10 rounded-lg">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Email</h3>
                    <a href="mailto:info@fitforce.com" className="text-primary font-semibold hover:underline">
                      info@fitforce.com
                    </a>
                    <p className="text-muted-foreground text-sm mt-1">We respond within 24 hours</p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-white p-8 rounded-xl border border-border hover:border-primary transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-4 bg-primary/10 rounded-lg">
                    <Clock className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Hours</h3>
                    <p className="text-muted-foreground text-sm">Mon-Fri: 5 AM - 11 PM</p>
                    <p className="text-muted-foreground text-sm">Sat: 6 AM - 10 PM</p>
                    <p className="text-muted-foreground text-sm">Sun: 7 AM - 9 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Find Us</h2>
          <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Visit our location and experience FitForce in person
          </p>

          <div className="w-full h-96 rounded-xl overflow-hidden border-4 border-primary shadow-lg bg-muted">
            <div className="w-full h-full flex items-center justify-center text-6xl">
              🗺️
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Quick answers to common questions
          </p>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: 'How do I schedule a tour?',
                a: 'You can schedule a tour by calling us at +1 (234) 567-890 or filling out the contact form above. Tours are available daily during business hours.',
              },
              {
                q: 'What is your cancellation policy?',
                a: 'You can cancel your membership anytime with no penalties. Just notify us 7 days before your next billing date.',
              },
              {
                q: 'Do you offer personal training?',
                a: 'Yes! We offer personalized training sessions with certified trainers. Contact us for pricing and availability.',
              },
              {
                q: 'Can I bring a guest?',
                a: 'Absolutely! Members can bring guests for free. Guest passes are available at the front desk.',
              },
            ].map((faq, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg border border-border hover:border-primary transition-all">
                <h3 className="font-bold text-foreground mb-2 flex items-center gap-2">
                  <span className="text-primary text-lg">Q:</span> {faq.q}
                </h3>
                <p className="text-muted-foreground ml-6">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
