import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Container from './Container';
import SectionHeading from './SectionHeading';
import AnimatedSection from './AnimatedSection';
import { slideUp, slideInLeft, getReducedMotion } from '@/lib/animations';

// Service projects using actual CKS photos
const serviceProjects = [
  {
    id: 'hood-installation',
    name: 'Hood Installation & Ventilation',
    description: 'Professional hood systems and ventilation solutions',
    projects: [
      {
        id: 1,
        title: 'Commercial Kitchen Hood System',
        location: 'Los Angeles County, CA',
        image: '/CKS Service Images/service-1.jpeg',
        description: 'Complete hood installation with fire suppression system'
      },
      {
        id: 2,
        title: 'Restaurant Ventilation Upgrade',
        location: 'Orange County, CA',
        image: '/CKS Service Images/service-2.jpeg',
        description: 'Professional ventilation system installation and testing'
      },
      {
        id: 3,
        title: 'Industrial Kitchen Hood',
        location: 'Ventura County, CA',
        image: '/CKS Service Images/service-3.jpeg',
        description: 'Large-scale commercial hood system for industrial kitchen'
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
        title: 'Kitchen Electrical Systems',
        location: 'Riverside County, CA',
        image: '/CKS Service Images/service-4.jpeg',
        description: 'Complete electrical wiring and panel upgrades'
      },
      {
        id: 5,
        title: 'Equipment Power Installation',
        location: 'Santa Barbara County, CA',
        image: '/CKS Service Images/service-5.jpeg',
        description: 'High-voltage equipment installation and safety compliance'
      },
      {
        id: 7,
        title: 'Commercial Electrical Maintenance',
        location: 'Los Angeles County, CA',
        image: '/CKS Service Images/service-7.jpeg',
        description: 'Ongoing electrical system maintenance and safety inspections'
      }
    ]
  },
  {
    id: 'plumbing-services',
    name: 'Plumbing & Drainage',
    description: 'Commercial kitchen plumbing solutions',
    projects: [
      {
        id: 6,
        title: 'Commercial Plumbing Installation',
        location: 'San Diego County, CA',
        image: '/CKS Service Images/service-6.jpeg',
        description: 'Professional plumbing systems and grease management'
      }
    ]
  }
];

export default function ServiceProjectsGallery() {
  const reducedMotion = getReducedMotion();

  return (
    <section className="bg-white section-padding border-t border-light">
      <Container>
        <AnimatedSection className="text-center mb-20">
          <motion.div variants={reducedMotion ? {} : slideUp}>
            <div className="section-index">03 — 08</div>
            <h2 className="heading-lg text-gray-900 mb-6">Recent Projects</h2>
          </motion.div>
          <motion.p 
            className="body-lg text-gray-600 max-w-2xl mx-auto"
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
                <h3 className="heading-md text-gray-900 mb-4">
                  {serviceType.name}
                </h3>
                <p className="body-base text-gray-600">
                  {serviceType.description}
                </p>
              </motion.div>
              
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-start"
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
                    className="project-card group cursor-pointer"
                    variants={reducedMotion ? {} : slideUp}
                    whileHover={{ y: -6, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative overflow-hidden">
                      <Image 
                        src={project.image} 
                        alt={project.title}
                        width={400}
                        height={192}
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
              Don&apos;t See Your Project Type?
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