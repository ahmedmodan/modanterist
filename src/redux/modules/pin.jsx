import pinState from './../states/pinState';


export const CLOSE_MODAL = 'CLOSE_MODAL';
export const FILE_PREVIEW = 'FILE_PREVIEW';
export const SET_PIN_STATE = 'SET_PIN_STATE';


export function logResponse(response) {
  console.log('hey');
  console.log('this is the response', response);
}

// export function closeModal() {
//   action:
// }

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

export function savePin(payload) {
  const formData = createFormData(payload);
  return dispatch => fetch('/api/pins/savePin', {
    method: 'POST',
    body: formData
  }).then(response => {
    if (response.status === 200) {
      dispatch(logResponse(response));
    }
  });
}

export function setPinState(payload) {
  return { type: SET_PIN_STATE,
           payload };
}

export function getPins(payload) {
  return dispatch => fetch(`/api/pins/getPins?tags=${payload.join(',')}`)
    .then(response => response.json())
    .then(body => dispatch(setPinState(body)));
}

export function renderPreview(payload) {
  return { type: FILE_PREVIEW,
           payload };
}

export const actions = {
  renderPreview,
  savePin
};

export default function pinReducer(state = pinState, action) {
  switch (action.type) {
    case FILE_PREVIEW:
      return state.set('imagePreview', action.payload);
    case SET_PIN_STATE:
      return state.set('pins', action.payload);
    default:
      return state;
  }
}
