import React, { useState, useEffect } from 'react'
import { Play, Award, Users, Star, ArrowRight, Zap, TrendingUp, Clock, CheckCircle, BookOpen, Target } from 'lucide-react'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 sm:w-80 sm:h-80 bg-blue-500/15 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 sm:w-96 sm:h-96 bg-purple-500/15 rounded-full blur-3xl animate-float animation-delay-2000"></div>
        <div className="absolute top-1/3 right-1/4 w-60 h-60 sm:w-72 sm:h-72 bg-cyan-500/15 rounded-full blur-3xl animate-float animation-delay-4000"></div>
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center min-h-[90vh]">

          {/* Left Content */}
          <div className={`space-y-6 sm:space-y-8 lg:space-y-10 z-10 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            
            {/* Enhanced Badge */}
            <div className="mt-5 group inline-flex items-center px-4 sm:px-5 py-2 sm:py-2.5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-xs sm:text-sm font-medium hover:scale-105 transition-all duration-300 cursor-default hover:bg-white/10">
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <Award className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />
                  <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-green-400 rounded-full animate-ping"></div>
                </div>
                <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent font-semibold ">
                  #1 Rated IELTS Institute
                </span>
                <div className="flex items-center space-x-0.5 text-yellow-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-current" />
                  ))}
                </div>
              </div>
            </div>

            {/* Main Heading */}
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight sm:leading-[1.1]">
                <span className={`block transition-all duration-700 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                  Achieve Your
                </span>
                <span className={`block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent relative transition-all duration-700 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                  Dream Band Score
                  <div className={`absolute -bottom-1 sm:-bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full transform scale-x-0 transition-transform duration-1000 delay-1000 ${isVisible ? 'scale-x-100' : ''}`}></div>
                </span>
              </h1>
              
              <p className={`text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl transition-all duration-700 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                Transform your English skills with our{' '}
                <span className="text-cyan-300 font-semibold relative inline-block">
                  AI-powered platform
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-cyan-300/50 scale-x-0 hover:scale-x-100 transition-transform duration-300"></div>
                </span>{' '}
                and expert-led strategies for IELTS success.
              </p>
            </div>

            {/* Features List */}
            <div className={`grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 transition-all duration-700 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              {[
                { icon: Target, text: '7+ Band Guarantee' },
                { icon: Users, text: 'Expert Instructors' },
                { icon: Clock, text: 'Flexible Schedule' },
                { icon: TrendingUp, text: '98% Success Rate' }
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-2 text-gray-300">
                  <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                  <span className="text-sm sm:text-base">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Enhanced CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 transition-all duration-700 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <button className="group relative bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-xl lg:rounded-2xl font-bold text-sm sm:text-base lg:text-lg shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                <div className="flex items-center space-x-2 lg:space-x-3">
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 group-hover:rotate-12 transition-transform" />
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-xl lg:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button className="group relative bg-white/5 backdrop-blur-xl border border-white/10 text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-xl lg:rounded-2xl font-bold text-sm sm:text-base lg:text-lg hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch Demo
              </button>
            </div>

            {/* Social Proof */}
            <div className={`flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-6 pt-2 transition-all duration-700 delay-1200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <div className="flex -space-x-2 sm:-space-x-3">
                {[1, 2, 3, 4].map((img) => (
                  <img
                    key={img}
                    src={`https://i.pravatar.cc/40?img=${img}`}
                    alt="Student"
                    className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-full border-2 border-slate-800 hover:scale-110 transition-transform"
                  />
                ))}
                <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 border-2 border-slate-800 flex items-center justify-center text-white text-xs font-bold hover:scale-110 transition-transform">
                  +5K
                </div>
              </div>
              <div className="text-center sm:text-left text-gray-400">
                <div className="font-semibold text-white text-sm sm:text-base">5,000+ Successful Students</div>
                <div className="text-xs sm:text-sm">Achieved their dream band score</div>
              </div>
            </div>
          </div>

          {/* Right Content - Enhanced Hero Visual */}
          <div className={`relative flex items-center justify-center mt-8 lg:mt-0 transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
              
              {/* Main Card */}
              <div className="relative bg-slate-900/80 backdrop-blur-2xl rounded-2xl lg:rounded-3xl p-4 sm:p-5 lg:p-6 border border-white/10 transform hover:scale-[1.02] transition-all duration-500 group">
                <div className="relative overflow-hidden rounded-xl lg:rounded-2xl">
                  <img 
                    src="https://plus.unsplash.com/premium_photo-1681681082009-a2dbaf3deaa4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="IELTS Students Learning" 
                    className="w-full h-48 sm:h-56 lg:h-64 xl:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                  
                </div>
                
               
                
              </div>

              {/* Background Decoration */}
              <div className="absolute -z-10 -inset-2 sm:-inset-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl lg:rounded-3xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-4 sm:mt-6">
                <div className="bg-white/5 backdrop-blur-xl rounded-xl p-3 sm:p-4 border border-white/10 text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-cyan-400">500+</div>
                  <div className="text-xs sm:text-sm text-gray-300">Students Trained</div>
                </div>
                <div className="bg-white/5 backdrop-blur-xl rounded-xl p-3 sm:p-4 border border-white/10 text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-green-400">7.5+</div>
                  <div className="text-xs sm:text-sm text-gray-300">Average Band Score</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-2 sm:h-3 bg-white/50 rounded-full mt-1 sm:mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>

    </section>
  )
}

export default Hero