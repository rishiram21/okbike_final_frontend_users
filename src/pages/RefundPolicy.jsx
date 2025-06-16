import React, { useState } from 'react';
import { ChevronDown, ChevronUp, RefreshCw, Mail, AlertCircle, Clock } from 'lucide-react';

const RefundPolicy = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const policyData = [
    {
      id: 'eligibility',
      title: 'Eligibility for Refunds',
      icon: <RefreshCw className="w-6 h-6" />,
      color: 'bg-orange-100 text-orange-600',
      items: [
        {
          id: 'trip-started',
          title: 'Trip Started Policy',
          description: 'Once the trip has started, cancellations will not be considered, and the full rental amount must be paid.',
          type: 'important'
        },
        {
          id: 'advance-cancellation',
          title: 'Advance Cancellation Window',
          description: 'Cancellations made at least 2 hours before the trip start time will be eligible for a refund.',
          type: 'success'
        },
        {
          id: 'last-minute',
          title: 'Last Minute Cancellations',
          description: 'No refunds will be issued for cancellations made less than 2 hours before the trip starts.',
          type: 'warning'
        },
        {
          id: 'processing-time',
          title: 'Processing Timeline',
          description: 'Refunds for eligible cancellations will be processed within 5-7 business days.',
          type: 'info'
        },
        {
          id: 'no-pickup',
          title: 'No-Show Policy',
          description: 'If the bike is not picked up or delivered as per the booking, no refund will be provided.',
          type: 'important'
        },
        {
          id: 'payment-method',
          title: 'Refund Method',
          description: 'Refunds will only be issued to the original payment method used during booking.',
          type: 'info'
        },
        {
          id: 'terms-violation',
          title: 'Terms Violation',
          description: 'If the customer violates the terms of use, the booking will be canceled without a refund.',
          type: 'warning'
        },
        {
          id: 'policy-changes',
          title: 'Policy Modifications',
          description: 'The company reserves the right to modify the refund and cancellation policy without prior notice.',
          type: 'info'
        }
      ]
    },
    {
      id: 'process',
      title: 'Cancellation Process',
      icon: <Clock className="w-6 h-6" />,
      color: 'bg-orange-100 text-orange-600',
      items: [
        {
          id: 'how-to-cancel',
          title: 'How to Cancel',
          description: 'You can cancel your booking through the app or website by navigating to your booking details and selecting the cancel option.',
          type: 'info'
        },
        {
          id: 'cancellation-confirmation',
          title: 'Confirmation Process',
          description: 'Once you initiate cancellation, you will receive a confirmation email with your cancellation reference number.',
          type: 'success'
        },
        {
          id: 'refund-request',
          title: 'Refund Request',
          description: 'Eligible refunds will be automatically processed. No separate refund request is required for policy-compliant cancellations.',
          type: 'info'
        },
        {
          id: 'status-tracking',
          title: 'Status Tracking',
          description: 'You can track your refund status through the app or by contacting customer support with your cancellation reference number.',
          type: 'info'
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
        return <RefreshCw className="w-4 h-4 text-green-500" />;
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
          <RefreshCw className="w-16 h-16 mx-auto mb-4 opacity-90" />
          <h1 className="text-5xl font-bold mb-4">Refund & Cancellation Policy</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Understanding our refund and cancellation terms for OKBike rentals
          </p>
        </div>
      </div>

      {/* Policy Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {policyData.map((section) => (
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

        {/* Contact Section */}
        <div className="max-w-4xl mx-auto mt-12">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-8 text-white">
            <div className="text-center mb-8">
              <Mail className="w-12 h-12 mx-auto mb-4 opacity-90" />
              <h3 className="text-2xl font-bold mb-4">Need Help with Refunds?</h3>
              <p className="text-lg opacity-90 mb-6">
                If you have any questions or concerns about our Refund Policy or need assistance with a refund request, 
                please contact our customer support team.
              </p>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-center">
                <h4 className="text-xl font-semibold mb-4">Contact Information</h4>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-lg px-4 py-2">
                    <Mail className="w-5 h-5" />
                    <span>Through the app</span>
                  </div>
                  <div className="text-white font-semibold">OR</div>
                  <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-lg px-4 py-2">
                    <Mail className="w-5 h-5" />
                    <a 
                      href="mailto:okloadexpress11@gmail.com" 
                      className="text-white hover:text-orange-200 transition-colors duration-200"
                    >
                      okloadexpress11@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
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

export default RefundPolicy;