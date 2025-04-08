'use client';

import React from 'react';
import ReactPlayer from 'react-player/lazy';
import styled from 'styled-components';

import { getYoutubeEmbedVideoSrc } from '@/lib/get-youtube-embed-video-src';

interface Props {
  width: string | number;
  height: string | number;
  src: string;
}

const StyledIFrameBlock = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 8px;
`;

const StyledIFrameFallback = styled.div`
  width: 100%;
  height: 100%;
  font-weight: 700;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 8px;
  color: var(--primary);
  background-color: var(--border);
`;

export const IFrame: React.FC<Props> = ({ width, height, src }) => {
  const [isMounted, setIsMounted] = React.useState(false);

  const embedSrc = getYoutubeEmbedVideoSrc(src);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <StyledIFrameBlock>
      {isMounted ? (
        <ReactPlayer
          light
          width={width}
          height={height}
          url={embedSrc}
          playing
          controls
        />
      ) : (
        <IFrameFallback />
      )}
    </StyledIFrameBlock>
  );
};

export const IFrameFallback: React.FC = () => {
  return <StyledIFrameFallback>Loading...</StyledIFrameFallback>;
};
