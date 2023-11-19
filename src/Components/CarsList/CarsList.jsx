import PropTypes from 'prop-types';
import CarCard from 'Components/CarCard/CarCard';

const CarsList = ({ cars }) => {
  return (
    <>
      <ul>
        {cars.map(car => (
          <li key={car.id}>
            <CarCard data={car} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default CarsList;

CarsList.propTypes = {
  cars: PropTypes.arrayOf(
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
