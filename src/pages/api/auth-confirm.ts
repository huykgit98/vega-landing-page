// pages/api/auth-confirm.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

  // rebuild the URL we want to proxy
  const forwardedPath = req.url!.replace(/^\/api\/auth-confirm/, '');
  const url = `${supabaseUrl}/functions/v1/auth-confirm${forwardedPath}`;

  // call the Supabase Edge Function
  const functionRes = await fetch(url, {
    method: req.method,
    headers: {
      Authorization: `Bearer ${serviceRoleKey}`,
      'Content-Type': 'application/json',
    },
    // if it's a POST/PUT, forward the JSON body along
    body: ['POST', 'PUT', 'PATCH'].includes(req.method!)
      ? JSON.stringify(req.body)
      : undefined,
  });

  // mirror status
  res.status(functionRes.status);

  // mirror any important headers
  functionRes.headers.forEach((value, name) => {
    // skip hop-by-hop headers
    if (name.toLowerCase() === 'transfer-encoding') return;
    res.setHeader(name, value);
  });

  // read the text (or you could do .json() if you know it's JSON)
  const text = await functionRes.text();
  res.send(text);
}
