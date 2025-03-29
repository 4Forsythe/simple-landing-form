'use client';

import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import featuresData from '@/mocks/features.mocks.json';

import { PageRouter } from '@/config';
import { Button, Container, FeatureListItem, Title } from '@/components';

const StyledWrapper = styled.section`
  padding: 2.5rem 1.5rem;

  @media (max-width: 480px) {
    padding: 1.5rem 0.5rem;
  }
`;

const StyledHeader = styled.header`
  padding: 2.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledList = styled.ul`
  padding: 2.5rem 0;
  row-gap: 60px;
  column-gap: 32px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  justify-items: center;

  @media (max-width: 768px) {
    padding: 0;
    row-gap: 24px;
    column-gap: 16px;
  }
`;

const StyledFooter = styled.footer`
  padding: 1.5rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Features: React.FC = () => {
  return (
    <StyledWrapper>
      <Container>
        <StyledHeader>
          <Title as='h2'>Rick Astley’s Ultimate Promise</Title>
        </StyledHeader>
        <StyledList>
          {featuresData.features.map(({ title, description }, index) => (
            <FeatureListItem
              key={index}
              title={title}
              description={description}
            />
          ))}
        </StyledList>
        <StyledFooter>
          <Link href={PageRouter.contact_us}>
            <Button>Contact Us</Button>
          </Link>
        </StyledFooter>
      </Container>
    </StyledWrapper>
  );
};
