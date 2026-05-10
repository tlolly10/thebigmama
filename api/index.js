import { createServer } from 'http';

let serverEntry;

async function getServerEntry() {
  if (!serverEntry) {
    const mod = await import('../dist/server.mjs');
    serverEntry = mod.default || mod;
  }
  return serverEntry;
}

export default async function handler(req, res) {
  try {
    const { fetch } = await getServerEntry();
    
    const url = new URL(req.url, `http://${req.headers.host}`);
    const request = new Request(url, {
      method: req.method,
      headers: req.headers,
      body: ['GET', 'HEAD'].includes(req.method) ? undefined : req.body,
    });

    const response = await fetch(request, {}, {});
    
    res.writeHead(response.status, Object.fromEntries(response.headers));
    res.end(await response.text());
  } catch (error) {
    console.error('Server error:', error);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
}
