import React, { useState } from 'react';
import { FileText, Clock, Shield, AlertTriangle, Car, Phone, MapPin, Calendar, CheckCircle, XCircle, AlertCircle, Scale, Mail } from 'lucide-react';

const TermsAndConditions = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleSection = (index) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  const termsData = [
    {
      id: 1,
      title: "Return Policy",
      icon: Clock,
      category: "Rental Rules",
      content: "The two-wheeler needs to be returned at the specified Date and Time as mentioned on the website/invoice copy. A delay of more than 15 minutes without intimating RideNow executive will cause penalty.",
      highlight: "15 minutes grace period"
    },
    {
      id: 2,
      title: "Trip Extension",
      icon: Calendar,
      category: "Rental Rules",
      content: "A Trip extension request is to be made at least 1 hour before the drop-off time. Such requests are to be made to the online or RideNow executive/Franchisee over the phone.",
      details: [
        "For weekdays (Monday to Friday) – INR 50/- per hour will be charged (Valid till store timings)",
        "For weekend (Saturday & Sunday) – Full day booking charges applicable (Valid till store timings)"
      ],
      highlight: "1 hour advance notice required"
    },
    {
      id: 3,
      title: "Authorization",
      icon: Shield,
      category: "Safety & Security",
      content: "The customer is not authorized to lend the two-wheeler to any person without first informing RideNow Authority. In such cases we will need to verify the documents of the additional rider before starting the trip.",
      highlight: "Prior authorization required"
    },
    {
      id: 4,
      title: "Damage to Helmet",
      icon: Shield,
      category: "Damages & Liability",
      content: "In case of minor damages to the helmet, the customer is liable to pay fine as per vendor.",
      highlight: "Customer liability"
    },
    {
      id: 5,
      title: "Damage to Two-Wheeler",
      icon: AlertTriangle,
      category: "Damages & Liability",
      content: "In case of damage to the two-wheeler on rent due to accident/mishandling/carelessness, appropriate charges will be calculated by the Franchisee owner or RideNow executive and the customer is liable to pay the same along with the daily tariff until the bike is ready for renting again.",
      highlight: "Full repair costs + daily charges"
    },
    {
      id: 6,
      title: "Theft",
      icon: XCircle,
      category: "Damages & Liability",
      content: "In case of theft, the customer is liable to pay, in full, the market rate of the two-wheeler.",
      highlight: "Full market value liability"
    },
    {
      id: 7,
      title: "Engine Fault or Failure",
      icon: Car,
      category: "Technical Issues",
      content: "In case of engine fault or failure, the customer needs to contact the RideNow Field Executive or Franchisee before getting any repairs done. The original printed invoice is mandatory to claim reimbursement for the same.",
      highlight: "Contact us before repairs"
    },
    {
      id: 8,
      title: "Cancellation or Refund",
      icon: CheckCircle,
      category: "Booking & Payment",
      content: "For any cancellation or refund, it takes 7-10 business days for the refunded amount to reflect in your bank account.",
      highlight: "7-10 business days processing"
    },
    {
      id: 9,
      title: "Age Requirement",
      icon: Scale,
      category: "Eligibility",
      content: "The rider needs to be 18 years of age or older to rent a bike. If the rider is under the stipulated age, his or her order will be cancelled without any refund.",
      highlight: "18+ years required"
    },
    {
      id: 10,
      title: "Document Verification",
      icon: FileText,
      category: "Eligibility",
      content: "The documents mentioned below need to be verified, in original, for each rider:",
      details: [
        "Document 1 – Driving License",
        "Document 2 – Passport, Election Card, Aadhaar Card. (Any one of the above)"
      ],
      highlight: "Original documents required"
    },
    {
      id: 11,
      title: "Booking Subject to Availability",
      icon: Calendar,
      category: "Booking & Payment",
      content: "Two-wheeler bookings are subject to availability. RideNow reserves the right to cancel any booking if deemed necessary.",
      highlight: "Subject to availability"
    },
    {
      id: 12,
      title: "Traffic Rules",
      icon: AlertCircle,
      category: "Safety & Security",
      content: "Rider should respect and follow Traffic rules and regulations. All Challans issued due to rider negligence need to be paid in full to the penalizing authority.",
      highlight: "Customer pays all fines"
    },
    {
      id: 13,
      title: "Prohibition of Driving Under Influence",
      icon: XCircle,
      category: "Safety & Security",
      content: "Driving under the influence of Alcohol/Drugs is strictly prohibited. RideNow will not be responsible to compensate for any mishaps and their consequences in such cases. The customer will be liable to pay for all damages to the vendor for the same.",
      highlight: "Strictly prohibited"
    },
    {
      id: 14,
      title: "Drop Location",
      icon: MapPin,
      category: "Rental Rules",
      content: "Customer has to drop the bike at the same location from where it was picked up. No requests will be accommodated for a change in the drop location.",
      highlight: "Same pickup/drop location"
    },
    {
      id: 15,
      title: "Late Drop",
      icon: Clock,
      category: "Rental Rules",
      content: "In case a customer feels that they will be late for the drop, they should call the field executive or customer care and ask for a trip extension. Extensions are subject to availability.",
      highlight: "Call for extensions"
    },
    {
      id: 16,
      title: "Pick-up Details",
      icon: Calendar,
      category: "Booking & Payment",
      content: "The Pick-up date, time and location cannot be changed once a booking is confirmed.",
      highlight: "No changes after confirmation"
    }
  ];

  const categories = [...new Set(termsData.map(term => term.category))];

  const filteredTerms = termsData.filter(term =>
    term.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    term.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
    term.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getCategoryColor = (category) => {
    const colors = {
      "Rental Rules": "bg-blue-100 text-blue-800",
      "Safety & Security": "bg-red-100 text-red-800",
      "Damages & Liability": "bg-yellow-100 text-yellow-800",
      "Technical Issues": "bg-green-100 text-green-800",
      "Booking & Payment": "bg-purple-100 text-purple-800",
      "Eligibility": "bg-orange-100 text-orange-800"
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-4">
              <Scale className="w-12 h-12 mr-4" />
              <h1 className="text-4xl font-bold">Terms & Conditions</h1>
            </div>
            <p className="text-xl opacity-90 mb-8">
              Please read these terms carefully before using our bike rental services
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search terms..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 pl-12 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-300"
                />
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 -mt-8 relative z-10">
        {/* Acceptance Notice */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8 border-l-4 border-orange-500">
          <div className="flex items-start">
            <div className="bg-orange-100 p-3 rounded-full mr-6 mt-1">
              <AlertCircle className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4">Acceptance of Terms & Conditions</h2>
              <p className="text-gray-600 leading-relaxed">
                Thank you for using RideNow.com. By using our website, mobile application, and services, you agree to be bound by these Terms & Conditions. 
                These terms outline your legal rights and responsibilities when using our bike rental services.
              </p>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Categories</h3>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <span
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium ${getCategoryColor(category)}`}
              >
                {category}
              </span>
            ))}
          </div>
        </div>

        {/* Terms List */}
        <div className="space-y-4">
          {filteredTerms.map((term, index) => {
            const IconComponent = term.icon;
            const isExpanded = expandedSection === index;
            
            return (
              <div
                key={term.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div
                  className="p-6 cursor-pointer hover:bg-orange-50 transition-colors duration-200"
                  onClick={() => toggleSection(index)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center flex-1">
                      <div className="bg-orange-100 p-3 rounded-full mr-4">
                        <IconComponent className="w-5 h-5 text-orange-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-bold text-gray-800">
                            {term.id}. {term.title}
                          </h3>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(term.category)}`}>
                            {term.category}
                          </span>
                        </div>
                        <div className="flex items-center text-sm text-orange-600 font-semibold">
                          <span className="mr-2">💡</span>
                          {term.highlight}
                        </div>
                      </div>
                    </div>
                    <div className={`transform transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}>
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                {isExpanded && (
                  <div className="px-6 pb-6 border-t border-gray-100 bg-gray-50">
                    <div className="pt-4">
                      <p className="text-gray-700 leading-relaxed mb-4">
                        {term.content}
                      </p>
                      {term.details && (
                        <div className="bg-white rounded-lg p-4 border-l-4 border-orange-500">
                          <h4 className="font-semibold text-gray-800 mb-2">Additional Details:</h4>
                          <ul className="space-y-2">
                            {term.details.map((detail, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className="text-orange-500 mr-2 mt-1">•</span>
                                <span className="text-gray-600">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact Information */}
        <div className="mt-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center">
          <div className="flex items-center justify-center mb-4">
            <Phone className="w-8 h-8 mr-3" />
            <h3 className="text-2xl font-bold">Questions About These Terms?</h3>
          </div>
          <p className="text-lg opacity-90 mb-6">
            If you have any questions about our Terms & Conditions, please don't hesitate to contact us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919876543210"
              className="bg-white text-orange-600 px-6 py-3 rounded-xl font-semibold hover:bg-orange-50 transition-colors duration-200 flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: +91 98765 43210
            </a>
            <a
              href="mailto:support@ridenow.in"
              className="bg-white text-orange-600 px-6 py-3 rounded-xl font-semibold hover:bg-orange-50 transition-colors duration-200 flex items-center justify-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Support
            </a>
          </div>
        </div>

        {/* Last Updated */}
        <div className="mt-8 text-center text-gray-500">
          <p>Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;