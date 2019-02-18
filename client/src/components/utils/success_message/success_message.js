import React from 'react';

import './success_message.scss';

import { MdClose } from 'react-icons/md';

const SuccessMessage = props => {
  const closeSuccessMessage = () => {
    props.closeSuccessMessage(false);
  };

  return (
    <div className="success-message">
      <button className="modal__btn-close" onClick={closeSuccessMessage}>
        <MdClose fill="#595959" size="1em" />
      </button>
      <div className="success-message__content-wrapper">
        <div className="success-message__content-item">
          <h2 className="success-message__title">Account</h2>
          <p className="success-message__description">
            An email with password reset instructions was sent to your address.
            Click the link in the email to complete the process and setup a new
            password.
          </p>
          <p className="success-message__description">
            If you don't see the email in your inbox, check other places it
            might be, like your junk, spam, or other folders.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SuccessMessage;
