'use client';
import { useEffect } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default function AuthCallback() {
  useEffect(() => {
    const supabase = createClientComponentClient();
    const params = new URL(window.location.href).searchParams;
    const tokenHash = params.get('token_hash');
    const type = params.get('type');
    const email = params.get('email');

    if (!tokenHash || type !== 'email' || !email) {
      window.location.href = 'vega://auth-error';
      return;
    }

    supabase.auth
      .verifyOtp({ type: 'email', token: tokenHash, email })
      .then(({ data, error }) => {
        if (error || !data?.session) {
          window.location.href = 'vega://auth-error';
          return;
        }
        const { access_token, refresh_token, expires_in } = data.session;
        const frag = new URLSearchParams({
          access_token,
          refresh_token,
          expires_in: expires_in.toString(),
        }).toString();
        window.location.href = `vega://auth-callback#${frag}`;
      });
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '4rem' }}>
      <h1>Signing you in…</h1>
      <p>Please wait a moment—redirecting you to the Vega app.</p>
    </div>
  );
}
