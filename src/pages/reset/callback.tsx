// pages/reset/callback.tsx

// 1) Force this page to be rendered at runtime (no static export)
// 2) Tell Next to use the experimental edge runtime for this page
export const dynamic = 'force-dynamic';
export const runtime = 'experimental-edge';

('use client');

import { useEffect, useState } from 'react';

export default function ResetCallback() {
  const [deepLink, setDeepLink] = useState<string | null>(null);

  useEffect(() => {
    // Read the fragment that our Edge Function appended (access_token, refresh_token, etc)
    const frag = window.location.hash.substring(1);
    if (!frag) return;

    // Build the vega:// link
    const link = `vega://reset-callback#${frag}`;
    setDeepLink(link);

    // Try to redirect automatically
    window.location.href = link;
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
              display: 'inline-block',
              padding: '12px 24px',
              background: '#ef5350',
              color: '#fff',
              textDecoration: 'none',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '16px',
            }}
          >
            Open Vega App
          </button>
        </>
      )}
    </div>
  );
}
