import PropTypes from 'prop-types';

const Button = ({ onClick, classname, children }) => {
  return (
    <button type="button" className={classname} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  classname: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
