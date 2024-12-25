import React from 'react';
import { Shield, Code2, Terminal, Cpu, Bug, Lock } from 'lucide-react';
import { AnimatedCard } from './ui/AnimatedCard';
import { GradientText } from './ui/GradientText';

export function Tools() {
  const tools = [
    {
      icon: <Terminal className="h-6 w-6 animate-pulse" />,
      name: "Disassemblers",
      description: "Advanced tools for binary analysis and code reconstruction"
    },
    {
      icon: <Bug className="h-6 w-6 animate-pulse" />,
      name: "Debuggers",
      description: "Professional debugging and analysis tools"
    },
    {
      icon: <Code2 className="h-6 w-6 animate-pulse" />,
      name: "Decompilers",
      description: "Convert binary code back to high-level languages"
    },
    {
      icon: <Shield className="h-6 w-6 animate-pulse" />,
      name: "Security Tools",
      description: "Comprehensive security analysis suite"
    },
    {
      icon: <Cpu className="h-6 w-6 animate-pulse" />,
      name: "System Analyzers",
      description: "Deep system inspection and monitoring"
    },
    {
      icon: <Lock className="h-6 w-6 animate-pulse" />,
      name: "Protection Analysis",
      description: "Software protection assessment tools"
    }
  ];

  return (
    <section id="tools" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center animate-fade-in">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            <GradientText>Professional Tools</GradientText>
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            State-of-the-art tools for reverse engineering and development
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool, index) => (
            <AnimatedCard key={index} delay={index * 200}>
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400">
                  {tool.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-white">{tool.name}</h3>
                  <p className="mt-1 text-sm text-gray-400">{tool.description}</p>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}