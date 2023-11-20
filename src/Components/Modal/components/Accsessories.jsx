import PropTypes from 'prop-types';
import css from '../Modal.module.css';

const Accessories = ({ data }) => {
  const { accessories, functionalities } = data;
  return (
    <ul className={css['params-list']}>
      <li>
        <ul className={css['tags-list']}>
          {accessories.map(element => (
            <li key={element} className={css['tags-item']}>
              <p>{element}</p>
            </li>
          ))}
        </ul>
      </li>

      <li>
        <ul className={css['tags-list']}>
          {functionalities.map(element => (
            <li key={element} className={css['tags-item']}>
              <p>{element}</p>
            </li>
          ))}
        </ul>
      </li>
    </ul>
  );
};

export default Accessories;

Accessories.propTypes = {
  data: PropTypes.shape({
    accessories: PropTypes.array.isRequired,
    functionalities: PropTypes.array.isRequired,
  }).isRequired,
};