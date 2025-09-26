import React, { useState, useEffect } from 'react'
import { Menu, X, Zap, ArrowRight, Sparkles } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#features', label: 'Courses' },
    { href: '#testimonials', label: 'Success Stories' },
    { href: '#contact', label: 'Contact' }
  ]

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-gray-200/50' 
        : 'bg-white/80 backdrop-blur-md shadow-lg'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo Section */}
         {/* Logo Section */}
<div className="flex items-center group">
  <a href="#home" className="relative">
    <span className="text-3xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-blue-600 transition-all duration-500 cursor-pointer">
      IELTSPro
    </span>
    <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></div>
  </a>
  <div className="ml-3 px-3 py-1 bg-gradient-to-r from-green-400 to-emerald-500 text-white text-xs font-bold rounded-full animate-pulse">
    AI Powered
  </div>
</div>


          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="relative px-3 sm:px-4 py-2 text-gray-700 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:bg-clip-text font-semibold transition-all duration-300 rounded-xl group"
              >
                {item.label}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></div>
              </a>
            ))}

            {/* CTA Button */}
            <button className="ml-4 sm:ml-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-2xl font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg flex items-center justify-center transform hover:scale-105 group relative">
              <Zap className="mr-2 w-4 sm:w-5 h-4 sm:h-5 group-hover:rotate-12 transition-transform" />
              Free Trial
              <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative p-2 text-gray-700 hover:text-blue-600 focus:outline-none transition-colors duration-300 rounded-xl hover:bg-gray-100"
            >
              <Menu className={`w-6 h-6 absolute inset-0 transition-all duration-300 ${isOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'}`} />
              <X className={`w-6 h-6 absolute inset-0 transition-all duration-300 ${isOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'}`} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
          <div className="m-4 p-4 sm:p-6 space-y-2 bg-white/30 backdrop-blur-xl rounded-2xl border border-gray-200/50 shadow-xl">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-white/70 rounded-xl font-semibold transition-all duration-300 group"
              >
                <span>{item.label}</span>
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
              </a>
            ))}

            {/* Mobile CTA */}
            <div className="pt-4 border-t border-gray-200/50">
              <button
                onClick={() => setIsOpen(false)}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-2xl font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg flex items-center justify-center group relative"
              >
                <Sparkles className="mr-2 w-4 sm:w-5 h-4 sm:h-5 group-hover:rotate-12 transition-transform" />
                Start Free Trial
                <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <div className="text-center mt-2 sm:mt-3">
                <span className="text-xs sm:text-sm text-gray-500 font-medium">
                  🎯 No credit card required
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Progress Bar */}
      <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 transition-all duration-300 ${isScrolled ? 'w-full opacity-100' : 'w-0 opacity-0'}`}></div>
    </nav>
  )
}

export default Navbar
