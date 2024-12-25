import React from 'react';
import { Shield, Code2, Terminal, Cpu, Network, Lock } from 'lucide-react';
import { ServiceCard } from '../ui/ServiceCard';
import { SectionTitle } from '../ui/SectionTitle';

export function Services() {
  const services = [
    {
      icon: <Terminal className="h-8 w-8" />,
      title: "Binary Analysis",
      description: "Advanced reverse engineering of complex software systems"
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
    },
    {
      icon: <Code2 className="h-8 w-8" />,
      title: "Web Development",
      description: "Modern web applications with cutting-edge technologies"
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-black to-purple-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Our Services"
          subtitle="Comprehensive solutions for your technical challenges"
        />
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
}