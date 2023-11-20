import PropTypes from 'prop-types';
import css from './ParamsList.module.css'

const ParamsList = ({ data }) => {
  const { address, rentalCompany, type, model, mileage, accessories } = data;

  return (
    <ul className={css['params-list']}>
      <li>
        <ul className={css['cars-tags']}>
          <li className={css['tags-item']}>
            <p className={css['tag-text']}>{address[0]}</p>
          </li>

          <li className={css['tags-item']}>
            <p className={css['tag-text']}>{address[1]}</p>
          </li>

          <li className={css['tags-item']}>
            <p className={css['tag-text']}>{rentalCompany}</p>
          </li>
        </ul>
      </li>

      <li>
        <ul className={css['cars-tags']}>
          <li className={css['tags-item']}>
            <p className={css['tag-text']}>{type}</p>
          </li>

          <li className={css['tags-item']}>
            <p className={css['tag-text']}>{model}</p>
          </li>

          <li className={css['tags-item']}>
            <p className={css['tag-text']}>{mileage}</p>
          </li>

          <li className={css['tags-item']}>
            <p className={css['tag-text']}>{accessories[0]}</p>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default ParamsList;

ParamsList.propTypes = {
  data: PropTypes.shape({
    address: PropTypes.array.isRequired,
    rentalCompany: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    mileage: PropTypes.number.isRequired,
    accessories: PropTypes.array.isRequired,
  }).isRequired,
};
