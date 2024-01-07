
import { Component } from 'react';

class Modal extends Component {
  state = {};
  
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  }

  handleKeydown = evt => {
    if (evt.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = evt => {
    if (evt.currentTarget === evt.target) {
      this.props.onClose();
    }
  };

  render() {
    return (
      <div className="Overlay" onMouseDown={this.handleBackdropClick}>
        <div className="Modal">
          <img src={this.props.imageUrl} alt="Large version" />
        </div>
      </div>
    );
  }
}

export default Modal;