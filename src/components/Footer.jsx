import React from 'react'
import { FiMail, FiPhone, FiMapPin, FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="md:col-span-2 space-y-6">
            <h3 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400">
              IELTSPro
            </h3>
            <p className="text-gray-400 leading-relaxed max-w-md">
              Your pathway to IELTS success. We provide comprehensive training, expert guidance, and cutting-edge technology to help you achieve your desired band score.
            </p>

            <div className="space-y-3 text-gray-400">
              <div className="flex items-center gap-3">
                <FiMapPin />
                123 Education Street, Learning City, LC 12345
              </div>
              <div className="flex items-center gap-3">
                <FiPhone />
                +91 98765 43210
              </div>
              <div className="flex items-center gap-3">
                <FiMail />
                info@ieltspro.com
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-white transition">Home</a></li>
              <li><a href="#features" className="hover:text-white transition">Courses</a></li>
              <li><a href="#testimonials" className="hover:text-white transition">Success Stories</a></li>
              <li><a href="#about" className="hover:text-white transition">About Us</a></li>
              <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* Courses */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Courses</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">Academic IELTS</a></li>
              <li><a href="#" className="hover:text-white transition">General Training</a></li>
              <li><a href="#" className="hover:text-white transition">Speaking Mastery</a></li>
              <li><a href="#" className="hover:text-white transition">Writing Workshop</a></li>
              <li><a href="#" className="hover:text-white transition">Intensive Crash Course</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 IELTSPro. Developed by <span className="font-semibold text-white">💗Awsiyan Waghe</span>. All rights reserved.
          </p>

          <div className="flex space-x-5 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              <FiFacebook size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              <FiTwitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              <FiInstagram size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Optional background gradient / shape */}
      <div className="absolute -bottom-20 left-0 w-96 h-96 bg-purple-700/20 rounded-full filter blur-3xl"></div>
      <div className="absolute -top-20 right-0 w-80 h-80 bg-cyan-500/20 rounded-full filter blur-3xl"></div>
    </footer>
  )
}

export default Footer
