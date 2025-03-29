import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { StyledComponents } from '@/lib/styled-components';
import {
  SITE_NAME,
  SITE_DESCRIPTION,
  SITE_TWITTER_DESCRIPTION,
  SITE_KEYWORDS,
} from '@/constants';

import './globals.css';

const siteUrl = process.env.SITE_BASE_URL;

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin', 'cyrillic'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: {
    template: `%s | ${SITE_NAME}`,
    default: SITE_NAME,
  },
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: siteUrl,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description: SITE_TWITTER_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.variable} antialiased`}>
        <StyledComponents>{children}</StyledComponents>
      </body>
    </html>
  );
}
