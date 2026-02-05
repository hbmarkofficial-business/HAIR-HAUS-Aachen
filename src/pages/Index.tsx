import { Helmet } from 'react-helmet-async';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { ContactSection } from '@/components/sections/ContactSection';

const Index = () => {
  return (
    <>
      <Helmet>
        {/* Titel & Meta Description */}
        <title>Friseursalon Aachen | HAIR HAUS Aachen</title>
        <meta
          name="description"
          content="Besuchen Sie HAIR HAUS Aachen, Ihren Premium Friseursalon in Aachen für erstklassige Haarschnitte, Bartpflege und individuelle Styles. Jetzt Termin buchen!"
        />
        <meta
          name="keywords"
          content="Friseur, Friseursalon, Herrenfriseur, Damenfriseur, Haarschnitt, Bartpflege, Rasur, Aachen, HAIR HAUS"
        />
        <link rel="canonical" href="https://hairhaus-aachen.de" />

        {/* Open Graph */}
        <meta property="og:title" content="HAIR HAUS Aachen | Premium Friseursalon Aachen" />
        <meta
          property="og:description"
          content="Erstklassige Haarschnitte und Bartpflege für den modernen Look bei HAIR HAUS in Aachen."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hairhaus-aachen.de" />
        <meta property="og:image" content="https://hairhaus-aachen.de/images/og-image.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="HAIR HAUS Aachen | Premium Friseursalon Aachen" />
        <meta
          name="twitter:description"
          content="Erleben Sie erstklassige Haarschnitte und Bartpflege bei HAIR HAUS Aachen."
        />
        <meta name="twitter:image" content="https://hairhaus-aachen.de/images/og-image.png" />

        {/* Schema.org LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HairSalon",
            "name": "HAIR HAUS Aachen",
            "image": "https://hairhaus-aachen.de/images/logo.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Alexanderstraße 69",
              "addressLocality": "Aachen",
              "postalCode": "52062",
              "addressCountry": "DE"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "50.7753",
              "longitude": "6.0839"
            },
            "url": "https://hairhaus-aachen.de",
            "telephone": "+49 176 29151040",
            "openingHours": "Mo-Fr 09:00-19:00, Sa 09:00-17:00",
            "priceRange": "€€",
            "sameAs": [
              "https://www.facebook.com/hairhausaachen",
              "https://www.instagram.com/hairhausaachen"
            ]
          })}
        </script>
      </Helmet>

      {/* Navigation */}
      <Navigation />

      <main>
        <HeroSection />
        <ServicesSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
};

export default Index;
