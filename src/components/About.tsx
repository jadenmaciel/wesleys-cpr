import { Heart, Users, Clock, MapPin, Building, GraduationCap, Shield } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Heart,
      title: 'Expert Instruction',
      description: 'American Heart Association certified instructors with years of real-world experience.',
    },
    {
      icon: Users,
      title: 'Small Class Sizes',
      description: 'Personalized attention with hands-on practice for every student.',
    },
    {
      icon: Clock,
      title: 'Flexible Scheduling',
      description: 'Evening and weekend classes available. We work around your schedule.',
    },
    {
      icon: MapPin,
      title: 'Mobile Training',
      description: 'We bring the training to you. Perfect for businesses and groups.',
    },
  ];

  const audiences = [
    {
      icon: Building,
      title: 'Businesses & Workplaces',
      description: 'Custom group training tailored for local businesses, schools, and offices. We ensure OSHA compliance and team readiness.',
    },
    {
      icon: GraduationCap,
      title: 'Healthcare Students',
      description: 'Fast-track BLS certification and renewals for nursing, medical, and dental students.',
    },
    {
      icon: Shield,
      title: 'Industry Specific',
      description: 'Safety certifications for parks & rec, construction, childcare, and manufacturing industries.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-dark">
            Why Choose Wesley's CPR?
          </h2>
          <p className="text-xl max-w-4xl mx-auto text-dark">
            We're passionate about empowering our Central Valley community with the confidence and skills to save lives.
            Our friendly, supportive approach makes learning CPR accessible and stress-free. Serving individuals, healthcare workers, and organizations across the Central Valley.
          </p>
          <p className="mt-4 text-lg text-dark/80 max-w-3xl mx-auto">
            While we are an AHA Training Site, we also provide American Red Cross certification options to ensure your team meets its specific regulatory requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow bg-navy"
            >
              <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-4 bg-red">
                <feature.icon className="text-cream" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-cream">{feature.title}</h3>
              <p className="leading-relaxed text-cream">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-dark">Trusted Training for Every Audience</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {audiences.map((audience, index) => (
              <div key={index} className="flex gap-4 p-6 rounded-xl border border-red/20 bg-white shadow-sm">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red/10 flex items-center justify-center text-red">
                  <audience.icon size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-dark mb-1">{audience.title}</h4>
                  <p className="text-dark/70 text-sm leading-relaxed">{audience.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-2xl p-8 md:p-12 text-center bg-red">
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-cream">
            Join Thousands of Trained Community Members
          </h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-cream">
            Every person trained is another potential life saved. Be ready to make a difference when it matters most.
          </p>
          <a
            href="#booking"
            className="inline-block px-8 py-4 rounded-lg transition-colors font-semibold text-lg hover:opacity-90 bg-cream text-dark"
          >
            Start Your Training Today
          </a>
        </div>
      </div>
    </section>
  );
}