'use client';

import React from 'react';
import { HeroSection, Features, PromoBlock } from '@/components';

export const Home: React.FC = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <Features />
      <PromoBlock />
    </React.Fragment>
  );
};
