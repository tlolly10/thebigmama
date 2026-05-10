export default async function handler(req, res) {
  try {
    // Import the server entry built by TanStack Start
    const serverEntry = await import('../dist/server/index.js');
    
    // The serverEntry from Vinxi/TanStack Start (Cloudflare target) 
    // usually has fetch on default or directly on the module
    const fetchHandler = serverEntry.fetch || serverEntry.default?.fetch;

    if (!fetchHandler) {
      console.error('Available keys:', Object.keys(serverEntry));
      throw new Error('Server entry fetch handler not found. check logs for available keys.');
    }

    const host = req.headers.host || 'localhost';
    const protocol = req.headers['x-forwarded-proto'] || 'https';
    const url = new URL(req.url, `${protocol}://${host}`);

    const response = await fetchHandler(new Request(url, {
      method: req.method,
      headers: req.headers,
      body: ['GET', 'HEAD'].includes(req.method) ? undefined : req.body,
    }));

    res.statusCode = response.status;
    response.headers.forEach((value, key) => res.setHeader(key, value));
    
    const body = await response.arrayBuffer();
    res.end(Buffer.from(body));
  } catch (error) {
    console.error('SSR Bridge Error:', error);
    res.statusCode = 500;
    res.end(JSON.stringify({ 
      error: 'Internal Server Error', 
      message: error.message,
      stack: error.stack 
    }));
  }
}



