import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import notFoundPhoto from '../../images/photo-NOT-FOUND.webp';

import css from './Modal.module.css';
import Tags from './components/Tags';
import changeAddress from 'utils/changeAddress';
import Accessories from './components/Accsessories';
import RentalState from './components/RentalState';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ data, onClose }) => {
  const {
    make,
    img,
    model,
    year,
    rentalPrice,
    address,
    accessories,
    mileage,
    description,
    functionalities,
    rentalConditions,
  } = data;

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'visible';
    };
  }, [onClose]);

  const onBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div className={css['backdrop']} onClick={onBackdropClick}>
      <div className={css['modal']}>
        <div className={css['modal-container']}>
          <div className={css['image-thumb']}>
            <img
              className={css['image']}
              src={img ? img : notFoundPhoto}
              alt={make}
              loading="lazy"
            />
          </div>
          <p className={css['title']}>
            {`${make} `}
            <span className={css['accent']}>{`${model}`}</span>
            {`, ${year}`}
          </p>
          <Tags data={{ ...data, address: changeAddress(address) }} />
          <p className={css['description']}>{description}</p>
          <p className={css['modal-text']}>
            Accessories and functionalities:
          </p>
          <Accessories data={{ accessories, functionalities }} />
          <p className={css['modal-text']}>Rental Conditions:</p>
          <RentalState data={{ rentalConditions, mileage, rentalPrice }} />

          <a
            href="tel:+380730000000"
            className={css['rental-btn']}
          >
            Rental car
          </a>

                  <button className={css['close-btn']} onClick={() => onClose()}>
       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M18 6L6 18" stroke="#121417" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M6 6L18 18" stroke="#121417" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
          </button>
        </div>
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;

Modal.propTypes = {
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
    description: PropTypes.string.isRequired,
    functionalities: PropTypes.array.isRequired,
    rentalConditions: PropTypes.string.isRequired,
    fuelConsumption: PropTypes.string.isRequired,
    engineSize: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};
