import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const rootModal = document.querySelector('#root-modal');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onKeyDown);
    document
      .querySelector('.Overlay')
      .addEventListener('click', this.onBackdropClick);
    document.querySelector('html').style.overflow = 'hidden';
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeyDown);
    document
      .querySelector('.Overlay')
      .removeEventListener('click', this.onBackdropClick);
    document.querySelector('html').style.overflow = 'visible';
  }

  onKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };
  onBackdropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className="Overlay">
        <div className="Modal">{this.props.children}</div>
      </div>,
      rootModal
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
