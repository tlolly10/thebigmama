export default async function handler(req, res) {
  try {
    // Dynamic import of the server entry
    const { default: serverEntry } = await import('../dist/server/index.js');
    
    if (!serverEntry || typeof serverEntry !== 'function') {
      throw new Error('Server entry point is not properly exported');
    }

    // Build the full URL
    const protocol = req.headers['x-forwarded-proto'] || 'https';
    const host = req.headers['x-forwarded-host'] || req.headers.host || 'localhost';
    const url = `${protocol}://${host}${req.url}`;

    // Build request init object
    const init = {
      method: req.method,
      headers: req.headers,
    };

    // Add body for non-GET requests
    if (!['GET', 'HEAD'].includes(req.method)) {
      if (typeof req.body === 'string') {
        init.body = req.body;
      } else if (req.body) {
        init.body = JSON.stringify(req.body);
      }
    }

    // Call the server entry point
    const response = await serverEntry(new Request(url, init));

    // Set response status
    res.statusCode = response.status;

    // Set response headers
    response.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });

    // Send response body
    const text = await response.text();
    res.end(text);
  } catch (error) {
    console.error('Server error:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
      error: 'Internal Server Error',
      message: error.message,
    }));
  }
}


