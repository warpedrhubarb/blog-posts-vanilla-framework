import React from "react";

export function Error({ errorMessage }) {
  return (
    <div className="p-notification--negative">
      <div className="p-notification__content">
        <h5 className="p-notification__title">Error. Please try to reload the page.</h5>
        <p className="p-notification__message">{errorMessage}</p>
      </div>
    </div>
  );
}
