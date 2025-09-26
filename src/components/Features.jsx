import React from 'react'
import { Mic, FileText, Cpu, BookOpen, ArrowRight, Zap } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: Mic,
      title: "AI-Powered Speaking",
      description: "Real-time AI feedback with certified IELTS examiners. Practice pronunciation, fluency, and get instant band predictions.",
      stats: "95% improvement rate"
    },
    {
      icon: FileText,
      title: "Smart Mock Tests",
      description: "Adaptive testing with detailed analytics. Our AI identifies weak areas and creates personalized practice plans.",
      stats: "1000+ practice tests"
    },
    {
      icon: Cpu,
      title: "Predictive Analytics",
      description: "Advanced ML algorithms analyze your performance patterns and predict your exact band score with 98% accuracy.",
      stats: "98% accuracy rate"
    },
    {
      icon: BookOpen,
      title: "Adaptive Learning",
      description: "Personalized study paths that adapt to your learning style. Interactive content with gamification elements.",
      stats: "500+ hours content"
    }
  ]

  return (
    <section id="features" className="relative py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 leading-tight">
            Why Choose{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              IELTSPro
            </span>
            ?
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">AI-driven methodology</span> combines cutting-edge technology with human expertise to deliver <span className="font-semibold text-gray-800">exceptional results</span> for every student.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
              onClick={(e) => e.currentTarget.classList.add('shadow-2xl')} // Optional: add temporary shadow on click
            >
              {/* Floating Icon */}
              <div className="inline-flex p-4 rounded-2xl bg-blue-600 text-white mb-6 shadow-lg">
                <feature.icon className="w-8 h-8" />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>

                {/* Stats Badge */}
                <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full text-sm font-semibold text-gray-700">
                  <Zap className="mr-2 w-4 h-4 text-yellow-500" />
                  {feature.stats}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-6 pt-6 border-t border-gray-100/50">
                <button className="flex items-center text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text font-bold hover:from-purple-600 hover:to-blue-600 transition-all duration-300">
                  Explore Feature
                  <ArrowRight className="ml-2 w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100/50 shadow-lg">
            <div className="text-left">
              <div className="text-2xl font-bold text-gray-900 mb-2">Ready to start your journey?</div>
              <div className="text-gray-600">Join thousands of successful students today</div>
            </div>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center">
              Get Started Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
