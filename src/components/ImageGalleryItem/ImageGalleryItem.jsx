import React, { Component } from 'react';

import s from 'components/ImageGalleryItem/ImageGalleryItem.module.css';

import PropTypes from 'prop-types';

import { Modal } from 'components/Modal/Modal';

class ImageGalleryItem extends Component {
  state = { showModal: false };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { source, description, id, dataOriginal } = this.props;
    const { showModal } = this.state;
    return (
      <>
        <li key={id} className={s.ImageGalleryItem} onClick={this.toggleModal}>
          <img
            src={source}
            alt={description}
            className={s.ImageGalleryItem__image}
          />
        </li>
        {showModal && (
          <Modal
            modalSource={dataOriginal}
            modalDescription={description}
            onClose={this.toggleModal}
          />
        )}
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  dataOriginal: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  source: PropTypes.string,
  description: PropTypes.string,
};

export { ImageGalleryItem };
