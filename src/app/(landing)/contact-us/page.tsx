import type { Metadata } from 'next';

import { ContactUs } from '@/components';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    "Have a question or want to get in touch with the team behind Rick Astley's Ultimate Promise? Reach out to us through the contact form. We'd love to hear from you!",
};

export default async function ContactUsPage({
  searchParams,
}: {
  searchParams: Promise<{ success?: string }>;
}) {
  const params = await searchParams;
  const isSuccess = params.success;

  return <ContactUs success={!!isSuccess} />;
}
