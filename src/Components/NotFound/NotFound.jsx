import PropTypes from 'prop-types';
import css from './NotFound.module.css';

const NotFound = ({ message }) => {
  return (
    <div className={css['no-cont-wrap']}>
      <div className={css['no-cont-img']}></div>
      <p className={css['no-cont-txt']}>{message}</p>
    </div>
  );
};

export default NotFound;

NotFound.propTypes = {
  message: PropTypes.string.isRequired,
};
