import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectFavorites } from '../../redux/api/selectors';
import { addFavorite, removeFavorite } from '../../redux/api/favoriteSlice';
import Button from 'Components/Button/Button';
import ParamsList from 'Components/ParamsList/ParamsList';
import notFoundPhoto from '../../images/photo-NOT-FOUND.webp';

import css from './CarCard.module.css';
import Modal from 'Components/Modal/Modal';
import changeAddress from '../../utils/changeAddress';

const btnFavoriteState = {
  CHECKED: 'checked',
  NOT_CHECKED: 'not-checked',
};

const CarCard = ({ data }) => {
  const {
    id,
    img,
    make,
    model,
    year,
    type,
    rentalPrice,
    address,
    rentalCompany,
    mileage,
    accessories,
  } = data;
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  const [btnState, setBtnState] = useState(btnFavoriteState.NOT_CHECKED);
  const [isAddedToFav, setIsAddedToFav] = useState(false);
  const [isModalShow, setIsModalShow] = useState(false);

  const toggleModal = () => setIsModalShow(prev => !prev);

  useEffect(() => {
    if (favorites.length !== 0) {
      setIsAddedToFav(favorites.some(fav => fav.id === id));

      if (isAddedToFav) {
        setBtnState(btnFavoriteState.CHECKED);
      } else {
        setBtnState(btnFavoriteState.NOT_CHECKED);
      }
    }
  }, [favorites, id, isAddedToFav]);

  useEffect(() => {
    if (isModalShow) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '10px';
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
    };
  }, [isModalShow]);

  const handleClickFavorite = () => {
    dispatch(isAddedToFav ? removeFavorite(data) : addFavorite(data));
  };

  return (
    <>
      <div className={css['car-card']}>
        <div className={css['image-thumb']}>
          <img className={css['image']} src={img ? img : notFoundPhoto} alt={make} loading="lazy" />
        </div>

        <div className={css['description']}>
          <p>
            {`${make} `}
            <span className={css['accent']}>{`${model}`}</span>
            {`, ${year}`}
          </p>

          <p>{rentalPrice}</p>
        </div>

        <ParamsList
          data={{
            address: changeAddress(address),
            rentalCompany,
            type,
            model,
            mileage,
            accessories,
          }}
        />

        <Button 
          title="Learn more"
          onButtonClick={toggleModal}
        />

        <button onClick={handleClickFavorite} className={css['favorite-btn']}>
          <svg
            className={`${css['icon']} ${css[btnState]}`}
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              d="M15.6301 3.45753C15.247 3.07428 14.7922 2.77026 14.2916 2.56284C13.791 2.35542 13.2545 2.24866 12.7126 2.24866C12.1707 2.24866 11.6342 2.35542 11.1336 2.56284C10.633 2.77026 10.1782 3.07428 9.79509 3.45753L9.00009 4.25253L8.20509 3.45753C7.43132 2.68376 6.38186 2.24906 5.28759 2.24906C4.19331 2.24906 3.14386 2.68376 2.37009 3.45753C1.59632 4.2313 1.16162 5.28075 1.16162 6.37503C1.16162 7.4693 1.59632 8.51876 2.37009 9.29253L3.16509 10.0875L9.00009 15.9225L14.8351 10.0875L15.6301 9.29253C16.0133 8.90946 16.3174 8.45464 16.5248 7.95404C16.7322 7.45345 16.839 6.91689 16.839 6.37503C16.839 5.83316 16.7322 5.2966 16.5248 4.79601C16.3174 4.29542 16.0133 3.84059 15.6301 3.45753Z"
              stroke="white"
              strokeOpacity="0.8"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      {isModalShow && <Modal onClose={toggleModal} data={data} />}
    </>
  );
};

export default CarCard;

CarCard.propTypes = {
  data: PropTypes.shape({
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
  }).isRequired,
};
