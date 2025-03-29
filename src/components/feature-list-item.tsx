'use client';

import React from 'react';
import styled from 'styled-components';

import { Card, CardHeader, CardTitle, CardDescription } from '@/components';

interface Props {
  title: string;
  description: string;
}

const StyledCard = styled(Card)`
  width: 100%;
  max-width: 400px;
`;

export const FeatureListItem: React.FC<Props> = ({ title, description }) => {
  return (
    <StyledCard>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </StyledCard>
  );
};
