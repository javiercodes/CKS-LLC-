'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Container from '@/components/Container';
import SectionHeading from '@/components/SectionHeading';
import ServiceCard from '@/components/ServiceCard';
import ContactForm from '@/components/ContactForm';
import Badge from '@/components/Badge';
import { 
  COMPANY, 
  CONTACT, 
  SERVICES, 
  SERVICE_AREAS, 
  TARGET_CUSTOMERS, 
  WHY_CHOOSE_US 
} from '@/lib/constants';

export default function HomePage() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: COMPANY.name,
    description: COMPANY.description,
    telephone: CONTACT.phones.alejandro,
    email: CONTACT.email,
    areaServed: SERVICE_AREAS.map(area => ({
      '@type': 'State',
      name: area,
    })),
    serviceType: SERVICES.map(service => service.title),
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'CA',
      addressCountry: 'US',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-white py-20 lg:py-32">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-6">Family-Owned & Operated</Badge>
                <SectionHeading level="h1" className="mb-6">
                  {COMPANY.tagline}
                </SectionHeading>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  {COMPANY.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={scrollToContact}
                    className="btn-primary"
                  >
                    Request Service
                  </button>
                  <a 
                    href={`tel:${CONTACT.phones.alejandro}`}
                    className="btn-secondary text-center"
                  >
                    Call {CONTACT.phones.alejandro}
                  </a>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  Same-day service available • Licensed & Insured
                </p>
              </div>
              <div className="lg:order-last">
                <img
                  src="/hero.png"
                  alt="Commercial kitchen with professional hood system"
                  className="rounded-2xl shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </Container>
        </section>

        {/* Services Section */}
        <section id="services" className="bg-gray-50 py-20">
          <Container>
            <div className="text-center mb-16">
              <SectionHeading level="h2" centered className="mb-4">
                Our Services
              </SectionHeading>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We solve any type of problem in commercial kitchens. From hood installation 
                to electrical repair, our three-brother team has you covered.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SERVICES.map((service) => (
                <ServiceCard
                  key={service.id}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  onLearnMore={scrollToContact}
                />
              ))}
            </div>
          </Container>
        </section>

        {/* About Section */}
        <section id="about" className="bg-white py-20">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="/services/about.png"
                  alt="CKS team working on commercial kitchen equipment"
                  className="rounded-2xl shadow-lg w-full h-auto"
                />
              </div>
              <div>
                <SectionHeading level="h2" className="mb-6">
                  About CKS
                </SectionHeading>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  We are a family LLC—three brothers who combined their companies into one, 
                  offering comprehensive commercial kitchen solutions. Our mission is simple: 
                  keep commercial kitchens safe, compliant, and running smoothly.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Whether it&apos;s cleaning issues, extraction and ventilation system repairs, 
                  electrical work, or plumbing, we handle it all. Licensed, insured, and 
                  committed to fast, reliable service across Southern California.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-2xl font-bold text-red-600 mb-1">10+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-2xl font-bold text-red-600 mb-1">500+</div>
                    <div className="text-sm text-gray-600">Kitchens Served</div>
                  </div>
                </div>

                <p className="text-base text-gray-600">
                  <strong>Who we serve:</strong> {TARGET_CUSTOMERS.join(', ')}, and more.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Service Areas Section */}
        <section id="service-areas" className="bg-gray-50 py-20">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <SectionHeading level="h2" className="mb-6">
                  Service Areas
                </SectionHeading>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Rapid dispatch across Southern California. We serve all major counties 
                  with fast, reliable commercial kitchen services.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {SERVICE_AREAS.map((area) => (
                    <div key={area} className="flex items-center">
                      <span className="text-red-600 mr-2">📍</span>
                      <span className="text-gray-700">{area}</span>
                    </div>
                  ))}
                </div>

                <p className="text-base text-gray-600">
                  Need service outside these areas? Call us—we may be able to help.
                </p>
              </div>
              <div>
                <img
                  src="/map-image.png"
                  alt="Service areas map covering Southern California counties"
                  className="rounded-2xl shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </Container>
        </section>

        {/* Why Choose Us Section */}
        <section className="bg-white py-20">
          <Container>
            <div className="text-center mb-16">
              <SectionHeading level="h2" centered className="mb-4">
                Why Choose CKS?
              </SectionHeading>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Three brothers, one mission: exceptional commercial kitchen service you can trust.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {WHY_CHOOSE_US.map((reason, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl text-red-600 font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-gray-50 py-20">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <SectionHeading level="h2" centered className="mb-4">
                  Request Service
                </SectionHeading>
                <p className="text-lg text-gray-600">
                  Ready to solve your commercial kitchen problems? Fill out the form below 
                  and we&apos;ll get back to you quickly.
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2">
                  <div className="card p-8">
                    <ContactForm />
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="card p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Need Immediate Help?
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Alejandro</p>
                        <a 
                          href={`tel:${CONTACT.phones.alejandro}`}
                          className="text-lg font-semibold text-red-600 hover:text-red-700"
                        >
                          {CONTACT.phones.alejandro}
                        </a>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Javier</p>
                        <a 
                          href={`tel:${CONTACT.phones.javier}`}
                          className="text-lg font-semibold text-red-600 hover:text-red-700"
                        >
                          {CONTACT.phones.javier}
                        </a>
                      </div>
                      <div className="pt-3 border-t">
                        <p className="text-sm text-gray-600 mb-1">Email</p>
                        <a 
                          href={`mailto:${CONTACT.email}`}
                          className="text-base text-red-600 hover:text-red-700"
                        >
                          {CONTACT.email}
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="card p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Emergency Service
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Kitchen down? We offer same-day emergency repairs when available.
                    </p>
                    <Badge variant="primary">Available 7 Days/Week</Badge>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
      
      <Footer />
    </>
  );
} 