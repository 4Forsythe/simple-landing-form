'use client';

import styled from 'styled-components';

import { Header, Footer, Sonner } from '@/components';

const StyledWrapper = styled.div`
  height: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;

const StyledMain = styled.main`
  flex: 1;

  @media (max-width: 480px) {
    margin-top: 135px;
  }
`;

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StyledWrapper>
      <Header />
      <StyledMain>{children}</StyledMain>
      <Footer />
      <Sonner />
    </StyledWrapper>
  );
}
