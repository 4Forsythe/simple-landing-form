'use client';

import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import { Loader2 } from 'lucide-react';
import {
  Button,
  Input,
  Textarea,
  Checkbox,
  Form as FormProvider,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components';
import styled from 'styled-components';

import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { contactSchema, type ContactFormType } from '@/schemas';

const StyledForm = styled.form`
  gap: 12px;
  padding: 2.5rem;
  width: 100%;
  max-width: 450px;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  border: 1px solid var(--border);
  background-color: var(--background);
  position: relative;

  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`;

const StyledLoader = styled.div`
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  opacity: 0.5;
  background-color: var(--secondary);
  position: absolute;
`;

export const ContactForm: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const form = useForm<ContactFormType>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
      isPassed: false,
    },
  });

  const { isSubmitting } = form.formState;

  const onSubmit = async (dto: ContactFormType) => {
    console.log(dto);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dto),
      });

      const data = await response.json();

      if (response.ok) {
        const qs = new URLSearchParams(searchParams.toString());
        qs.set('success', String(data.message as string));
        router.replace(`?${qs.toString()}`);
      } else {
        toast(data.error as string);
      }
    } catch (error) {
      toast("We're sorry, something went wrong");
      console.error(
        '[ContactForm]: An error occurred while submitting form:',
        error
      );
    }
  };

  return (
    <FormProvider {...form}>
      <StyledForm onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your name</FormLabel>
              <FormControl>
                <Input placeholder='John' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder='john@rocks.com' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='message'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea placeholder='Hi, im John!' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='isPassed'
          render={({ field }) => (
            <FormItem>
              <div className='p-1.5 flex flex-row items-center space-x-2.5 space-y-0 rounded-md'>
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel>Are you really like Rick Astley?</FormLabel>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type='submit' disabled={isSubmitting}>
          Submit
        </Button>

        {isSubmitting && (
          <StyledLoader>
            <Loader2 className='animate-spin' size={24} />
          </StyledLoader>
        )}
      </StyledForm>
    </FormProvider>
  );
};
