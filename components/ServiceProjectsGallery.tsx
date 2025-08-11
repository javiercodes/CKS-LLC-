import React from 'react';
import { motion } from 'framer-motion';
import Container from './Container';
import SectionHeading from './SectionHeading';
import AnimatedSection from './AnimatedSection';
import { slideUp, slideInLeft, getReducedMotion } from '@/lib/animations';

// Sample data organized by service type
const serviceProjects = [
  {
    id: 'hood-installation',
    name: 'Hood Installation & Ventilation',
    description: 'Professional hood systems and ventilation solutions',
    projects: [
      {
        id: 1,
        title: 'Fine Dining Restaurant',
        location: 'Beverly Hills, CA',
        image: '/hero.png', // Replace with actual project image
        description: 'Custom hood installation with advanced fire suppression'
      },
      {
        id: 2,
        title: 'Hotel Kitchen Upgrade',
        location: 'Santa Monica, CA',
        image: '/services/about.png', // Replace with actual project image
        description: 'Complete ventilation overhaul for 200-room hotel'
      },
      {
        id: 3,
        title: 'Food Court Installation',
        location: 'Los Angeles, CA',
        image: '/map-image.png', // Replace with actual project image
        description: 'Multi-vendor hood system for shopping center'
      }
    ]
  },
  {
    id: 'electrical-repair',
    name: 'Electrical Repairs & Upgrades',
    description: 'Commercial kitchen electrical solutions',
    projects: [
      {
        id: 4,
        title: 'Restaurant Power Upgrade',
        location: 'Orange County, CA',
        image: '/hero.png', // Replace with actual project image
        description: 'Electrical panel upgrade and equipment wiring'
      },
      {
        id: 5,
        title: 'Kitchen Lighting Retrofit',
        location: 'Long Beach, CA',
        image: '/services/about.png', // Replace with actual project image
        description: 'LED lighting conversion with energy savings'
      },
      {
        id: 6,
        title: 'Emergency Electrical Repair',
        location: 'Pasadena, CA',
        image: '/map-image.png', // Replace with actual project image
        description: 'Same-day electrical repair for busy restaurant'
      }
    ]
  },
  {
    id: 'plumbing-services',
    name: 'Plumbing & Drainage',
    description: 'Commercial kitchen plumbing solutions',
    projects: [
      {
        id: 7,
        title: 'Grease Trap Installation',
        location: 'Riverside County, CA',
        image: '/hero.png', // Replace with actual project image
        description: 'Large capacity grease management system'
      },
      {
        id: 8,
        title: 'Kitchen Drain Cleaning',
        location: 'Ventura County, CA',
        image: '/services/about.png', // Replace with actual project image
        description: 'Complete drain system cleaning and maintenance'
      }
    ]
  }
];

export default function ServiceProjectsGallery() {
  const reducedMotion = getReducedMotion();

  return (
    <section className="bg-gray-50 py-20">
      <Container>
        <AnimatedSection className="text-center mb-16">
          <motion.div variants={reducedMotion ? {} : slideUp}>
            <SectionHeading level="h2" centered className="mb-4">
              Recent Projects by Service
            </SectionHeading>
          </motion.div>
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            variants={reducedMotion ? {} : slideUp}
          >
            Explore our completed projects organized by service type. Each project showcases 
            our commitment to quality and customer satisfaction.
          </motion.p>
        </AnimatedSection>

        <div className="space-y-16">
          {serviceProjects.map((serviceType, serviceIndex) => (
            <AnimatedSection key={serviceType.id} className="space-y-8">
              <motion.div 
                className="text-center lg:text-left"
                variants={reducedMotion ? {} : slideInLeft}
              >
                <h3 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-2">
                  {serviceType.name}
                </h3>
                <p className="text-gray-600 text-lg">
                  {serviceType.description}
                </p>
              </motion.div>
              
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={reducedMotion ? {} : {
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: serviceIndex * 0.2
                    }
                  }
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
              >
                {serviceType.projects.map((project) => (
                  <motion.div 
                    key={project.id}
                    className="card overflow-hidden group cursor-pointer"
                    variants={reducedMotion ? {} : slideUp}
                    whileHover={{ y: -6, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold text-gray-900 text-lg leading-tight">
                          {project.title}
                        </h4>
                      </div>
                      <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                        {project.description}
                      </p>
                      <p className="text-xs text-gray-500 flex items-center">
                        <span className="mr-1">📍</span>
                        {project.location}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Don't See Your Project Type?
            </h3>
            <p className="text-gray-600 mb-6">
              We handle all types of commercial kitchen projects. From custom installations 
              to emergency repairs, our team has the expertise to solve your unique challenges.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              Discuss Your Project
            </button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
} 