// pages/reset/callback.tsx

// 1. FORCE runtime rendering
export const dynamic = 'force-dynamic';
// 2. USE the experimental edge runtime
export const runtime = 'experimental-edge';

('use client');

import { useEffect, useState } from 'react';

export default function ResetCallback() {
  const [deepLink, setDeepLink] = useState<string | null>(null);

  useEffect(() => {
    const frag = window.location.hash.substring(1);
    if (!frag) return;

    const link = `vega://reset-callback#${frag}`;
    setDeepLink(link);
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
              padding: '12px 24px',
              background: '#ef5350',
              color: '#fff',
              border: 'none',
              borderRadius: 4,
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
