import React from 'react';
import { Terminal, Code, Cpu } from 'lucide-react';
import { AnimatedCard } from './ui/AnimatedCard';
import { GradientText } from './ui/GradientText';

export function Hero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-purple-900 to-black">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c')] bg-cover bg-center opacity-10"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-10 animate-grid-flow"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <div className="text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
              <span className="block">Welcome to</span>
              <GradientText className="text-5xl sm:text-6xl md:text-7xl font-bold">
                Rows
              </GradientText>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Professional reverse engineering and web development solutions. 
              Transforming complex challenges into elegant solutions.
            </p>
          </div>

          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <a href="#contact" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 md:py-4 md:text-lg md:px-10 transition-all duration-300 hover:scale-105">
                Get Started
              </a>
            </div>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <AnimatedCard delay={300}>
            <Terminal className="flex-shrink-0 w-6 h-6 text-purple-400 animate-pulse" />
            <div className="ml-4">
              <p className="text-white font-semibold">Binary Analysis</p>
              <p className="text-gray-400 mt-2 text-sm">Advanced reverse engineering techniques</p>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={500}>
            <Code className="flex-shrink-0 w-6 h-6 text-purple-400 animate-pulse" />
            <div className="ml-4">
              <p className="text-white font-semibold">Web Security</p>
              <p className="text-gray-400 mt-2 text-sm">Secure development practices</p>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={700}>
            <Cpu className="flex-shrink-0 w-6 h-6 text-purple-400 animate-pulse" />
            <div className="ml-4">
              <p className="text-white font-semibold">System Analysis</p>
              <p className="text-gray-400 mt-2 text-sm">Low-level system exploration</p>
            </div>
          </AnimatedCard>
        </div>
      </div>
    </div>
  );
}