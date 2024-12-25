import { Code, Terminal, Cpu, Shield, Database, Globe } from 'lucide-react';

export function FloatingIcons() {
  const icons = [
    { Icon: Code, delay: 0 },
    { Icon: Terminal, delay: 1 },
    { Icon: Cpu, delay: 2 },
    { Icon: Shield, delay: 3 },
    { Icon: Database, delay: 4 },
    { Icon: Globe, delay: 5 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map(({ Icon, delay }, index) => (
        <div
          key={index}
          className="absolute animate-float animate-glow"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${delay}s`,
            opacity: 0.1,
            transform: `rotate(${Math.random() * 360}deg)`
          }}
        >
          <Icon className="w-12 h-12 text-purple-400" />
        </div>
      ))}
    </div>
  );
}