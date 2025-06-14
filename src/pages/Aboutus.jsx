import React from 'react';

const Aboutus = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 opacity-95"></div>
        <div className="relative container mx-auto px-4 py-20 mt-16">
          <div className="text-center text-white">
            <div className="inline-block p-4 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <span className="text-6xl">🛵</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              About <span className="text-white drop-shadow-lg">OK Bike</span>
            </h1>
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-xl md:text-2xl font-light leading-relaxed">
                Welcome to OK Bike – your trusted partner for fast, affordable, and reliable bike rentals in Pune.
              </p>
              <p className="text-lg md:text-xl opacity-90 leading-relaxed">
                We started OK Bikes with one simple mission: To make urban commuting and travel flexible, convenient, and fun.
              </p>
              <p className="text-lg md:text-xl opacity-90 leading-relaxed">
                Whether you're a student, tourist, working professional, or weekend explorer — we offer well-maintained bikes, transparent pricing, and a hassle-free booking experience that puts you in control of your ride.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block p-3 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full mb-4">
                <span className="text-4xl">🚀</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center">
                Founded in [Year], OK Bikes was born out of the frustration of limited, expensive, and unreliable rental options. What started with just a few bikes in Koregaon Park has now grown into a city-wide service helping thousands of users move freely every day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block p-3 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full mb-4">
              <span className="text-4xl">🏍️</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">What We Offer</h2>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: "🚲", title: "Wide Range of Bikes", desc: "Scooters, geared bikes, e-bikes & premium models" },
                { icon: "⏰", title: "Flexible Rentals", desc: "Hourly, daily, weekly, or monthly plans" },
                { icon: "📱", title: "Easy Booking", desc: "Book online in under 60 seconds" },
                { icon: "🚪", title: "Doorstep Delivery", desc: "Available in selected areas" },
                { icon: "✅", title: "Verified Fleet", desc: "Regularly serviced and safety-checked bikes" },
                { icon: "💰", title: "Affordable Pricing", desc: "No hidden charges, no surprise deposits" }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-orange-100 hover:border-orange-200">
                  <div className="text-center">
                    <div className="text-3xl mb-3">{item.icon}</div>
                    <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Where We Operate Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block p-3 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full mb-4">
                <span className="text-4xl">📍</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Where We Operate</h2>
            </div>
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl shadow-xl p-8 md:p-12 text-white">
              <p className="text-lg md:text-xl text-center leading-relaxed">
                We proudly serve major areas in Pune including: Koregaon Park, Viman Nagar, Kalyani Nagar, Hinjawadi, Baner, Hadapsar, Wakad, Camp, and more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block p-3 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full mb-4">
              <span className="text-4xl">❤️</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Why Customers Choose Us</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: "🕒", title: "24x7 Customer Support" },
                { icon: "⚡", title: "Quick KYC & Easy Returns" },
                { icon: "🗺️", title: "Real-time GPS & App Integration (Coming soon!)" },
                { icon: "⭐", title: "Highly Rated by Commuters, Travelers & Delivery Riders" },
                { icon: "🔍", title: "100% Transparent Process" }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 flex items-center space-x-4 hover:shadow-xl transition-all duration-300 border border-orange-100 hover:border-orange-200">
                  <div className="text-2xl">{item.icon}</div>
                  <div className="font-semibold text-gray-800">{item.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block p-3 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full mb-4">
                <span className="text-4xl">💡</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Vision</h2>
            </div>
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl shadow-2xl p-8 md:p-12 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
              <div className="relative">
                <p className="text-lg md:text-xl text-center leading-relaxed font-light">
                  To become India's most loved and most reliable two-wheeler rental platform, empowering people to move freely, affordably, and independently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Gradient */}
      <div className="h-20 bg-gradient-to-r from-orange-500 to-orange-600"></div>
    </div>
  );
};

export default Aboutus;