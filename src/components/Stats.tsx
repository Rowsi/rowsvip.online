import React from 'react';
import { GradientText } from './ui/GradientText';
import { CountUp } from './ui/CountUp';

export function Stats() {
  return (
    <section className="py-20 bg-black/80 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <GradientText className="text-4xl font-bold mb-2">
              <CountUp end={500} duration={2} />+
            </GradientText>
            <p className="text-gray-400">Projects Completed</p>
          </div>
          <div className="p-6">
            <GradientText className="text-4xl font-bold mb-2">
              <CountUp end={100} duration={2} />%
            </GradientText>
            <p className="text-gray-400">Success Rate</p>
          </div>
          <div className="p-6">
            <GradientText className="text-4xl font-bold mb-2">
              <CountUp end={50} duration={2} />+
            </GradientText>
            <p className="text-gray-400">Expert Tools</p>
          </div>
        </div>
      </div>
    </section>
  );
}