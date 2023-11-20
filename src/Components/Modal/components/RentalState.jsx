import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import css from '../Modal.module.css';

const RentalState = ({
  data: { rentalConditions, mileage, rentalPrice },
}) => {
  const [conditionsArray, setConditionsArray] = useState([]);
  useEffect(() => {
    setConditionsArray(rentalConditions.split('\n'));
  }, [rentalConditions]);

  return (
    <ul className={css['list-condition']}>
      {conditionsArray.map(el => {
        if (el.includes('Minimum age:')) {
          const age = parseInt(el.replace(/\D/g, ''));
          return (
            <li key={el} className={css['item-condition']}>
              <p>
                Minimum age:{' '}
                <span
                  className={`${css['text-accent']} ${css['accent']}`}
                >
                  {age}
                </span>
              </p>
            </li>
          );
        }
        return (
          <li key={el} className={css['item-condition']}>
            <p>{el}</p>
          </li>
        );
      })}

      <li className={css['item-condition']}>
        <p>
          Mileage:{' '}
          <span className={`${css['text-accent']} ${css['text-accent']}`}>
            {mileage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </span>
        </p>
      </li>

      <li className={css['item-condition']}>
        <p>
          Price:{' '}
          <span className={`${css['text-accent']} ${css['accent']}`}>
            {rentalPrice}
          </span>
        </p>
      </li>
    </ul>
  );
};

export default RentalState;

RentalState.propTypes = {
  data: PropTypes.shape({
    rentalConditions: PropTypes.string.isRequired,
    mileage: PropTypes.number.isRequired,
    rentalPrice: PropTypes.string.isRequired,
  }).isRequired,
};