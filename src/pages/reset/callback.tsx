// pages/reset/callback.tsx
'use client';

import { useEffect } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import type { AuthError, Session } from '@supabase/supabase-js';

export default function ResetCallback() {
  useEffect(() => {
    const supabase = createClientComponentClient();

    async function handleReset() {
      // 1) pull the token_hash out of the query
      const url = new URL(window.location.href);
      const token_hash = url.searchParams.get('token_hash');

      if (!token_hash) {
        // missing token → deep‐link into your error handler
        window.location.href = 'vega://auth-error';
        return;
      }

      // 2) exchange that OTP for a real session
      const { data, error } = await supabase.auth.verifyOtp({
        type: 'recovery',
        token_hash: token_hash,
      });

      if (error || !data?.session) {
        window.location.href = 'vega://auth-error';
        return;
      }

      // 3) build the fragment with your tokens
      const { access_token, refresh_token, expires_in } = data.session;
      const fragment = new URLSearchParams({
        access_token,
        refresh_token,
        expires_in: expires_in.toString(),
      }).toString();

      // 4) finally deep-link back into your Flutter app
      window.location.href = `vega://choose-new-password#${fragment}`;
    }

    handleReset();
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '4rem' }}>
      <h1>Resetting your password…</h1>
      <p>Please wait a moment—redirecting.</p>
    </div>
  );
}
