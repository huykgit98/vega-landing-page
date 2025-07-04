// pages/reset/callback.tsx
'use client';

import { useEffect } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import type { AuthError, Session } from '@supabase/supabase-js';

export default function ResetCallback() {
  useEffect(() => {
    const supabase = createClientComponentClient();

    async function handleReset() {
      try {
        // 1) parse token_hash + email out of the URL
        const url = new URL(window.location.href);

        const tokenHash = url.searchParams.get('token_hash');
        const email = url.searchParams.get('email');

        if (!tokenHash || !email) {
          console.error('ResetCallback missing token_hash or email');
          window.location.href = 'vega://auth-error';
          return;
        }

        // 2) exchange OTP for a session
        const {
          data,
          error,
        }: { data: { session: Session | null }; error: AuthError | null } =
          await supabase.auth.verifyOtp({
            type: 'recovery',
            token: tokenHash, // must use `token`
            email, // required by the TS signature
          });

        if (error || !data.session) {
          console.error('verifyOtp(recovery) failed:', error);
          window.location.href = 'vega://auth-error';
          return;
        }

        // 3) build the fragment with access + refresh tokens
        const { access_token, refresh_token, expires_in } = data.session;
        const fragment = new URLSearchParams({
          access_token,
          refresh_token,
          expires_in: expires_in.toString(),
        }).toString();

        // 4) deep‐link back into your Flutter app
        window.location.href = `vega://reset-callback#${fragment}`;
      } catch (err) {
        console.error('Error in ResetCallback:', err);
        window.location.href = 'vega://auth-error';
      }
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
