import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import { Component } from 'react';
import fetchImg from '../helpers/api.js';

class App extends Component {
  state = {
    gallery: [],
    page: 0,
    textFind: '',
    perPage: 12,
    isLoad: false,
    totalHits: 0,
  };

  handleTextChange = value => {
    this.setState({ textFind: value.toLowerCase().trim() });
  };

  componentDidUpdate(_, prevState) {
    if (prevState.textFind !== this.state.textFind) {
      const selectPage = this.state.page + 1;
      this.setState({ isLoad: true, gallery: [] });

      fetchImg(selectPage, this.state.textFind, this.state.perPage)
        .then(data => {
          this.setState(
            {
              gallery: data.hits,
              page: selectPage,
              totalHits: data.totalHits,
            },
            console.log(data)
          );
        })
        .catch(e => console.error('API Error:', e))
        .finally(() => {
          this.setState({ isLoad: false });
        });
    }
  }

  handleLoadMore = () => {

    const selectPage = this.state.page + 1;
    this.setState({ isLoad: true });

    fetchImg(selectPage, this.state.textFind, this.state.perPage)
      .then(data => {
        this.setState(prev => ({
          gallery: [...prev.gallery, ...data.hits],
          page: selectPage,
          totalHits: data.totalHits,
        }));
      })
      .catch(e => console.error('API Error:', e))
      .finally(() => {
        this.setState({ isLoad: false });
      });
  };

  render() {
    
    const { isLoad, gallery, totalHits, page, perPage } = this.state;

    return (
      <div className="App">
        <Searchbar onSubmit={this.handleTextChange} />
        <ImageGallery data={gallery} />
        {isLoad && <Loader />}
        {gallery.length > 0 && totalHits > page * perPage && !isLoad && (
          <Button onClick={this.handleLoadMore} />
        )}
      </div>
    );
  }
}

export default App;
