import exploreState from './../states/exploreState';
import { Map } from 'immutable';


export const CLOSE_MODAL = 'CLOSE_MODAL';
export const OPEN_MODAL = 'OPEN_MODAL';
export const FILE_PREVIEW = 'FILE_PREVIEW';
export const SET_PIN_STATE = 'SET_PIN_STATE';


// export function logResponse(response) {
//   console.log('hey');
//   console.log('this is the response', response);
// }

export function openModal(payload = true) {
  return { type: OPEN_MODAL,
           payload };
}

export function closeModal(response) {
  let payload;
  if (response.status === 200) {
    payload = false;
  }
  return { type: CLOSE_MODAL,
           payload };
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

export function setPinState(payload) {
  return { type: SET_PIN_STATE,
           payload };
}

export function savePin(payload) {
  const formData = createFormData(payload);
  return dispatch => fetch('/api/pins/savePin', {
    method: 'POST',
    body: formData
  }).then(response => {
    if (response.status === 200) {
      dispatch(closeModal(response));
    }
  });
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

export default function pinReducer(state = exploreState, action) {
  switch (action.type) {
    case CLOSE_MODAL:
      return state.set('modalOpenStatus', { status: action.payload });
    case OPEN_MODAL:
      return state.set('modalOpenStatus', { status: action.payload });
    case FILE_PREVIEW:
      return state.set('imagePreview', action.payload);
    case SET_PIN_STATE:
      return state.merge(
          Map({ imagePreview: undefined,
                pins: action.payload })
        );
    default:
      return state;
  }
}
