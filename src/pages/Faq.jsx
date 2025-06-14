import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, CreditCard, Wrench, Info } from 'lucide-react';

const Faq = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
    setActiveQuestion(null);
  };

  const toggleQuestion = (questionId) => {
    setActiveQuestion(activeQuestion === questionId ? null : questionId);
  };

  const faqData = [
    {
      id: 'payment',
      title: 'Payment',
      icon: <CreditCard className="w-6 h-6" />,
      color: 'bg-orange-100 text-orange-600',
      questions: [
        {
          id: 'pay-how',
          question: 'How do I pay?',
          answer: 'You can pay online using cash-free payment using Razorpay. Cash medium is also acceptable in the outlets for bike rental as well as for other services.'
        },
        {
          id: 'fuel-included',
          question: 'Is fuel included in the tariff?',
          answer: 'No, fuel is not included in the amount you pay for two-wheeler rental.'
        },
        {
          id: 'payment-methods',
          question: 'What methods of payment does OKBike accept?',
          answer: 'At OKBike, we accept online transactions. We use the Cash-free Payment Gateway for a quick and secure payment method.'
        },
        {
          id: 'documents',
          question: 'What documents are required to book a bike?',
          answer: 'You basically need two documents to be verified by us in original: 1. Driving License, Aadhaar Card (front and back side). To get a Self-Driven Bike Rental, the rider needs to be 18 years of age or older.'
        },
        {
          id: 'extend-booking',
          question: 'Can I extend my booking? What are the charges for the same?',
          answer: 'Yes, you can extend the booking. A trip extension request is to be made at least 1 hour before the drop-off time. Such requests are to be made to the online or OKBike executive/Franchisee over the phone.',
          details: [
            'For weekdays (Monday to Friday) – INR 100/- per hour will be charged (Valid till store timings)',
            'For weekends (Saturday & Sunday) – Full day booking charges applicable (Valid till store timings)'
          ]
        },
        {
          id: 'reschedule',
          question: 'Can I reschedule my booking?',
          answer: 'Rescheduling of an existing reservation is not available as the bikes have already been booked and reserved for you by us. However, you may request the Store Executive for your current booking to reschedule, but this is subject to the availability of bikes at the store.'
        },
        {
          id: 'cancel-booking',
          question: 'How to cancel my booking? What is the cancellation policy?',
          answer: 'You can simply cancel your booking on the website. We do have a cancellation policy. The rider has to cancel their booking before the admin accepts the booking.'
        },
        {
          id: 'extend-trip',
          question: 'Can I extend my trip after it ends?',
          answer: 'No, you cannot extend the trip after it ends.'
        }
      ]
    },
    {
      id: 'damage',
      title: 'Damage & Breakdowns',
      icon: <Wrench className="w-6 h-6" />,
      color: 'bg-orange-100 text-orange-600',
      questions: [
        {
          id: 'breakdown-assistance',
          question: 'If my bike breaks down, will I get any assistance?',
          answer: 'We provide well-serviced bikes on rental, but if your two-wheeler rental breaks down, take the help of a mechanic to resolve the problem on the spot. If it is a service issue with the vehicle, we will reimburse the total amount back to you.'
        },
        {
          id: 'flat-tire',
          question: 'What do I do in case I have a flat tire during my ride?',
          answer: 'We ensure to provide you with well-serviced rental bikes, and in case you get a flat tire during your ride, then it must be because of the track you are driving on. So, it\'s the rider\'s responsibility to cover the puncture charges.'
        },
        {
          id: 'damage-payment',
          question: 'Do I have to pay if the bike gets damaged?',
          answer: 'Yes, if rental bikes get damaged during your ride, you are obliged to pay the actual damage charges.'
        },
        {
          id: 'late-return-breakdown',
          question: 'What if I return the bike late because the bike broke down? Will I be fined?',
          answer: 'Call us and let us know what happened. If the reason is deemed genuine and we verify it from our GPS feedback, you will not be charged any penalties.'
        },
        {
          id: 'puncture-handling',
          question: 'What should I do in case of a puncture?',
          answer: 'In case of a tire puncture, find the nearest bike mechanic and get the puncture fixed. As punctures of tires are unpredictable and depend upon various other factors like terrain, style of riding, etc., it does not qualify as a responsibility of OKBikes.'
        }
      ]
    },
    {
      id: 'miscellaneous',
      title: 'General Information',
      icon: <Info className="w-6 h-6" />,
      color: 'bg-orange-100 text-orange-600',
      questions: [
        {
          id: 'helmet',
          question: 'Will I get a complimentary helmet?',
          answer: 'Yes, you get a complimentary helmet from our side, and an extra helmet charge of INR 50 per day will be charged separately if the rider needs an extra helmet, subject to availability.'
        },
        {
          id: 'km-limit',
          question: 'Is there any kilometer capping?',
          answer: 'Yes, there is a limit on kilometers you can drive, which is 200 km. If you exceed the km limit, a per km rate will be applicable to you, which starts from INR 3/km.',
          details: [
            'Hourly: 10 Kms',
            '6 Hours: 60 Kms',
            '1 day: 150 Kms',
            '2 days: 300 Kms',
            '3 days: 425 Kms',
            '5 days: 625 Kms',
            '6 days: 675 Kms',
            '7 days: 750 Kms',
            '10 days: 1100 Kms',
            '15 days: 1700 Kms',
            '20 days: 2000 Kms',
            '30 days: 2400 Kms'
          ]
        },
        {
          id: 'multiple-vehicles',
          question: 'Can I book multiple vehicles with a single user ID?',
          answer: 'While it is possible to book multiple vehicles with a single user ID, we recommend using different user IDs for each booking. This is because we need to perform a KYC process for each user at the store. Additionally, please note that even if you book multiple vehicles using a single user ID, you will still need to provide separate rider licenses for each booking.'
        },
        {
          id: 'speed-limit',
          question: 'Is there any speed limit while driving the rental bike?',
          answer: 'Yes, there is a speed limit while you drive the rental bikes. Vehicles are equipped with devices that will track rash driving, and if you\'re found overspeeding or driving rashly, you\'ll be fined INR 200.',
          details: [
            'Outside city: 70 Km/hr for scooters, 90 Km/hr for geared vehicles',
            'Inside city: 50 Km/hr for scooters, 60 Km/hr for geared vehicles'
          ]
        },
        {
          id: 'timings',
          question: 'What is the check-in and check-out timing?',
          answer: 'Check-in and check-out timings are 9:00 AM and 9:00 PM, respectively.'
        },
        {
          id: 'late-charges',
          question: 'What are the late return charges?',
          answer: 'Late return charges vary based on vehicle type and day of the week.',
          details: [
            'Non-geared vehicles: First 2 hours of delay would be charged at ₹100 + hourly rates',
            'Royal Enfields: First 2 hours of delay would be charged at ₹250 + hourly rates',
            'All Other Bikes: First 2 hours of delay would be charged at ₹200 + hourly rates',
            'Post 2 hours: Subsequent hourly charges will be applicable on weekdays (Mon–Fri)',
            'On weekends (Sat-Sun): 24 Hrs rental charges will be applicable as per company policy'
          ]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <HelpCircle className="w-16 h-16 mx-auto mb-4 opacity-90" />
          <h1 className="text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Find answers to common questions about OKBike rentals, payments, and policies
          </p>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {faqData.map((section) => (
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
                      {section.questions.length} questions
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
                  {section.questions.map((qa) => (
                    <div key={qa.id} className="bg-white rounded-lg shadow-sm border border-orange-100 overflow-hidden">
                      <div 
                        className="p-4 hover:bg-orange-50 cursor-pointer transition-colors duration-200"
                        onClick={() => toggleQuestion(qa.id)}
                      >
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-semibold text-gray-800 pr-4">{qa.question}</h3>
                          {activeQuestion === qa.id ? 
                            <ChevronUp className="w-5 h-5 text-orange-500 flex-shrink-0" /> : 
                            <ChevronDown className="w-5 h-5 text-orange-500 flex-shrink-0" />
                          }
                        </div>
                      </div>
                      
                      {activeQuestion === qa.id && (
                        <div className="px-4 pb-4 border-t border-orange-100 bg-orange-50">
                          <div className="pt-4">
                            <p className="text-gray-700 leading-relaxed mb-3">{qa.answer}</p>
                            {qa.details && (
                              <div className="bg-white rounded-lg p-4 border border-orange-200">
                                <h4 className="font-semibold text-gray-800 mb-2">Details:</h4>
                                <ul className="space-y-2">
                                  {qa.details.map((detail, index) => (
                                    <li key={index} className="flex items-start">
                                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                      <span className="text-gray-700">{detail}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="max-w-4xl mx-auto mt-12">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
            <p className="text-lg opacity-90 mb-6">
              Can't find what you're looking for? Our support team is here to help!
            </p>
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
      </div>
    </div>
  );
};

export default Faq;