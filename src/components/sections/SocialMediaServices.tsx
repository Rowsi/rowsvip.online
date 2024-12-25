import React from 'react';
import { Instagram, Youtube, Twitter, TrendingUp, Video, Share2 } from 'lucide-react';
import { ServiceCard } from '../ui/ServiceCard';
import { SectionTitle } from '../ui/SectionTitle';
import { StatCounter } from '../ui/StatCounter';

export function SocialMediaServices() {
  const services = [
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Growth Services",
      description: "Organic follower growth and engagement boost"
    },
    {
      icon: <Video className="h-8 w-8" />,
      title: "Video Production",
      description: "Professional video creation and editing services"
    },
    {
      icon: <Share2 className="h-8 w-8" />,
      title: "Cross-Platform Promotion",
      description: "Strategic content distribution across platforms"
    }
  ];

  const stats = [
    { value: "1M+", label: "Social Reach" },
    { value: "500+", label: "Videos Produced" },
    { value: "98%", label: "Client Satisfaction" }
  ];

  return (
    <section id="social-media" className="py-24 bg-gradient-to-b from-black to-purple-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Social Media & Content"
          subtitle="Boost your online presence with our comprehensive social media services"
        />
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
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

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <StatCounter
              key={index}
              value={stat.value}
              label={stat.label}
              delay={index * 200}
            />
          ))}
        </div>

        <div className="mt-16 flex justify-center space-x-8">
          <Instagram className="w-8 h-8 text-purple-400 hover:text-purple-300 transition-colors cursor-pointer" />
          <Youtube className="w-8 h-8 text-purple-400 hover:text-purple-300 transition-colors cursor-pointer" />
          <Twitter className="w-8 h-8 text-purple-400 hover:text-purple-300 transition-colors cursor-pointer" />
        </div>
      </div>
    </section>
  );
}