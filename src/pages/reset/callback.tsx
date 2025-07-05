'use client';

import { useEffect, useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default function ResetCallback() {
  const [deepLink, setDeepLink] = useState<string>();

  useEffect(() => {
    const supabase = createClientComponentClient();

    // pull token_hash + email
    const params = new URL(window.location.href).searchParams;
    const tokenHash = params.get('token_hash');
    const email = params.get('email');

    if (!tokenHash || !email) {
      window.location.href = 'vega://auth-error';
      return;
    }

    supabase.auth
      .verifyOtp({
        type: 'recovery',
        token: tokenHash,
        email, // required by TS signature
      })
      .then(({ data, error }) => {
        if (error || !data?.session) {
          window.location.href = 'vega://auth-error';
          return;
        }

        // build the deep-link
        const { access_token, refresh_token, expires_in } = data.session;
        const frag = new URLSearchParams({
          access_token,
          refresh_token,
          expires_in: expires_in.toString(),
        }).toString();

        const link = `vega://reset-callback#${frag}`;
        setDeepLink(link);
        window.location.href = link;
      });
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '4rem' }}>
      <h1>Resetting your password…</h1>
      <p>Please wait a moment—redirecting you to the Vega app.</p>

      {deepLink && (
        <>
          <p>If nothing happened, tap the button below:</p>
          <button
            onClick={() => (window.location.href = deepLink)}
            style={{
              padding: '12px 24px',
              background: '#ef5350',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Open Vega App
          </button>
        </>
      )}
    </div>
  );
}
