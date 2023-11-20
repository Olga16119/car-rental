import PropTypes from 'prop-types';
import CarCard from 'Components/CarCard/CarCard';
import css from './FavoritesList.module.css'

const FavoritesList = ({ cards }) => {
  return (
    <ul className={css['favorites-list']}>
      {cards.map(card => {
        return (
          <li className={css['card-item']} key={card.id}>
            <CarCard data={card} />
          </li>
        );
      })}
    </ul>
  );
};

export default FavoritesList;

FavoritesList.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      img: PropTypes.string,
      make: PropTypes.string.isRequired,
      model: PropTypes.string.isRequired,
      year: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      rentalPrice: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
      rentalCompany: PropTypes.string.isRequired,
      mileage: PropTypes.number.isRequired,
      accessories: PropTypes.array.isRequired,
    }).isRequired
  ).isRequired,
};