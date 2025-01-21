import "./Modal.css";

const Modal = (props) => {
  return (
    <div className="modal">
      <div className="modal-outer">
        <div className="modal-inner">
          <div className="modal-head">
            <h2>{props.title}</h2>
          </div>
          <div className="modal-content">
            <p>{props.message}</p>
            <button onClick={props.onConfirm}>{props.btn}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
