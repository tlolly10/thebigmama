export default async function handler(req, res) {
  try {
    // Import the server entry built by TanStack Start
    const { default: serverEntry } = await import('../dist/server.mjs');
    
    if (!serverEntry || typeof serverEntry.fetch !== 'function') {
      throw new Error('Server entry point is not properly exported');
    }

    // Create fetch-compatible request
    const url = `http://${req.headers.host}${req.url}`;
    const init = {
      method: req.method,
      headers: Object.entries(req.headers).reduce((acc, [key, value]) => {
        acc[key] = Array.isArray(value) ? value.join(',') : value;
        return acc;
      }, {}),
    };

    // Add body for non-GET requests
    if (!['GET', 'HEAD'].includes(req.method) && req.body) {
      init.body = typeof req.body === 'string' ? req.body : JSON.stringify(req.body);
    }

    const request = new Request(url, init);
    const response = await serverEntry.fetch(request, process.env, {});

    // Set response headers
    response.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });

    // Send response
    res.status(response.status);
    res.send(await response.text());
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ 
      error: 'Internal Server Error',
      message: error.message 
    });
  }
}

