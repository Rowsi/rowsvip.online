import React from 'react';
import { useInView } from 'react-intersection-observer';
import { CountUp } from './CountUp';

interface StatCounterProps {
  value: string;
  label: string;
  delay: number;
}

export function StatCounter({ value, label, delay }: StatCounterProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const numericValue = parseInt(value.replace(/\D/g, ''));

  return (
    <div
      ref={ref}
      className={`text-center transform transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="text-4xl font-bold text-purple-400 mb-2">
        {inView && <CountUp end={numericValue} />}
        {value.includes('+') && '+'}
        {value.includes('%') && '%'}
      </div>
      <div className="text-gray-400">{label}</div>
    </div>
  );
}