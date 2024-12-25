import React from 'react';
import { Terminal, Code, Cpu, ArrowDown } from 'lucide-react';
import { GradientText } from '../ui/GradientText';
import { ParticleBackground } from '../animations/ParticleBackground';
import { GlowingButton } from '../ui/GlowingButton';
import { TypewriterEffect } from '../animations/TypewriterEffect';

export function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <ParticleBackground />
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <div className="text-center space-y-8">
          <div className="animate-fade-in-up space-y-4">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
              <span className="block text-white">Welcome to</span>
              <GradientText className="text-6xl sm:text-8xl font-bold mt-2">
                ROWSVIP
              </GradientText>
            </h1>
            
            <div className="h-20 flex items-center justify-center">
              <TypewriterEffect 
                texts={[
                  "Discord Services",
                  "Social Media Growth",
                  "Video Production",
                  "Community Building",
                  "Python Developer",
                  "Node.js Developer",
                  "Web Developer"
                ]}
              />
            </div>

            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-300 leading-relaxed">
              Elevate your online presence with our premium services
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <GlowingButton href="#services">
              Explore Services
            </GlowingButton>
            <GlowingButton href="#contact" variant="secondary">
              Get Started
            </GlowingButton>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="w-6 h-6 text-purple-400" />
          </div>
        </div>
      </div>
      <div className="mt-8 flex flex-col items-center">
      </div>
    </div>
  );
}