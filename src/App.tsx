import { Helmet } from 'react-helmet-async';
import SkipLink from './components/SkipLink';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Booking from './components/Booking';
import Testimonials from './components/Testimonials';
import PoliciesSection from './components/PoliciesSection';
import Footer from './components/Footer';
import SubscriptionsSection from './components/SubscriptionsSection';
function App() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Wesley's CPR — Professional CPR, BLS, and First Aid Training in Central Valley, CA</title>
        <meta name="description" content="Wesley's CPR offers professional AHA-aligned CPR, BLS, and First Aid training. Book certification courses online for individuals, healthcare workers, and workplaces in the Central Valley." />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://wesleyscpr.com/" />
        <meta property="og:title" content="Wesley's CPR — Professional Life-Saving Training" />
        <meta property="og:description" content="Professional CPR certification and safety training for the Central Valley's students, healthcare workers, and workplaces." />
        <meta property="og:image" content="https://wesleyscpr.com/images/og.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://wesleyscpr.com/" />
        <meta property="twitter:title" content="Wesley's CPR — Professional Life-Saving Training" />
        <meta property="twitter:description" content="Professional CPR certification and safety training for the Central Valley's students, healthcare workers, and workplaces." />
        <meta property="twitter:image" content="https://wesleyscpr.com/images/og.jpg" />
      </Helmet>
      <SkipLink />
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Services />
        <Pricing />
        <SubscriptionsSection />
        <Booking />
        <Testimonials />
        <PoliciesSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;