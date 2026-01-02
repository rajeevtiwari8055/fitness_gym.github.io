import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { BarChart3, TrendingUp, Calendar, Zap, LogOut } from 'lucide-react';

/**
 * Member Dashboard Page
 * Features: Login, progress tracking, class bookings, profile management
 * Design: Dashboard layout with cards and charts
 */
export default function Dashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      setIsLoggedIn(true);
      setEmail('');
      setPassword('');
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />

        <section className="pt-32 pb-12 bg-gradient-to-b from-primary/10 to-transparent">
          <div className="container mx-auto px-4">
            <div className="text-center animate-fade-in-scale">
              <h1 className="text-5xl md:text-7xl font-bold mb-4">Member Dashboard</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Track your progress and manage your membership
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto bg-white p-8 rounded-xl border border-border shadow-lg">
              <h2 className="text-2xl font-bold text-foreground mb-6">Member Login</h2>

              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Password</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="••••••••"
                  />
                </div>

                <button type="submit" className="w-full btn-primary">
                  Sign In
                </button>
              </form>

              <p className="text-center text-muted-foreground text-sm mt-4">
                Demo: Use any email and password to login
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-32 pb-12 bg-gradient-to-b from-primary/10 to-transparent">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="animate-fade-in-scale">
              <h1 className="text-5xl font-bold mb-2">Welcome Back!</h1>
              <p className="text-lg text-muted-foreground">Track your fitness progress</p>
            </div>
            <button
              onClick={() => setIsLoggedIn(false)}
              className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              <LogOut size={20} />
              Logout
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: TrendingUp, label: 'Weight Lost', value: '12 lbs', color: 'from-primary' },
              { icon: Zap, label: 'Workouts', value: '24', color: 'from-secondary' },
              { icon: Calendar, label: 'Streak', value: '15 days', color: 'from-orange-500' },
              { icon: BarChart3, label: 'Calories Burned', value: '12,500', color: 'from-green-500' },
            ].map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className={`bg-gradient-to-br ${stat.color} to-transparent p-6 rounded-xl border border-border`}>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/20 rounded-lg">
                      <Icon className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="text-white/80 text-sm">{stat.label}</p>
                      <p className="text-2xl font-bold text-white">{stat.value}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Progress Chart */}
            <div className="lg:col-span-2 bg-white p-8 rounded-xl border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-6">Progress Chart</h2>
              <div className="h-64 bg-gradient-to-b from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl mb-2">📊</div>
                  <p className="text-muted-foreground">Weight Progress Over Time</p>
                  <p className="text-sm text-muted-foreground mt-2">Showing consistent progress</p>
                </div>
              </div>
            </div>

            {/* Upcoming Classes */}
            <div className="bg-white p-8 rounded-xl border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-6">Upcoming Classes</h2>
              <div className="space-y-4">
                {[
                  { time: 'Today 5:30 PM', class: 'HIIT Bootcamp', instructor: 'Emma' },
                  { time: 'Tomorrow 7 AM', class: 'Strength Training', instructor: 'Mike' },
                  { time: 'Dec 20, 6 PM', class: 'Yoga Flow', instructor: 'Lisa' },
                ].map((cls, idx) => (
                  <div key={idx} className="p-4 bg-primary/5 rounded-lg border border-primary/20 hover:border-primary transition-all">
                    <p className="text-sm text-primary font-semibold">{cls.time}</p>
                    <p className="font-bold text-foreground">{cls.class}</p>
                    <p className="text-xs text-muted-foreground">with {cls.instructor}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Goals Section */}
          <div className="mt-12 bg-white p-8 rounded-xl border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-6">Your Goals</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  goal: 'Lose 30 lbs',
                  progress: 40,
                  current: '12 lbs lost',
                  target: '30 lbs',
                },
                {
                  goal: 'Build Muscle',
                  progress: 60,
                  current: '+8 lbs muscle',
                  target: '+15 lbs',
                },
                {
                  goal: 'Increase Strength',
                  progress: 75,
                  current: '50% increase',
                  target: '100% increase',
                },
              ].map((item, idx) => (
                <div key={idx} className="space-y-4">
                  <h3 className="font-bold text-foreground">{item.goal}</h3>
                  <div className="w-full bg-muted rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-primary to-secondary h-3 rounded-full transition-all"
                      style={{ width: `${item.progress}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>{item.current}</span>
                    <span>{item.target}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="mt-12 bg-white p-8 rounded-xl border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-6">Recent Activity</h2>
            <div className="space-y-4">
              {[
                { date: 'Dec 18', activity: 'Completed HIIT Bootcamp - 450 calories burned' },
                { date: 'Dec 17', activity: 'Attended Strength Training - Personal record: 225 lbs' },
                { date: 'Dec 16', activity: 'Completed Cardio Session - 5 miles run' },
                { date: 'Dec 15', activity: 'Attended Yoga Class - Great flexibility session' },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 pb-4 border-b border-border last:border-b-0">
                  <div className="text-primary font-bold text-sm w-16 flex-shrink-0">{item.date}</div>
                  <p className="text-foreground">{item.activity}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
