'use client';

import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import { PageRouter } from '@/config';
import { COMPANY_NAME } from '@/constants';

const StyledLogo = styled.span`
  translate: 4px 0;
  font-size: 20px;
  font-weight: 800;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  display: inline-block;
  position: relative;
  transition: translate 200ms ease-in-out;

  &:hover {
    translate: 0 0;
    &::before {
      translate: 0 0;
    }
    &::after {
      translate: 0 0;
    }
  }

  &::before,
  &::after {
    content: '';
    left: 0;
    width: 100%;
    height: 4px;
    position: absolute;
    background: var(--foreground);
    transition: translate 200ms ease-in-out;
  }

  &::before {
    opacity: 0.8;
    bottom: -2px;
    translate: 12px 2px;
  }
  &::after {
    opacity: 0.5;
    bottom: -8px;
    translate: 0px 2px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

interface Props {
  extraLabel?: string;
}

export const Logo: React.FC<Props> = ({ extraLabel }) => {
  return (
    <Link href={PageRouter.homepage}>
      <StyledLogo>
        {COMPANY_NAME}
        {extraLabel && ` ${extraLabel}`}
      </StyledLogo>
    </Link>
  );
};
