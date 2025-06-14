import React, { useState } from "react";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

const Footer = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="bg-gradient-to-b from-gray-800 to-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-8 lg:py-12">
        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white border-b border-orange-500 pb-2 mb-4">
              About Us
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              We provide the best bike rental service, ensuring a smooth and
              adventurous ride experience. Your safety and comfort are our
              priority!
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white border-b border-orange-500 pb-2 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Contact Us", href: "/contactus" },
                { name: "Terms & Conditions", href: "/terms" },
                { name: "FAQs", href: "/faq" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 text-sm hover:text-orange-400 hover:translate-x-2 transition-all duration-300 block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white border-b border-orange-500 pb-2 mb-4">
              Contact Info
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-orange-400 mt-1 flex-shrink-0" size={16} />
                <p className="text-gray-300 text-sm leading-relaxed">
                  32, C Lane, Ragvilas Society, Koregaon Park, Pune, Maharashtra 411001
                </p>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-orange-400 flex-shrink-0" size={16} />
                <div className="text-gray-300 text-sm">
                  <a href="tel:+917767060670" className="hover:text-orange-400 transition-colors block">
                    +91 7767060670
                  </a>
                  <a href="tel:+919112412191" className="hover:text-orange-400 transition-colors block">
                    +91 9112412191
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-orange-400 flex-shrink-0" size={16} />
                <a
                  href="mailto:okloadexpress11@gmail.com"
                  className="text-gray-300 text-sm hover:text-orange-400 transition-colors"
                >
                  okloadexpress11@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white border-b border-orange-500 pb-2 mb-4">
              Follow Us
            </h3>
            <div className="flex gap-4">
              {[
                { 
                  icon: FaFacebookF, 
                  href: "https://www.facebook.com/profile.php?id=61577013062800",
                  label: "Facebook",
                  color: "hover:bg-blue-600"
                },
                { 
                  icon: FaYoutube, 
                  href: "#",
                  label: "YouTube",
                  color: "hover:bg-red-600"
                },
                { 
                  icon: FaInstagram, 
                  href: "https://www.instagram.com/okbikerentals?igsh=OTQyM3Y2cDMweGY3",
                  label: "Instagram",
                  color: "hover:bg-pink-600"
                },
                { 
                  icon: FaLinkedinIn, 
                  href: "#",
                  label: "LinkedIn",
                  color: "hover:bg-blue-700"
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className={`w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:transform hover:scale-110 ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
            <p className="text-gray-400 text-xs mt-4">
              Stay connected for updates and special offers!
            </p>
          </div>
        </div>

        {/* Mobile Layout - Collapsible Sections */}
        <div className="md:hidden space-y-4">
          {/* About Section */}
          <div className="bg-gray-700 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection("about")}
              className="w-full px-4 py-3 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <h3 className="text-lg font-bold text-white">About Us</h3>
              {openSection === "about" ? (
                <FaChevronUp className="text-orange-400" />
              ) : (
                <FaChevronDown className="text-orange-400" />
              )}
            </button>
            {openSection === "about" && (
              <div className="px-4 pb-4">
                <p className="text-gray-300 text-sm leading-relaxed">
                  We provide the best bike rental service, ensuring a smooth and
                  adventurous ride experience. Your safety and comfort are our
                  priority!
                </p>
              </div>
            )}
          </div>

          {/* Quick Links Section */}
          <div className="bg-gray-700 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection("links")}
              className="w-full px-4 py-3 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <h3 className="text-lg font-bold text-white">Quick Links</h3>
              {openSection === "links" ? (
                <FaChevronUp className="text-orange-400" />
              ) : (
                <FaChevronDown className="text-orange-400" />
              )}
            </button>
            {openSection === "links" && (
              <div className="px-4 pb-4">
                <ul className="space-y-3">
                  {[
                    { name: "Home", href: "/" },
                    { name: "About Us", href: "/about" },
                    { name: "Contact Us", href: "/contactus" },
                    { name: "Terms & Conditions", href: "/terms" },
                    { name: "FAQs", href: "/faq" },
                  ].map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-gray-300 text-sm hover:text-orange-400 transition-colors block py-1"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Contact Info Section */}
          <div className="bg-gray-700 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection("contact")}
              className="w-full px-4 py-3 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <h3 className="text-lg font-bold text-white">Contact Info</h3>
              {openSection === "contact" ? (
                <FaChevronUp className="text-orange-400" />
              ) : (
                <FaChevronDown className="text-orange-400" />
              )}
            </button>
            {openSection === "contact" && (
              <div className="px-4 pb-4 space-y-4">
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-orange-400 mt-1 flex-shrink-0" size={16} />
                  <p className="text-gray-300 text-sm leading-relaxed">
                    32, C Lane, Ragvilas Society, Koregaon Park, Pune, Maharashtra 411001
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <FaPhone className="text-orange-400 flex-shrink-0" size={16} />
                  <div className="text-gray-300 text-sm">
                    <a href="tel:+917767060670" className="hover:text-orange-400 transition-colors block">
                      +91 7767060670
                    </a>
                    <a href="tel:+919112412191" className="hover:text-orange-400 transition-colors block">
                      +91 9112412191
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-orange-400 flex-shrink-0" size={16} />
                  <a
                    href="mailto:okloadexpress11@gmail.com"
                    className="text-gray-300 text-sm hover:text-orange-400 transition-colors break-all"
                  >
                    okloadexpress11@gmail.com
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Social Media Section - Always Visible on Mobile */}
          <div className="bg-gray-700 rounded-lg p-4">
            <h3 className="text-lg font-bold text-white mb-4 text-center">Follow Us</h3>
            <div className="flex justify-center gap-4">
              {[
                { 
                  icon: FaFacebookF, 
                  href: "https://www.facebook.com/profile.php?id=61577013062800",
                  label: "Facebook",
                  color: "hover:bg-blue-600"
                },
                { 
                  icon: FaYoutube, 
                  href: "#",
                  label: "YouTube",
                  color: "hover:bg-red-600"
                },
                { 
                  icon: FaInstagram, 
                  href: "https://www.instagram.com/okbikerentals?igsh=OTQyM3Y2cDMweGY3",
                  label: "Instagram",
                  color: "hover:bg-pink-600"
                },
                { 
                  icon: FaLinkedinIn, 
                  href: "#",
                  label: "LinkedIn",
                  color: "hover:bg-blue-700"
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className={`w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:transform hover:scale-110 ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
            <p className="text-gray-400 text-xs mt-4 text-center">
              Stay connected for updates and special offers!
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-600 bg-gray-900">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center space-y-2">
            <p className="text-sm text-gray-300">
              © {new Date().getFullYear()} Bike Rental Service. All Rights Reserved.
            </p>
            <p className="text-xs text-gray-400">
              Designed for bike enthusiasts who love adventure.
            </p>
            <p className="text-xs text-gray-500">
              Designed by <span className="text-orange-400 font-medium">Eptiq Technologies</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;