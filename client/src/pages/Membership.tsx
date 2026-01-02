import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Check, X, ArrowRight } from 'lucide-react';

interface Feature {
  name: string;
  included: boolean;
}

interface Plan {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  features: Feature[];
  cta: string;
  popular: boolean;
}

/**
 * Membership Page
 * Features: Pricing tiers, feature comparison, membership selection
 * Design: Card-based layout with hover effects and animations
 */
export default function Membership() {
  const [selectedPlan, setSelectedPlan] = useState('pro');
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = [
    {
      id: 'basic',
      name: 'Basic',
      description: 'Perfect for beginners',
      monthlyPrice: 29,
      annualPrice: 290,
      features: [
        { name: 'Gym Access', included: true },
        { name: 'Basic Equipment', included: true },
        { name: 'Locker Room Access', included: true },
        { name: 'Personal Training', included: false },
        { name: 'Group Classes', included: false },
        { name: 'Nutrition Coaching', included: false },
        { name: 'Progress Tracking', included: false },
      ],
      cta: 'Get Started',
      popular: false,
    },
    {
      id: 'pro',
      name: 'Pro',
      description: 'Most popular choice',
      monthlyPrice: 59,
      annualPrice: 590,
      features: [
        { name: 'Gym Access', included: true },
        { name: 'All Equipment', included: true },
        { name: 'Locker Room Access', included: true },
        { name: 'Personal Training (4/month)', included: true },
        { name: 'Unlimited Group Classes', included: true },
        { name: 'Nutrition Coaching', included: false },
        { name: 'Progress Tracking', included: true },
      ],
      cta: 'Choose Plan',
      popular: true,
    },
    {
      id: 'elite',
      name: 'Elite',
      description: 'Premium experience',
      monthlyPrice: 99,
      annualPrice: 990,
      features: [
        { name: 'Gym Access', included: true },
        { name: 'All Equipment', included: true },
        { name: 'Locker Room Access', included: true },
        { name: 'Unlimited Personal Training', included: true },
        { name: 'Unlimited Group Classes', included: true },
        { name: 'Nutrition Coaching', included: true },
        { name: 'Advanced Progress Tracking', included: true },
      ],
      cta: 'Upgrade Now',
      popular: false,
    },
  ];

  const currentPrice = billingCycle === 'monthly' ? 'monthlyPrice' : 'annualPrice';
  const discount = billingCycle === 'annual' ? '17% OFF' : null;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-primary/10 to-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center animate-fade-in-scale">
            <h1 className="section-title mb-4">Membership Plans</h1>
            <p className="section-subtitle max-w-2xl mx-auto">
              Choose the perfect plan for your fitness journey
            </p>
          </div>
        </div>
      </section>

      {/* Billing Toggle */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center gap-4">
            <span className={`font-semibold ${billingCycle === 'monthly' ? 'text-foreground' : 'text-muted-foreground'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
              className="relative inline-flex h-8 w-14 items-center rounded-full bg-muted"
            >
              <span
                className={`inline-block h-6 w-6 transform rounded-full bg-primary transition-transform ${
                  billingCycle === 'annual' ? 'translate-x-7' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`font-semibold ${billingCycle === 'annual' ? 'text-foreground' : 'text-muted-foreground'}`}>
              Annual
            </span>
            {discount && (
              <span className="ml-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-bold">
                {discount}
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative rounded-2xl transition-all duration-300 ${
                  plan.popular
                    ? 'md:scale-105 border-2 border-primary shadow-2xl'
                    : 'border border-border hover:border-primary'
                } bg-white p-8 hover:shadow-xl`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full text-sm font-bold">
                      MOST POPULAR
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm">{plan.description}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-primary">
                      ${(plan[currentPrice as keyof Plan] as number)}
                    </span>
                    <span className="text-muted-foreground">
                      /{billingCycle === 'monthly' ? 'month' : 'year'}
                    </span>
                  </div>
                  {billingCycle === 'annual' && (
                    <p className="text-sm text-muted-foreground mt-2">
                      ${(plan.annualPrice / 12).toFixed(2)}/month when billed annually
                    </p>
                  )}
                </div>

                <button
                  onClick={() => setSelectedPlan(plan.id)}
                  className={`w-full py-3 rounded-lg font-semibold transition-all mb-8 ${
                    selectedPlan === plan.id
                      ? 'btn-primary'
                      : 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
                  }`}
                >
                  {plan.cta}
                </button>

                <div className="space-y-4">
                  {plan.features.map((feature: Feature, idx: number) => (
                    <div key={idx} className="flex items-center gap-3">
                      {feature.included ? (
                        <Check className="text-primary flex-shrink-0" size={20} />
                      ) : (
                        <X className="text-muted-foreground flex-shrink-0" size={20} />
                      )}
                      <span
                        className={
                          feature.included ? 'text-foreground font-medium' : 'text-muted-foreground line-through'
                        }
                      >
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-4">Detailed Comparison</h2>
          <p className="section-subtitle text-center max-w-2xl mx-auto mb-12">
            See what's included in each membership tier
          </p>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left py-4 px-4 font-bold text-foreground">Feature</th>
                  <th className="text-center py-4 px-4 font-bold text-foreground">Basic</th>
                  <th className="text-center py-4 px-4 font-bold text-foreground">Pro</th>
                  <th className="text-center py-4 px-4 font-bold text-foreground">Elite</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Gym Access', basic: true, pro: true, elite: true },
                  { feature: 'Locker Room', basic: true, pro: true, elite: true },
                  { feature: 'Shower Facilities', basic: true, pro: true, elite: true },
                  { feature: 'Personal Training', basic: false, pro: '4/month', elite: 'Unlimited' },
                  { feature: 'Group Classes', basic: false, pro: true, elite: true },
                  { feature: 'Nutrition Coaching', basic: false, pro: false, elite: true },
                  { feature: 'Progress Tracking', basic: false, pro: true, elite: true },
                  { feature: 'Priority Support', basic: false, pro: false, elite: true },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-border hover:bg-primary/5 transition-colors">
                    <td className="py-4 px-4 font-medium text-foreground">{row.feature}</td>
                    <td className="py-4 px-4 text-center">
                      {typeof row.basic === 'boolean' ? (
                        row.basic ? (
                          <Check className="text-primary mx-auto" size={20} />
                        ) : (
                          <X className="text-muted-foreground mx-auto" size={20} />
                        )
                      ) : (
                        <span className="text-muted-foreground">{row.basic}</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {typeof row.pro === 'boolean' ? (
                        row.pro ? (
                          <Check className="text-primary mx-auto" size={20} />
                        ) : (
                          <X className="text-muted-foreground mx-auto" size={20} />
                        )
                      ) : (
                        <span className="text-muted-foreground">{row.pro}</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {typeof row.elite === 'boolean' ? (
                        row.elite ? (
                          <Check className="text-primary mx-auto" size={20} />
                        ) : (
                          <X className="text-muted-foreground mx-auto" size={20} />
                        )
                      ) : (
                        <span className="text-muted-foreground">{row.elite}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-4">Frequently Asked Questions</h2>
          <p className="section-subtitle text-center max-w-2xl mx-auto mb-12">
            Got questions? We've got answers
          </p>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: 'Can I change my membership plan?',
                a: 'Yes! You can upgrade or downgrade your plan anytime. Changes take effect on your next billing cycle.',
              },
              {
                q: 'Is there a long-term contract?',
                a: 'No contracts! All our memberships are month-to-month with the option to cancel anytime.',
              },
              {
                q: 'Do you offer a free trial?',
                a: 'Absolutely! Get a free 7-day trial to experience all our facilities and classes.',
              },
              {
                q: 'What if I want to cancel?',
                a: 'You can cancel anytime with no penalties. Just let us know 7 days before your next billing date.',
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">Join thousands of members transforming their lives</p>
          <button className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-bold hover:shadow-xl hover:scale-105 transition-all">
            Start Your Free Trial <ArrowRight size={20} />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
