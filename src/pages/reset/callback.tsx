'use client';
import { useEffect, useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default function ResetCallback() {
  const [link, setLink] = useState<string>();

  useEffect(() => {
    const supabase = createClientComponentClient();
    const p = new URL(window.location.href).searchParams;
    const token = p.get('token_hash');
    const email = p.get('email');

    if (!token || !email) {
      window.location.href = 'vega://auth-error';
      return;
    }

    supabase.auth
      .verifyOtp({ type: 'recovery', token, email })
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
        const deeplink = `vega://reset-callback#${frag}`;
        setLink(deeplink);
        window.location.href = deeplink;
      });
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '4rem' }}>
      <h1>Resetting your password…</h1>
      <p>Please wait a moment—redirecting you to the Vega app.</p>
      {link && (
        <>
          <p>If nothing happened, tap below:</p>
          <button
            onClick={() => (window.location.href = link)}
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
