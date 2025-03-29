'use client';

import React from 'react';
import styled from 'styled-components';
import { useSearchParams } from 'next/navigation';

import { Container, ContactForm } from '@/components';

const StyledContactSection = styled.section`
  height: 100%;
  border: 1px solid var(--border);
  background-color: var(--secondary);
`;

const StyledContactWrapper = styled.div`
  padding: 8rem 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }
`;

const StyledContactTitle = styled.h1`
  margin-bottom: 24px;
  font-size: 72px;
  font-weight: 700;
  line-height: 1.3;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 48px;
  }
`;

interface Props {
  success?: boolean;
}

export const ContactUs: React.FC<Props> = ({ success }) => {
  const searchParams = useSearchParams();
  const message = searchParams.get('success');

  return (
    <StyledContactSection>
      <Container>
        <StyledContactWrapper>
          <StyledContactTitle>
            {success ? message : 'Contact Us'}
          </StyledContactTitle>
          {!success && <ContactForm />}
        </StyledContactWrapper>
      </Container>
    </StyledContactSection>
  );
};
