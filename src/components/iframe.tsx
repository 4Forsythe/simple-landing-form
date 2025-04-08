'use client';

import React from 'react';
import Image from 'next/image';
import ReactPlayer from 'react-player/youtube';
import styled from 'styled-components';

import { getYoutubeEmbedVideoSrc } from '@/lib/get-youtube-embed-video-src';
import { getYoutubePreviewVideoSrc } from '@/lib/get-youtube-preview-video-src';

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

const StyledIFramePreview = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
  border-radius: 8px;
`;

export const IFrame: React.FC<Props> = ({ width, height, src }) => {
  const [isMounted, setIsMounted] = React.useState(false);

  const embedSrc = getYoutubeEmbedVideoSrc(src);
  const previewSrc = getYoutubePreviewVideoSrc(src);

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
        <StyledIFramePreview
          width={530}
          height={250}
          src={previewSrc}
          alt='Video preview'
          priority
        />
      )}
    </StyledIFrameBlock>
  );
};
