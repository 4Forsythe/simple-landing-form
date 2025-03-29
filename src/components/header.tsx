'use client';

import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import { PageRouter } from '@/config';
import { Button, Container, Logo } from '@/components';

const StyledHeader = styled.header`
  width: 100%;
  padding: 2.5rem 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--background);

  @media (max-width: 480px) {
    gap: 24px;
    padding: 1.5rem 2.5rem;
    flex-direction: column;
    background: rgba(var(--background), 0.5);
    box-shadow: 0 4px 48px var(--border);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);

    z-index: 1000;
    position: fixed;
  }
`;

export const Header: React.FC = () => {
  return (
    <Container>
      <StyledHeader>
        <Logo />
        <Link href={PageRouter.contact_us}>
          <Button variant='default'>Contact Us</Button>
        </Link>
      </StyledHeader>
    </Container>
  );
};
