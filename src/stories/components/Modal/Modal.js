import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import './Modal.scss';
import * as bootstrap from 'bootstrap/dist/js/bootstrap'

const Modal = (props) => {
  const modalRef = useRef();

  const showModal = () => {
    const modalEle = modalRef.current;
    const options = { }
    if(props.isStatic) options.backdrop = 'static';

    const bsModal = new bootstrap.Modal(modalEle, options);
    
    bsModal.show();
  }

  const hideModal = () => {
      const modalEle = modalRef.current;
      const bsModal= bootstrap.Modal.getInstance(modalEle);
      bsModal.hide();
  }
  
  const renderSize = () => {
    const isCenteredClass = props.isCentered ? 'modal-dialog-centered': '';
    switch (props.size) {
      case 'small':
        return 'modal-sm ' + isCenteredClass;
      case 'large':
        return 'modal-lg ' + isCenteredClass;
      case 'extra-large':
        return 'modal-xl ' + isCenteredClass;
      default:
        return '';
    }
  }

  return (
    <div className="Modal" data-testid="Modal">

      <button type="button" className="btn btn-primary" onClick={showModal}>
        Launch demo modal
      </button>

      <div className="modal fade" tabIndex="-1" ref={modalRef} >
        <div className={`modal-dialog ${renderSize()}`}>
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">{props.title}</h5>
              <button type="button" className="close" onClick={hideModal}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {props.message}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={hideModal}>Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
};

Modal.propTypes = {
  /**
   * Static modal cannot close even clicked on backdrop
   */
  isStatic: PropTypes.bool,
  /**
   * Size of the modal
   */
  size: PropTypes.oneOf(['default','small','large','extra-large']),
  /**
   * Vertical centered
   */
  isCentered: PropTypes.bool,
  /**
   * Title of the modal
   */
  title: PropTypes.string,
  /**
   * Message of the modal
   */
  message: PropTypes.string
};

Modal.defaultProps = {
  isStatic: true,
  size: 'default',
  isCentered: false,
  title: 'Modal Title',
  message: 'Modal Message'
};

export default Modal;
