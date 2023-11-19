import PropTypes from 'prop-types';

const ParamsList = ({ data }) => {
  const { address, rentalCompany, type, model, mileage, accessories } = data;

  return (
    <ul>
      <li>
        <ul>
          <li>
            <p>{address[0]}</p>
          </li>

          <li>
            <p>{address[1]}</p>
          </li>

          <li>
            <p>{rentalCompany}</p>
          </li>
        </ul>
      </li>

      <li>
        <ul>
          <li>
            <p>{type}</p>
          </li>

          <li>
            <p>{model}</p>
          </li>

          <li>
            <p>{mileage}</p>
          </li>

          <li>
            <p>{accessories[0]}</p>
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
