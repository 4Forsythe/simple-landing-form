'use client';

import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import { PageRouter } from '@/config';
import { Button, Container, Title } from '@/components';

const StyledPromoSection = styled.section`
  background-color: var(--secondary);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
`;

const StyledPromoWrapper = styled.div`
  padding: 4rem 2.5rem;
  gap: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const PromoBlock: React.FC = () => {
  return (
    <StyledPromoSection>
      <Container>
        <StyledPromoWrapper>
          <Title as='h3'>Join the RickRoll Nation</Title>
          <Link href={PageRouter.contact_us}>
            <Button>Contact Us</Button>
          </Link>
        </StyledPromoWrapper>
      </Container>
    </StyledPromoSection>
  );
};
