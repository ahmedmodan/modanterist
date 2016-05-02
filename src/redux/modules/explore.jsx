import exploreState from './../states/exploreState';
import { Map, List } from 'immutable';


export const CLOSE_MODAL_AND_UPDATE_PIN = Symbol('CLOSE_MODAL_AND_UPDATE_PIN');
export const OPEN_MODAL = Symbol('OPEN_MODAL');
export const SET_CLOSE_STATE = Symbol('SET_CLOSE_STATE');
export const FILE_PREVIEW = Symbol('FILE_PREVIEW');
export const SET_PIN_STATE = Symbol('SET_PIN_STATE');


// export function logResponse(response) {
//   console.log('hey');
//   console.log('this is the response', response);
// }
export function setCloseState(payload = false) {
  return { type: SET_CLOSE_STATE,
           payload };
}

export function openModal(payload = true) {
  return { type: OPEN_MODAL,
           payload };
}

export function closeModalAndUpdatePin(data, status) {
  const payload = {
    savedPin: {},
    modalStatus: false
  };
  if (status === 200) {
    payload.savedPin = data[0];
  }
  return { type: CLOSE_MODAL_AND_UPDATE_PIN,
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
  const responseStatus = { status: 404 };
  return dispatch => fetch('/api/pins/savePin', {
    method: 'POST',
    body: formData
  }).then(response => {
    responseStatus.status = response.status;
    return response.json();
  })
    .then(data => dispatch(closeModalAndUpdatePin(data, responseStatus.status)));
}

export function getPins(payload) {
  return dispatch => fetch(`/api/pins/getPins?tags=${payload.join(',')}`)
    .then(response => response.json())
    .then(body => dispatch(setPinState(body.reverse())));
}

export function renderPreview(payload) {
  return { type: FILE_PREVIEW,
           payload };
}

export const actions = {
  renderPreview,
  savePin
};

export default function exploreReducer(state = exploreState, action) {
  switch (action.type) {
    case SET_CLOSE_STATE:
      return state.set('modalOpenStatus', { status: action.payload });
    case CLOSE_MODAL_AND_UPDATE_PIN:
      return state.merge(
        Map({ modalOpenStatus: { status: action.payload.modalStatus },
              pins: state.get('pins').unshift(action.payload.savedPin),
              imagePreview: undefined })
      );
    case OPEN_MODAL:
      return state.set('modalOpenStatus', { status: action.payload });
    case FILE_PREVIEW:
      return state.set('imagePreview', action.payload);
    case SET_PIN_STATE:
      return state.merge(
          Map({ imagePreview: undefined,
                pins: List(action.payload) })
        );
    default:
      return state;
  }
}
