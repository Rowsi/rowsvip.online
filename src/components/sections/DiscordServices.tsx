import React from 'react';
import { MessageCircle, Users, Shield, Rocket, Bot, Headphones } from 'lucide-react';
import { ServiceCard } from '../ui/ServiceCard';
import { SectionTitle } from '../ui/SectionTitle';

export function DiscordServices() {
  const services = [
    {
      icon: <Bot className="h-8 w-8" />,
      title: "Custom Discord Bots",
      description: "Tailored bot development for server management and automation"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Server Security",
      description: "Advanced protection systems and anti-raid measures"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community Growth",
      description: "Strategic server promotion and member acquisition"
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Server Boost",
      description: "Premium server features and enhanced visibility"
    }
  ];

  return (
    <section id="discord" className="py-24 bg-gradient-to-b from-purple-900/20 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Discord Services"
          subtitle="Elevate your Discord community with our premium services"
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