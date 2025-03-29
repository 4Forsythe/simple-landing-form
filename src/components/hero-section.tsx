'use client';

import React from 'react';
import styled from 'styled-components';

import { Container, Paragraph, Title, IFrame } from '@/components';

const StyledHeroSection = styled.section`
  min-height: 350px;
  background-color: var(--secondary);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
`;

const StyledHeroWrapper = styled.div`
  padding: 2.5rem 1.5rem;
  gap: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 768px) {
    gap: 20px;
    display: flex;
    flex-direction: column-reverse;
  }
`;

const StyledHeroSlogan = styled.div`
  gap: 18px;
  max-width: 440px;
  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
    max-width: 320px;
  }

  @media (max-width: 768px) {
    max-width: 600px;
    padding: 0 1.5rem;
  }
`;

const StyledHeroVideoBox = styled.div`
  width: 530px;
  height: 250px;
  z-index: 100;
  position: relative;

  @media (max-width: 1024px) {
    width: 390px;
    height: 210px;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 250px;
    max-width: 530px;
  }

  @media (max-width: 480px) {
    height: 180px;
  }
`;

export const HeroSection: React.FC = () => {
  return (
    <StyledHeroSection>
      <Container>
        <StyledHeroWrapper>
          <StyledHeroSlogan>
            <Title>Never Gonna Give You Up</Title>
            <Paragraph>
              Single "Never Gonna Give You Up" was a No. 1 hit in over 25
              countries, winning the 1988 Brit Award for Best British Single.
              The song also stayed at the top of the UK chart for five weeks in
              1987 and was the best-selling single of that year.
            </Paragraph>
          </StyledHeroSlogan>
          <StyledHeroVideoBox>
            <IFrame
              width='100%'
              height='100%'
              src={'dQw4w9WgXcQ?si=zQ0gkmU-UaCJOI9H'}
            />
          </StyledHeroVideoBox>
        </StyledHeroWrapper>
      </Container>
    </StyledHeroSection>
  );
};
