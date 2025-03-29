'use client';

import styled from 'styled-components';

export * from './form';
export * from './card';

export { Button } from './button';
export { Checkbox } from './checkbox';
export { Label } from './label';
export { Input } from './input';
export { Textarea } from './textarea';
export { Toaster as Sonner } from './sonner';

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
`;

export const Title = styled.h1`
  font-size: 48px;
  font-weight: 700;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 42px;
  }

  @media (max-width: 480px) {
    font-size: 38px;
  }
`;

export const Paragraph = styled.p`
  font-size: 15px;
  font-weight: 400;
  line-height: 1.5;
`;
