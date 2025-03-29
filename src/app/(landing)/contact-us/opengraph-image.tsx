// https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image

import { ImageResponse } from 'next/og';

export const alt = 'Contact Us';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {alt}
      </div>
    )
  );
}
