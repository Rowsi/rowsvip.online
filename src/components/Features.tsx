import React from 'react';
import { Zap, Shield, Code2, Cpu, Network, Lock } from 'lucide-react';
import { GradientText } from './ui/GradientText';
import { ParallaxCard } from './ui/ParallaxCard';

export function Features() {
  const features = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Performance Analysis",
      description: "Advanced performance profiling and optimization techniques"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Security Auditing",
      description: "Comprehensive security assessment and vulnerability detection"
    },
    {
      icon: <Network className="h-8 w-8" />,
      title: "Network Analysis",
      description: "Deep packet inspection and protocol analysis"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-black to-purple-900/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 animate-grid-flow"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <GradientText className="text-3xl font-bold sm:text-4xl mb-4">
            Advanced Features
          </GradientText>
          <p className="text-gray-400 text-lg">
            Cutting-edge tools for professional reverse engineers
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <ParallaxCard key={index} className="h-full">
              <div className="p-6 text-center">
                <div className="text-purple-400 mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400">
                  {feature.description}
                </p>
              </div>
            </ParallaxCard>
          ))}
        </div>
      </div>
    </section>
  );
}