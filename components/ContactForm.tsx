'use client';

import React, { useState } from 'react';
import { FORM_OPTIONS } from '@/lib/constants';

interface FormData {
  fullName: string;
  companyName: string;
  phone: string;
  email: string;
  serviceNeeded: string;
  urgency: string;
  city: string;
  county: string;
  contactMethod: string;
  description: string;
  consent: boolean;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    companyName: '',
    phone: '',
    email: '',
    serviceNeeded: '',
    urgency: '',
    city: '',
    county: '',
    contactMethod: '',
    description: '',
    consent: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        // Reset form after successful submission
        setFormData({
          fullName: '',
          companyName: '',
          phone: '',
          email: '',
          serviceNeeded: '',
          urgency: '',
          city: '',
          county: '',
          contactMethod: '',
          description: '',
          consent: false,
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block body-sm text-gray-700 mb-3 uppercase tracking-[0.1em]">
            Full Name *
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            required
            value={formData.fullName}
            onChange={handleInputChange}
            className="input-field"
          />
        </div>

        {/* Company Name */}
        <div>
          <label htmlFor="companyName" className="block body-sm text-gray-700 mb-3 uppercase tracking-[0.1em]">
            Company/Facility Name
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleInputChange}
            className="input-field"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block body-sm text-gray-700 mb-3 uppercase tracking-[0.1em]">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleInputChange}
            className="input-field"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block body-sm text-gray-700 mb-3 uppercase tracking-[0.1em]">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            className="input-field"
          />
        </div>

        {/* Service Needed */}
        <div>
          <label htmlFor="serviceNeeded" className="block body-sm text-gray-700 mb-3 uppercase tracking-[0.1em]">
            Service Needed
          </label>
          <select
            id="serviceNeeded"
            name="serviceNeeded"
            value={formData.serviceNeeded}
            onChange={handleInputChange}
            className="input-field"
          >
            <option value="">Select a service</option>
            {FORM_OPTIONS.services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>

        {/* Urgency */}
        <div>
          <label htmlFor="urgency" className="block body-sm text-gray-700 mb-3 uppercase tracking-[0.1em]">
            Urgency
          </label>
          <select
            id="urgency"
            name="urgency"
            value={formData.urgency}
            onChange={handleInputChange}
            className="input-field"
          >
            <option value="">Select urgency</option>
            {FORM_OPTIONS.urgency.map((urgency) => (
              <option key={urgency} value={urgency}>
                {urgency}
              </option>
            ))}
          </select>
        </div>

        {/* City */}
        <div>
          <label htmlFor="city" className="block body-sm text-gray-700 mb-3 uppercase tracking-[0.1em]">
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            className="input-field"
          />
        </div>

        {/* County */}
        <div>
          <label htmlFor="county" className="block body-sm text-gray-700 mb-3 uppercase tracking-[0.1em]">
            County
          </label>
          <select
            id="county"
            name="county"
            value={formData.county}
            onChange={handleInputChange}
            className="input-field"
          >
            <option value="">Select county</option>
            {FORM_OPTIONS.counties.map((county) => (
              <option key={county} value={county}>
                {county}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Contact Method */}
      <div>
        <label htmlFor="contactMethod" className="block body-sm text-gray-700 mb-3 uppercase tracking-[0.1em]">
          Preferred Contact Method
        </label>
        <select
          id="contactMethod"
          name="contactMethod"
          value={formData.contactMethod}
          onChange={handleInputChange}
          className="input-field"
        >
          <option value="">Select method</option>
          {FORM_OPTIONS.contactMethods.map((method) => (
            <option key={method} value={method}>
              {method}
            </option>
          ))}
        </select>
      </div>

      {/* Description */}
      <div>
        <label htmlFor="description" className="block body-sm text-gray-700 mb-3 uppercase tracking-[0.1em]">
          Brief Description
        </label>
        <textarea
          id="description"
          name="description"
          rows={4}
          value={formData.description}
          onChange={handleInputChange}
          className="input-field resize-none"
          placeholder="Please describe your needs or any specific issues..."
        />
      </div>

      {/* Consent */}
      <div className="flex items-start">
        <input
          type="checkbox"
          id="consent"
          name="consent"
          required
          checked={formData.consent}
          onChange={handleInputChange}
          className="mt-1 h-5 w-5 text-red-600 focus:ring-red-500 border-gray-300"
        />
        <label htmlFor="consent" className="ml-3 body-sm text-gray-700">
          You may contact me about this request. *
        </label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Submitting...' : 'Submit Request'}
      </button>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div className="p-6 bg-green-50 border border-green-200">
          <p className="text-green-800 font-medium">
            Thank you! We&apos;ve received your request and will contact you soon.
          </p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="p-6 bg-red-50 border border-red-200">
          <p className="text-red-800 font-medium">
            Sorry, there was an error submitting your request. Please try again or call us directly.
          </p>
        </div>
      )}
    </form>
  );
} 