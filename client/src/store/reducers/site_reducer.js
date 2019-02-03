import { OVERLAY_STATUS } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case OVERLAY_STATUS:
      return { ...state, overlay: action.payload };
    default:
      return state;
  }
}
