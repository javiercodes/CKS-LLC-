'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Container from '@/components/Container';
import SectionHeading from '@/components/SectionHeading';
import ServiceCard from '@/components/ServiceCard';
import ContactForm from '@/components/ContactForm';
import Badge from '@/components/Badge';
import AnimatedText from '@/components/AnimatedText';
import AnimatedSection from '@/components/AnimatedSection';
import StatCard from '@/components/StatCard';
import FloatingCard from '@/components/FloatingCard';
import ServiceProjectsGallery from '@/components/ServiceProjectsGallery';
import { 
  COMPANY, 
  CONTACT, 
  SERVICES, 
  SERVICE_AREAS, 
  TARGET_CUSTOMERS, 
  WHY_CHOOSE_US 
} from '@/lib/constants';
import { 
  slideInLeft, 
  slideInRight,
  slideUp, 
  buttonPress, 
  parallaxSlow,
  staggerContainer,
  getReducedMotion 
} from '@/lib/animations';

export default function HomePage() {
  const reducedMotion = getReducedMotion();
  
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
        <section className="bg-white section-padding">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                variants={reducedMotion ? {} : staggerContainer}
                initial="hidden"
                animate="visible"
              >
                <motion.div variants={reducedMotion ? {} : slideInLeft}>
                  <div className="section-index">01 — 08</div>
                  <div className="eyebrow-label">Family-Owned & Operated</div>
                </motion.div>
                
                <motion.div variants={reducedMotion ? {} : slideUp}>
                  <AnimatedText 
                    text={COMPANY.tagline}
                    className="heading-xl text-gray-900 mb-8"
                  />
                </motion.div>
                
                <motion.p 
                  className="body-lg text-gray-600 mb-12 max-w-lg"
                  variants={reducedMotion ? {} : slideUp}
                >
                  {COMPANY.description}
                </motion.p>
                
                <motion.div 
                  className="flex flex-col sm:flex-row gap-6 mb-8"
                  variants={reducedMotion ? {} : slideUp}
                >
                  <motion.button 
                    onClick={scrollToContact}
                    className="btn-primary"
                    variants={reducedMotion ? {} : buttonPress}
                    initial="rest"
                    whileHover="rest"
                    whileTap="press"
                    style={{ willChange: 'transform' }}
                  >
                    Request Service
                  </motion.button>
                  <motion.a 
                    href={`tel:${CONTACT.phones.alejandro}`}
                    className="btn-secondary text-center"
                    variants={reducedMotion ? {} : buttonPress}
                    initial="rest"
                    whileHover="rest"
                    whileTap="press"
                    style={{ willChange: 'transform' }}
                  >
                    Call {CONTACT.phones.alejandro}
                  </motion.a>
                </motion.div>
                
                <motion.p 
                  className="text-muted-sm"
                  variants={reducedMotion ? {} : slideUp}
                >
                  Same-day service available • Licensed & Insured
                </motion.p>
              </motion.div>
              
              <motion.div 
                className="lg:order-last"
                variants={reducedMotion ? {} : parallaxSlow}
                initial="rest"
                animate="animate"
                style={{ willChange: 'transform' }}
              >
                <motion.img
                  src="/hero.png"
                  alt="Commercial kitchen with professional hood system"
                  className="border border-gray-200 w-full h-auto"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  style={{ willChange: 'transform, opacity' }}
                />
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Services Section */}
        <section id="services" className="bg-light section-padding border-t border-light">
          <Container>
            <AnimatedSection className="text-center mb-20">
              <motion.div variants={reducedMotion ? {} : slideUp}>
                <div className="section-index">02 — 08</div>
                <h2 className="heading-lg text-gray-900 mb-6">Our Services</h2>
              </motion.div>
              <motion.p 
                className="body-lg text-gray-600 max-w-2xl mx-auto"
                variants={reducedMotion ? {} : slideUp}
              >
                We solve any type of problem in commercial kitchens. From hood installation 
                to fire suppression systems, our certified and qualified technicians provide 
                free estimates and have you covered.
              </motion.p>
            </AnimatedSection>
            
            <AnimatedSection 
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8"
              stagger={0.1}
            >
              {SERVICES.map((service) => (
                <motion.div
                  key={service.id}
                  variants={reducedMotion ? {} : slideUp}
                  style={{ willChange: 'transform' }}
                >
                  <ServiceCard
                    title={service.title}
                    description={service.description}
                    icon={service.icon}
                    image={(service as any).image}
                    onLearnMore={scrollToContact}
                  />
                </motion.div>
              ))}
            </AnimatedSection>
          </Container>
        </section>

        {/* Recent Projects by Service */}
        <ServiceProjectsGallery />

        {/* About Section */}
        <section id="about" className="bg-light section-padding border-t border-light">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <AnimatedSection className="order-2 lg:order-1">
                <motion.div variants={reducedMotion ? {} : slideInLeft}>
                  <motion.img
                    src="/services/about.png"
                    alt="CKS team working on commercial kitchen equipment"
                    className="border border-gray-200 w-full h-auto"
                    variants={reducedMotion ? {} : parallaxSlow}
                    animate="animate"
                    style={{ willChange: 'transform' }}
                  />
                </motion.div>
              </AnimatedSection>
              
              <AnimatedSection className="order-1 lg:order-2">
                <motion.div variants={reducedMotion ? {} : slideInRight}>
                  <div className="section-index">04 — 08</div>
                  <h2 className="heading-lg text-gray-900 mb-8">About CKS</h2>
                </motion.div>
                
                <motion.p 
                  className="body-lg text-gray-600 mb-8"
                  variants={reducedMotion ? {} : slideInRight}
                >
                  We are a family LLC—three brothers who combined their companies into one, 
                  offering comprehensive commercial kitchen solutions.
                </motion.p>
                
                <motion.p 
                  className="body-base text-gray-600 mb-12"
                  variants={reducedMotion ? {} : slideInRight}
                >
                  Whether it&apos;s cleaning issues, extraction and ventilation system repairs, 
                  electrical work, or plumbing, we handle it all. Licensed, insured, and 
                  committed to fast, reliable service across Southern California.
                </motion.p>
                
                <motion.div 
                  className="grid grid-cols-2 gap-8 mb-8"
                  variants={reducedMotion ? {} : slideInRight}
                >
                  <StatCard value={10} label="Years Experience" suffix="+" />
                  <StatCard value={500} label="Kitchens Served" suffix="+" />
                </motion.div>

                <motion.p 
                  className="text-base text-gray-600"
                  variants={reducedMotion ? {} : slideInRight}
                >
                  <strong>Who we serve:</strong> {TARGET_CUSTOMERS.join(', ')}, and more.
                </motion.p>
              </AnimatedSection>
            </div>
          </Container>
        </section>

        {/* Service Areas Section */}
        <section id="service-areas" className="bg-white section-padding border-t border-light">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <AnimatedSection>
                <motion.div variants={reducedMotion ? {} : slideInLeft}>
                  <div className="section-index">05 — 08</div>
                  <h2 className="heading-lg text-gray-900 mb-8">Service Areas</h2>
                </motion.div>
                
                <motion.p 
                  className="body-lg text-gray-600 mb-12"
                  variants={reducedMotion ? {} : slideInLeft}
                >
                  Rapid dispatch across Southern California. We serve all major counties 
                  with fast, reliable commercial kitchen services.
                </motion.p>
                
                <motion.div 
                  className="clean-list mb-12"
                  variants={reducedMotion ? {} : slideInLeft}
                >
                  {SERVICE_AREAS.map((area, index) => (
                     <motion.div 
                       key={area} 
                       className="clean-list-item"
                       initial={{ opacity: 0, x: -20 }}
                       animate={{ opacity: 1, x: 0 }}
                       style={{ transitionDelay: `${index * 0.1}s` }}
                     >
                       <span className="text-red-600 text-lg">📍</span>
                       <span className="body-base text-gray-700">
                         {area}
                       </span>
                     </motion.div>
                   ))}
                </motion.div>

                <motion.p 
                  className="text-muted"
                  variants={reducedMotion ? {} : slideInLeft}
                >
                  Need service outside these areas? Call us—we may be able to help.
                </motion.p>
              </AnimatedSection>
              
              <AnimatedSection>
                <motion.div variants={reducedMotion ? {} : slideInRight}>
                  <motion.img
                    src="/map-image.png"
                    alt="Service areas map covering Southern California counties"
                    className="border border-gray-200 w-full h-auto"
                    whileHover={reducedMotion ? {} : { scale: 1.01 }}
                    transition={{ duration: 0.3 }}
                    style={{ willChange: 'transform' }}
                  />
                </motion.div>
              </AnimatedSection>
            </div>
          </Container>
        </section>

        {/* Why Choose Us Section */}
        <section className="bg-light section-padding border-t border-light">
          <Container>
            <AnimatedSection className="text-center mb-20">
              <motion.div variants={reducedMotion ? {} : slideUp}>
                <div className="section-index">06 — 08</div>
                <h2 className="heading-lg text-gray-900 mb-6">Why Choose CKS?</h2>
              </motion.div>
              <motion.p 
                className="body-lg text-gray-600 max-w-2xl mx-auto"
                variants={reducedMotion ? {} : slideUp}
              >
                Three brothers, one mission: exceptional commercial kitchen service you can trust.
              </motion.p>
            </AnimatedSection>
            
            <AnimatedSection 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
              stagger={0.15}
            >
              {WHY_CHOOSE_US.map((reason, index) => (
                <FloatingCard
                  key={index}
                  number={index + 1}
                  title={reason.title}
                  description={reason.description}
                  delay={index * 0.1}
                />
              ))}
            </AnimatedSection>
          </Container>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-white section-padding border-t border-light">
          <Container>
            <div className="max-w-6xl mx-auto">
              <AnimatedSection className="text-center mb-16">
                <motion.div variants={reducedMotion ? {} : slideUp}>
                  <div className="section-index">07 — 08</div>
                  <h2 className="heading-lg text-gray-900 mb-6">Request Service</h2>
                </motion.div>
                <motion.p 
                  className="body-lg text-gray-600 max-w-2xl mx-auto"
                  variants={reducedMotion ? {} : slideUp}
                >
                  Ready to solve your commercial kitchen problems? Fill out the form below 
                  and we&apos;ll get back to you quickly.
                </motion.p>
              </AnimatedSection>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <AnimatedSection className="lg:col-span-2">
                  <motion.div 
                    className="card p-8"
                    variants={reducedMotion ? {} : slideInLeft}
                  >
                    <ContactForm />
                  </motion.div>
                </AnimatedSection>
                
                <AnimatedSection className="space-y-6" stagger={0.1}>
                  <motion.div 
                    className="card p-6"
                    variants={reducedMotion ? {} : slideInRight}
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Need Immediate Help?
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Alejandro</p>
                        <motion.a 
                          href={`tel:${CONTACT.phones.alejandro}`}
                          className="text-lg font-semibold text-red-600 hover:text-red-700 inline-block"
                          whileHover={{ x: 2 }}
                          transition={{ duration: 0.2 }}
                        >
                          {CONTACT.phones.alejandro}
                        </motion.a>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Javier</p>
                        <motion.a 
                          href={`tel:${CONTACT.phones.javier}`}
                          className="text-lg font-semibold text-red-600 hover:text-red-700 inline-block"
                          whileHover={{ x: 2 }}
                          transition={{ duration: 0.2 }}
                        >
                          {CONTACT.phones.javier}
                        </motion.a>
                      </div>
                      <div className="pt-3 border-t">
                        <p className="text-sm text-gray-600 mb-1">Email</p>
                        <motion.a 
                          href={`mailto:${CONTACT.email}`}
                          className="text-base text-red-600 hover:text-red-700 inline-block"
                          whileHover={{ x: 2 }}
                          transition={{ duration: 0.2 }}
                        >
                          {CONTACT.email}
                        </motion.a>
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="card p-6"
                    variants={reducedMotion ? {} : slideInRight}
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Emergency Service
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Kitchen down? We offer same-day emergency repairs when available.
                    </p>
                    <motion.div
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 3,
                      }}
                    >
                      <Badge variant="primary">Available 7 Days/Week</Badge>
                    </motion.div>
                  </motion.div>
                </AnimatedSection>
              </div>
            </div>
          </Container>
        </section>
      </main>
      
      <Footer />
    </>
  );
} 