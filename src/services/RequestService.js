import React from 'react';

async function RequestService({ url, method = 'GET' }) {
  const data = await fetch(url, {
    method,
  });

  if (!data) return null;

  return data.json();
}

export default RequestService;
