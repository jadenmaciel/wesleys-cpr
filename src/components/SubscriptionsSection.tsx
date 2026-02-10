import { COURSES } from '../data/courses';
import PricingCard from './PricingCard';
import PrimaryButton from './ui/PrimaryButton';

export default function SubscriptionsSection() {
  const subscriptions = COURSES.filter((c) => c.code.startsWith('CPR-SUB'));

  return (
    <section className="py-16 bg-cream/30">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Left Column: Info */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-navy mb-6">CPR Training Subscriptions</h2>
            <p className="text-lg text-navy/80 mb-6">
              Ensure your team is prepared for any situation by receiving expert training and support.
              Our subscription plans are designed for healthcare organizations including:
            </p>
            <ul className="space-y-3 mb-8">
              {['Nursing facilities', 'Clinics', 'Detox facilities'].map((item) => (
                <li key={item} className="flex items-center text-navy/80">
                  <span className="w-2 h-2 bg-red rounded-full mr-3" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Pricing Cards */}
          <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-2 gap-6">
            {subscriptions.map((sub) => (
              <PricingCard
                key={sub.code}
                name={sub.name}
                price={typeof sub.price === 'number' ? sub.price : 0}
                description={sub.desc}
                badge="Featured"
                className="shadow-lg border-red/20"
                action={
                  <PrimaryButton href="#booking" className="w-full">
                    Enroll Today
                  </PrimaryButton>
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
