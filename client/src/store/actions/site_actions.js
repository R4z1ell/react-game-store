import { OVERLAY_STATUS } from './types';

export function getOverlayStatus(
  value,
  showLogIn,
  showResetPass,
  showSuccessMessage
) {
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
  if (showSuccessMessage === true) {
    request = { value, showSuccessMessage };
  }

  return {
    type: OVERLAY_STATUS,
    payload: request
  };
}
