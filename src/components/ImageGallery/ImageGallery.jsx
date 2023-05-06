import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem';

const ImageGallery = ({ items }) => {
  return (
    <>
      <ul className="ImageGallery">
        {items.map(item => (
          <ImageGalleryItem item={item} key={item.id} />
        ))}
      </ul>
    </>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
