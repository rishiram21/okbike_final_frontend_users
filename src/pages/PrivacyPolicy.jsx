import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Shield, Mail, AlertCircle, Eye, Lock, Database, Share2, Cookie, UserCheck } from 'lucide-react';

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const privacyPolicyData = [
    {
      id: 'information-collection',
      title: 'Information We Collect',
      icon: <Database className="w-6 h-6" />,
      color: 'bg-orange-100 text-orange-600',
      items: [
        {
          id: 'personal-info',
          title: 'Personal Information',
          description: 'Name, phone number, email address, address, government-issued ID (e.g., Aadhar card, driver\'s license) for rental verification.',
          type: 'info'
        },
        {
          id: 'payment-info',
          title: 'Payment Information',
          description: 'Credit/debit card details, UPI, or other payment details (processed via secure payment gateways).',
          type: 'important'
        },
        {
          id: 'usage-info',
          title: 'Usage Information',
          description: 'Data about your use of the website, such as IP address, browser type, and pages visited.',
          type: 'info'
        },
        {
          id: 'location-data',
          title: 'Location Data',
          description: 'With your consent, we may collect location data to help locate nearby rental spots.',
          type: 'warning'
        }
      ]
    },
    {
      id: 'information-usage',
      title: 'How We Use Your Information',
      icon: <Eye className="w-6 h-6" />,
      color: 'bg-orange-100 text-orange-600',
      items: [
        {
          id: 'process-bookings',
          title: 'Process and Manage Bookings',
          description: 'We use your information to handle your rental bookings and manage your account.',
          type: 'success'
        },
        {
          id: 'verify-identity',
          title: 'Identity Verification',
          description: 'Verify your identity for rentals to ensure security and compliance.',
          type: 'important'
        },
        {
          id: 'communication',
          title: 'Communication',
          description: 'Send booking updates, promotions, or customer support communications.',
          type: 'info'
        },
        {
          id: 'service-improvement',
          title: 'Service Improvement',
          description: 'Improve our website and services based on usage patterns and feedback.',
          type: 'success'
        },
        {
          id: 'legal-compliance',
          title: 'Legal Compliance',
          description: 'Comply with legal obligations and regulatory requirements.',
          type: 'warning'
        }
      ]
    },
    {
      id: 'information-sharing',
      title: 'Sharing Your Information',
      icon: <Share2 className="w-6 h-6" />,
      color: 'bg-orange-100 text-orange-600',
      items: [
        {
          id: 'no-selling',
          title: 'No Selling or Renting',
          description: 'We do not sell or rent your personal information to third parties.',
          type: 'success'
        },
        {
          id: 'service-providers',
          title: 'Service Providers',
          description: 'Payment processors, cloud storage providers, and verification services that help us operate our business.',
          type: 'info'
        },
        {
          id: 'law-enforcement',
          title: 'Law Enforcement',
          description: 'When required by law or to protect our legal rights and the safety of our users.',
          type: 'warning'
        }
      ]
    },
    {
      id: 'data-security',
      title: 'Data Security & Protection',
      icon: <Lock className="w-6 h-6" />,
      color: 'bg-orange-100 text-orange-600',
      items: [
        {
          id: 'security-measures',
          title: 'Security Measures',
          description: 'We implement reasonable security measures to protect your personal information from unauthorized access.',
          type: 'success'
        },
        {
          id: 'transmission-security',
          title: 'Transmission Limitations',
          description: 'No method of transmission over the Internet is completely secure. We strive to protect your data but cannot guarantee absolute security.',
          type: 'warning'
        },
        {
          id: 'secure-payments',
          title: 'Secure Payment Processing',
          description: 'All payment information is processed through secure, encrypted payment gateways.',
          type: 'important'
        }
      ]
    },
    {
      id: 'cookies-tracking',
      title: 'Cookies & Tracking',
      icon: <Cookie className="w-6 h-6" />,
      color: 'bg-orange-100 text-orange-600',
      items: [
        {
          id: 'cookie-usage',
          title: 'Cookie Usage',
          description: 'Our website may use cookies to enhance user experience and improve functionality.',
          type: 'info'
        },
        {
          id: 'cookie-control',
          title: 'Cookie Control',
          description: 'You can choose to disable cookies through your browser settings, though this may affect website functionality.',
          type: 'warning'
        }
      ]
    },
    {
      id: 'user-rights',
      title: 'Your Privacy Rights',
      icon: <UserCheck className="w-6 h-6" />,
      color: 'bg-orange-100 text-orange-600',
      items: [
        {
          id: 'access-update',
          title: 'Access or Update Information',
          description: 'You have the right to access or update your personal information stored with us.',
          type: 'success'
        },
        {
          id: 'data-deletion',
          title: 'Request Data Deletion',
          description: 'Request deletion of your data (subject to legal retention requirements).',
          type: 'info'
        },
        {
          id: 'withdraw-consent',
          title: 'Withdraw Consent',
          description: 'Withdraw consent where applicable for data processing activities.',
          type: 'warning'
        },
        {
          id: 'exercise-rights',
          title: 'How to Exercise Rights',
          description: 'To exercise these rights, contact us at okloadexpress11@gmail.com or through our customer support.',
          type: 'important'
        }
      ]
    }
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case 'important':
        return 'border-red-200 bg-red-50';
      case 'success':
        return 'border-green-200 bg-green-50';
      case 'warning':
        return 'border-yellow-200 bg-yellow-50';
      case 'info':
        return 'border-blue-200 bg-blue-50';
      default:
        return 'border-gray-200 bg-gray-50';
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'important':
        return <AlertCircle className="w-4 h-4 text-red-500" />;
      case 'success':
        return <Shield className="w-4 h-4 text-green-500" />;
      case 'warning':
        return <AlertCircle className="w-4 h-4 text-yellow-500" />;
      case 'info':
        return <AlertCircle className="w-4 h-4 text-blue-500" />;
      default:
        return <AlertCircle className="w-4 h-4 text-gray-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <Shield className="w-16 h-16 mx-auto mb-4 opacity-90" />
          <h1 className="text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            How we collect, use, and protect your personal information at OK Bike Rentals
          </p>
        </div>
      </div>

      {/* Introduction */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-8 mb-8 border-l-4 border-orange-500">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <Shield className="w-8 h-8 text-orange-500 mr-3" />
              Introduction
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              At OK Bike Rentals, we are committed to protecting the privacy and security of our customers' personal information. 
              This Privacy Policy outlines how we collect, use, share, and protect your information when you use our website and services.
            </p>
          </div>
        </div>
      </div>

      {/* Policy Content */}
      <div className="container mx-auto px-4 pb-12">
        <div className="max-w-4xl mx-auto">
          {privacyPolicyData.map((section) => (
            <div key={section.id} className="mb-8">
              {/* Section Header */}
              <div 
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer border-l-4 border-orange-500"
                onClick={() => toggleSection(section.id)}
              >
                <div className="p-6 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-lg ${section.color}`}>
                      {section.icon}
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800">{section.title}</h2>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-500 bg-orange-100 px-3 py-1 rounded-full">
                      {section.items.length} items
                    </span>
                    {activeSection === section.id ? 
                      <ChevronUp className="w-6 h-6 text-orange-500" /> : 
                      <ChevronDown className="w-6 h-6 text-orange-500" />
                    }
                  </div>
                </div>
              </div>

              {/* Section Content */}
              {activeSection === section.id && (
                <div className="mt-4 space-y-3">
                  {section.items.map((item, index) => (
                    <div key={item.id} className={`bg-white rounded-lg shadow-sm border overflow-hidden ${getTypeColor(item.type)}`}>
                      <div className="p-4">
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 mt-1">
                            <div className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">
                              {index + 1}
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              {getTypeIcon(item.type)}
                              <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                            </div>
                            <p className="text-gray-700 leading-relaxed">{item.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Sections */}
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Third-Party Links */}
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500">
            <div className="flex items-start space-x-3">
              <Share2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Third-Party Links</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our website may contain links to external websites. We are not responsible for the privacy practices of those sites. 
                  We encourage you to review the privacy policies of any third-party sites you visit.
                </p>
              </div>
            </div>
          </div>

          {/* Policy Updates */}
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-yellow-500">
            <div className="flex items-start space-x-3">
              <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Changes to This Policy</h3>
                <p className="text-gray-700 leading-relaxed">
                  We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. 
                  Changes will be posted on this page with the updated date. We encourage you to review this policy periodically.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="max-w-4xl mx-auto mt-12">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-8 text-white">
            <div className="text-center mb-8">
              <Mail className="w-12 h-12 mx-auto mb-4 opacity-90" />
              <h3 className="text-2xl font-bold mb-4">Questions About Our Privacy Policy?</h3>
              <p className="text-lg opacity-90 mb-6">
                If you have questions or concerns about this privacy policy or how we handle your personal information, 
                our team is here to help.
              </p>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 mb-6">
              <div className="text-center">
                <h4 className="text-xl font-semibold mb-4">Contact Information</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-center space-x-2 bg-white bg-opacity-20 rounded-lg px-4 py-2">
                    <Mail className="w-5 h-5" />
                    <a 
                      href="mailto:okloadexpress11@gmail.com" 
                      className="text-white hover:text-orange-200 transition-colors duration-200"
                    >
                      okloadexpress11@gmail.com
                    </a>
                  </div>
                  <div className="text-lg">
                    <strong>OK Bike Rentals</strong><br />
                    Koregaon Park, Pune, Maharashtra, India
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-600 font-semibold px-6 py-3 rounded-lg hover:bg-orange-50 transition-colors duration-200">
                Contact Support
              </button>
              <button className="border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-orange-600 transition-colors duration-200">
                Live Chat
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-gray-600">
            Last updated: {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;