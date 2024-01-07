import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ data }) => {
  const images = data.map(({ id, webformatURL, user, largeImageURL }) => (
    <ImageGalleryItem
      key={id}
      id={id}
      webformatURL={webformatURL}
      user={user}
      largeImageURL={largeImageURL}
    />
  ));

  return <ul className="ImageGallery">{images}</ul>;
};

export default ImageGallery;
