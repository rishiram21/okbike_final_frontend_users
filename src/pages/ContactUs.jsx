import React, { useState } from 'react';
import { Phone, Mail, MessageCircle, Clock, MapPin, Send, Building, Users } from 'lucide-react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    }, 1000);
  };

  const ContactCard = ({ icon: Icon, title, children, className = "" }) => (
    <div className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-orange-500 ${className}`}>
      <div className="flex items-center mb-4">
        <div className="bg-orange-100 p-3 rounded-full mr-4">
          <Icon className="w-6 h-6 text-orange-600" />
        </div>
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
      </div>
      <div className="text-gray-600 leading-relaxed">
        {children}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4 animate-fade-in">Get in Touch</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            We're here to help you with all your bike rental needs. Reach out to us anytime!
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 -mt-10 relative z-10">
        {/* Quick Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Call Us Now</h3>
            <p className="text-orange-600 font-semibold">+91 7767060670 / +91 9112412191 </p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">WhatsApp</h3>
            <a href="https://wa.me/9112412191" className="text-orange-600 font-semibold hover:underline">
              Chat with us
            </a>
          </div>
          
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Email Support</h3>
            <a href="mailto:okbikerentals@gmail.com" className="text-orange-600 font-semibold hover:underline">
              okbikerentals@gmail.com
            </a>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <ContactCard icon={Building} title="Head Office">
              <p className="text-lg">
                <strong>RideNow Rentals Pvt. Ltd.</strong><br />
                32, C Lane, Ragvilas Society, Koregaon Park,<br />
                Pune, Maharashtra - 411001
              </p>
            </ContactCard>

            <ContactCard icon={Phone} title="Phone Numbers">
              <div className="space-y-2">
                <p><strong> Support:</strong> +91 7767060670 / 
                    +91 9112412191
                </p>
              </div>
            </ContactCard>

            <ContactCard icon={MessageCircle} title="WhatsApp Support">
              <p>Available 8 AM to 10 PM, All Days</p>
              <a href="https://wa.me/9112412191" className="inline-flex items-center mt-2 text-orange-600 hover:text-orange-700 font-semibold">
                <MessageCircle className="w-4 h-4 mr-1" />
                Start WhatsApp Chat
              </a>
            </ContactCard>

            <ContactCard icon={Mail} title="Email Contacts">
              <div className="space-y-2">
                <p><strong>General Queries:</strong> <a href="mailto:okbikerentals@gmail.com" className="text-orange-600 hover:underline">okbikerentals@gmail.com</a></p>
                
              </div>
            </ContactCard>

            <ContactCard icon={Clock} title="Operating Hours">
              <p className="text-lg">
                <strong>Monday – Sunday:</strong> 7:00 AM to 11:00 PM
              </p>
            </ContactCard>

            <ContactCard icon={MapPin} title="Service Areas">
              <p className="mb-3">We currently serve these areas in Pune:</p>
              <div className="flex flex-wrap gap-2">
                {['Koregaon Park', 'Viman Nagar', 'Kalyani Nagar', 'Hinjawadi', 'Baner', 'Aundh', 'Hadapsar', 'Magarpatta', 'Wakad', 'Pimpri'].map((area) => (
                  <span key={area} className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                    {area}
                  </span>
                ))}
              </div>
              <p className="mt-3">
                <a href="/coverage" className="text-orange-600 hover:underline font-semibold">
                  Check full service coverage →
                </a>
              </p>
            </ContactCard>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-orange-500 h-fit">
            <div className="flex items-center mb-6">
              <div className="bg-orange-100 p-3 rounded-full mr-4">
                <Send className="w-6 h-6 text-orange-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Send Us a Message</h2>
            </div>

            {submitted ? (
              <div className="text-center py-8">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Message Sent!</h3>
                <p className="text-gray-600">We'll get back to you within 2 working hours.</p>
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors duration-200"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors duration-200"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors duration-200"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors duration-200 resize-none"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 rounded-xl font-bold text-lg hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </div>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Social Media Section */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Connect With Us</h2>
          <div className="flex justify-center space-x-6">
            {[
              { name: 'Instagram', icon: '📷', color: 'hover:bg-pink-500', url: 'https://instagram.com' },
              { name: 'Facebook', icon: '📘', color: 'hover:bg-blue-600', url: 'https://facebook.com' },
              { name: 'Twitter', icon: '🐦', color: 'hover:bg-blue-400', url: 'https://twitter.com' },
              { name: 'LinkedIn', icon: '💼', color: 'hover:bg-blue-700', url: 'https://linkedin.com' }
            ].map((social) => (
              <a
                key={social.name}
                href={social.url}
                className={`w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center text-2xl hover:text-white transition-all duration-300 transform hover:scale-110 ${social.color}`}
                title={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;