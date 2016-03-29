import Cloudinary from 'cloudinary';

export const POST_PIN = 'POST_PIN';

export function postPin(payload) {
  console.log(payload);
  Cloudinary.uploader.upload(pa)
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
