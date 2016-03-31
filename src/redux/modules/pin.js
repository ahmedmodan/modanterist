
export const POST_PIN = 'POST_PIN';

export function logResponse(response) {
  console.log('this is the response', response);
  response.text().then(stuff => console.log('this is the cors response', stuff));
}

export function createFormData(payload) {
  const formData = new FormData();
  for (const field in payload) {
    if (field !== 'image') {
      formData.append(field, payload[field]);
    } else {
      formData.append('file', payload[field][0]);
    }
  }
  return formData;
}

export function postPin(payload) {
  const formData = createFormData(payload);
  return dispatch => fetch('/api/pins/savePin', {
    method: 'POST',
    body: formData
  }).then(response => response.json())
    .then(data => dispatch(logResponse(data)));
}


export default function pinReducer(state = {}, action) {
  switch (action.type) {
    case POST_PIN:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}
