import { Component } from 'react';
import PropTypes from 'prop-types';

import Modal from '../Modal/Modal';

class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  toggleModal = () => {
    this.setState(({ isModalOpen }) => ({
      isModalOpen: !isModalOpen,
    }));
  };

  render() {
    const { item } = this.props;

    return (
      <li className="ImageGalleryItem" onClick={this.toggleModal}>
        <img
          src={item.webformatURL}
          alt={item.tags}
          className="ImageGalleryItem-image"
        />
        {this.state.isModalOpen && (
          <Modal onClose={this.toggleModal}>
            <img src={item.largeImageURL} alt={item.tags} loading="lazy" />
          </Modal>
        )}
      </li>
    );
  }
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  item: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
};
