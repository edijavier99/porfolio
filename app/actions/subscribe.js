'use server';

import { supabase } from '@/lib/supabase';

export async function subscribeEmail(formData) {
  const email = formData.get('email');

  if (!email) return { success: false, error: 'Email is required.' };

  const { error } = await supabase
    .from('subscribers')
    .insert({ email });

  if (error) {
    if (error.code === '23505') {
      return { success: false, error: 'You are already subscribed.' };
    }
    return { success: false, error: 'Something went wrong. Please try again.' };
  }

  return { success: true };
}
