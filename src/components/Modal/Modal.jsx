import React, { Component } from 'react';

import s from 'components/Modal/Modal.module.css';

import PropTypes from 'prop-types';

import { createPortal } from 'react-dom';

const modalRoot = document.getElementById('modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleEscClose);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEscClose);
  }

  handleEscClose = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { modalSource, modalDescription } = this.props;
    return createPortal(
      <div className={s.Overlay} onClick={this.handleOverlayClick}>
        <div className={s.Modal}>
          <img src={modalSource} alt={modalDescription} />
        </div>
      </div>,
      modalRoot,
    );
  }
}

Modal.propTypes = {
  modalSource: PropTypes.string,
  modalDescription: PropTypes.string,
  onClose: PropTypes.func,
};

export { Modal };
