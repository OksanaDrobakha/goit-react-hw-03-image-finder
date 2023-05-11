import { Component } from 'react';
import * as API from '../services/api';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import { Loader } from './Loader/Loader';

export default class App extends Component {
  state = {
    gallery: [],
    searchValue: '',
    page: 1,
    totalImgs: 0,
    status: 'idle',
  };

  async componentDidUpdate(_, prevState) {
    const { searchValue, page } = this.state;

    if (prevState.searchValue !== searchValue || prevState.page !== page) {
      this.setState({ status: 'pending' });
      try {
        const res = await API.searchImages(searchValue, page);
        if (res.totalHits === 0) {
          return this.setState({
            status: 'rejected',
          });
        }
        this.setState(s => ({
          gallery: [...s.gallery, ...res.hits],
          totalImgs: res.totalHits,
          status: 'resolved',
        }));
      } catch (error) {
        this.setState({
          status: 'rejected',
        });
        console.log(error);
      }
    }
  }

  onSubmit = values => {
    if (values.search === this.state.searchValue) {
      alert('В процесі пошуку');
      return;
    }
    this.setState({
      searchValue: values.search,
      gallery: [],
      page: 1,
      totalImgs: 0,
    });
  };

  onLoadMore = () => {
    this.setState(s => ({ page: s.page + 1 }));
  };

  render() {
    const { gallery, searchValue, totalImgs, status } = this.state;
    return (
      <div className="App">
        <Searchbar onSubmit={this.onSubmit} />
        {status === 'idle' && (
          <p className="start-text">Будь ласка, введіть свій запит</p>
        )}
        {status === 'rejected' && (
          <p className="start-text">
            Щось пішло не так, спробуйте ще раз знайти "{searchValue}"
          </p>
        )}
        {!!gallery.length && <ImageGallery items={gallery} />}
        {status === 'pending' && <Loader />}
        {status === 'resolved' && totalImgs !== gallery.length && (
          <Button onClick={this.onLoadMore}>Load more</Button>
        )}
      </div>
    );
  }
}
