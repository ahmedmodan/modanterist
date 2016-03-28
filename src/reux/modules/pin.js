export const POST_PIN = 'POST_PIN';

export function postPin(payload) {
  const request = fetch('/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  return { type: POST_PIN,
           payload: request };
}
