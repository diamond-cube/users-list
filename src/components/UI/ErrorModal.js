import React from "react";
import ReactDOM from "react-dom";

import Card from "./Card";
import "./ErrorModal.css";

function Backdrop(props) {
  return <div className="backdrop" onClick={props.onConfirm}></div>;
}

function ModalOverlay(props) {
  return (
    <div className="modal">
      <Card>
        <header className="header">
          <h2>{props.title}</h2>
        </header>

        <div className="content">
          <p>{props.message}</p>
        </div>

        <footer className="actions">
          <button onClick={props.onConfirm} className="button">
            Close
          </button>
        </footer>
      </Card>
    </div>
  );
}

function ErrorModal(props) {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
}

export default ErrorModal;
