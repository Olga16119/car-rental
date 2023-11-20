import PropTypes from 'prop-types';
import css from './NotFound.module.css';

const NotFound = ({ message }) => {
  return (
    <div className={css['content-box']}>
      <div className={css['image']}></div>
      <p className={css['text']}>{message}</p>
    </div>
  );
};

export default NotFound;

NotFound.propTypes = {
  message: PropTypes.string.isRequired,
};
