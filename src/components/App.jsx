import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import Button from './Button/Button';
import { Component } from 'react';
// import fetchImg from '../helpers/api.js';

class App extends Component {
  state = {
    gallery: [],
    page: 1,
    textFind: '',
    perPage: 12,
  };

  handleTextChange = value => {
    this.setState({ textFind: value });
  };

  // componentDidUpdate(_, prevState) {
  //   if (prevState.textFind !== this.state.textFind) {

  //   }
  // }

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleTextChange} />
        <Button />
        <Loader />
        <Modal />
        <ImageGallery />
      </div>
    );
  }
}

export default App;
