import React from 'react';

interface GlowingButtonProps {
  children: React.ReactNode;
  href: string;
  variant?: 'primary' | 'secondary';
}

export function GlowingButton({ children, href, variant = 'primary' }: GlowingButtonProps) {
  const baseClasses = "relative px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:-translate-y-1";
  const variantClasses = variant === 'primary'
    ? "bg-purple-600 text-white hover:bg-purple-700"
    : "bg-transparent border-2 border-purple-500 text-purple-400 hover:text-white hover:bg-purple-600/20";

  return (
    <a
      href={href}
      className={`group ${baseClasses} ${variantClasses}`}
    >
      <div className="absolute inset-0 rounded-lg bg-purple-600/20 blur-xl group-hover:blur-2xl transition-all duration-300 opacity-75" />
      <span className="relative">{children}</span>
    </a>
  );
}