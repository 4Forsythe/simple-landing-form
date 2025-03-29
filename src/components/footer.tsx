'use client';

import React from 'react';
import styled from 'styled-components';

import { Container, Logo } from '@/components';

const StyledFooter = styled.header`
  width: 100%;
  padding: 5rem 4rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 480px) {
    padding: 3rem 1.5rem;
  }
`;

export const Footer: React.FC = () => {
  return (
    <Container>
      <StyledFooter>
        <Logo extraLabel={new Date().getFullYear().toString()} />
      </StyledFooter>
    </Container>
  );
};
