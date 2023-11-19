import PropTypes from 'prop-types';

import css from './Button.module.css';

const Button = ({
  title,
  onButtonClick = () => {},
  styles = '',
  type = 'button',
}) => {
  return (
    <button
      className={`${css['btn']} ${styles}`}
      type={type}
      onClick={() => onButtonClick()}
    >
      {title}
    </button>
  );
};

export default Button;

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func,
  styles: PropTypes.string,
  type: PropTypes.string,
};
