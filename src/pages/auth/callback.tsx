// src/pages/auth/callback.tsx
'use client';
export const runtime = 'experimental-edge';

import { useEffect } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import type { AuthError, Session } from '@supabase/supabase-js';

export default function AuthCallback() {
  useEffect(() => {
    const supabase = createClientComponentClient();

    async function handleSignUpCallback() {
      try {
        const url = new URL(window.location.href);
        const token_hash = url.searchParams.get('token_hash');
        if (!token_hash) {
          console.error('Missing token_hash');
          window.location.href = 'vega://auth-error';
          return;
        }

        const {
          data,
          error,
        }: { data: { session: Session | null }; error: AuthError | null } =
          await supabase.auth.verifyOtp({
            type: 'email',
            token_hash,
          });

        if (error || !data.session) {
          console.error('verifyOtp failed:', error);
          window.location.href = 'vega://auth-error';
          return;
        }

        const { access_token, refresh_token, expires_in } = data.session;
        const fragment = new URLSearchParams({
          access_token,
          refresh_token,
          expires_in: expires_in.toString(),
        }).toString();

        window.location.href = `vega://auth-callback#${fragment}`;
      } catch (err) {
        console.error('AuthCallback error:', err);
        window.location.href = 'vega://auth-error';
      }
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
