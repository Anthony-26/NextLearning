'use server';

import * as auth from '@/auth';

export async function signIn() {
  /* The string is the provider */
  return auth.signIn('github');
}
