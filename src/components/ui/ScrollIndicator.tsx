import React from 'react';
import { ArrowDown } from 'lucide-react';

export function ScrollIndicator() {
  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <ArrowDown className="w-6 h-6 text-purple-400" />
    </div>
  );
}