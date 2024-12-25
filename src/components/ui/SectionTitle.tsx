import React from 'react';
import { GradientText } from './GradientText';

interface SectionTitleProps {
  title: string;
  subtitle: string;
}

export function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="text-center">
      <GradientText className="text-3xl font-bold sm:text-4xl mb-4">
        {title}
      </GradientText>
      <p className="text-gray-400 text-lg max-w-2xl mx-auto">
        {subtitle}
      </p>
    </div>
  );
}