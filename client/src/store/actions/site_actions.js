import { OVERLAY_STATUS } from './types';

export function getOverlayStatus(value, showLogIn, showResetPass) {
  let request;
  if (!showLogIn) {
    request = { value };
  }
  if (showLogIn === true) {
    request = { value, showLogIn };
  }
  if (showResetPass === true) {
    request = { value, showResetPass };
  }

  return {
    type: OVERLAY_STATUS,
    payload: request
  };
}
