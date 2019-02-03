import { OVERLAY_STATUS } from './types';

export function getOverlayStatus(value, showLogIn) {
  let request;
  if (!showLogIn) {
    request = { value };
  }
  if (showLogIn === true) {
    request = { value, showLogIn };
  }

  return {
    type: OVERLAY_STATUS,
    payload: request
  };
}
