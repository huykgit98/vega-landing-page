'use client';

import { useEffect } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import type { AuthError, Session } from '@supabase/supabase-js';

export default function AuthCallback() {
  useEffect(() => {
    const supabase = createClientComponentClient();

    async function handleSignUpCallback() {
      // 1) grab the one-time code
      const url = new URL(window.location.href);
      const token_hash = url.searchParams.get('token_hash');

      if (!token_hash) {
        window.location.href = 'vega://auth-error';
        return;
      }

      // 2) exchange it for a real session
      const { data, error } = await supabase.auth.verifyOtp({
        type: 'email', // for sign-up flows
        token_hash: token_hash,
      });

      if (error || !data?.session) {
        window.location.href = 'vega://auth-error';
        return;
      }

      // 3) build the fragment with tokens
      const { access_token, refresh_token, expires_in } = data.session;
      const fragment = new URLSearchParams({
        access_token,
        refresh_token,
        expires_in: expires_in.toString(),
      }).toString();

      // 4) deep-link back into your Flutter app
      window.location.href = `vega://auth-callback#${fragment}`;
    }

    handleSignUpCallback();
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '4rem' }}>
      <h1>Signing you in…</h1>
      <p>Please wait a moment—redirecting.</p>
    </div>
  );
}
