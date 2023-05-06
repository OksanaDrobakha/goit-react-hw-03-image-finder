import PropTypes from 'prop-types';

const Button = ({ onClick, children }) => {
  return (
    <button type="button" className="Button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};
