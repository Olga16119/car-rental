import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import SelectChoose from 'Components/Select/Select';
import { useGetAllQuery } from 'redux/api/advertsApi';
import { useGetMakesFilterQuery } from 'redux/api/filterApi';
import { makesSelectOption, priceSelectOption } from '../../utils';

import css from './Filters.module.css';
// import priceSelectStyles from 'components/SelectInput/priceSelectStyles';
// import makesSelectsStyles from 'components/SelectInput/makesSelectStyles';
import Button from 'Components/Button/Button';

const Filters = ({
  props: { setCurrentPage, handleSearch, currentPage, limit },
}) => {
  const { data: makesData, isLoading } = useGetMakesFilterQuery();
  const { data: allAdverts } = useGetAllQuery();

  const [makesDefSelVal, setMakesDefSelVal] = useState('All makers');
  const [priceDefSelVal, setPriceDefSelVal] = useState('To $');
  const [makesSelectOptions, setMakesSelectOptions] = useState([]);
  const [priceSelectOptions, setPriceSelectOptions] = useState([]);
  const [fromInput, setFromInput] = useState('');
  const [toInput, setToInput] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (makesData && allAdverts) {
      setMakesSelectOptions(makesSelectOption(makesData));
      setPriceSelectOptions(priceSelectOption(allAdverts));
    }
  }, [allAdverts, makesData, currentPage, limit]);

  useEffect(() => {
    const handleBeforeUnload = event => {
      if (event.clientY < 0) {
        const urlWithoutSearchParams = window.location.pathname;
        navigate(urlWithoutSearchParams);
      }
    };

    window.addEventListener('unload', handleBeforeUnload);

    return () => {
      window.removeEventListener('unload', handleBeforeUnload);
    };
  }, [navigate]);

  const handleSelectChange = selectData => {
    const { name, value } = selectData;
    switch (name) {
      case 'makesCategoty': {
        setMakesDefSelVal(value);
        return;
      }
      case 'priceFilter': {
        setPriceDefSelVal(value);
        return;
      }
      default:
        return;
    }
  };

  const handleInputChahge = e => {
    const { value, name } = e.target;
    switch (name) {
      case 'from': {
        setFromInput(value);
        return;
      }
      case 'to': {
        setToInput(value);
        return;
      }
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    setCurrentPage(1);
    handleSearch({
      make: makesDefSelVal,
      rentalPrice: priceDefSelVal,
      from: fromInput,
      to: toInput,
    });
  };

  return (
    <form className={css['form']} autoComplete="off" onSubmit={handleSubmit}>
      <label className={css['label']}>
        <span className={css['label-text']}>Car brand</span>
        <SelectChoose
          nameInput="makesCategoty"
          options={makesSelectOptions}
          handleChange={handleSelectChange}
          defaultValue={makesDefSelVal}
          isLoading={isLoading}
          styles={`${css['min']}`}
        />
      </label>

      <label className={css['label']}>
        <span className={css['label-text']}>Price/ 1 hour</span>
        <SelectChoose
          nameInput="priceFilter"
          options={priceSelectOptions}
          handleChange={handleSelectChange}
          defaultValue={makesDefSelVal}
          isLoading={isLoading}
          styles
          //   ={priceSelectStyles()}
        />
      </label>

      <div className={css['label']}>
        <label className={css['label-text']} htmlFor="from">
          Сar mileage / km
        </label>
        <div className={css['range']}>
          <input
            className={css['min']}
            placeholder="From"
            type="text"
            name="from"
            value={fromInput}
            onChange={handleInputChahge}
          />

          <input
            className={css['max']}
            placeholder="To"
            type="text"
            name="to"
            value={toInput}
            onChange={handleInputChahge}
          />
        </div>
      </div>

      <Button type="submit" title="Search" styles={css['btn-search']} />
    </form>
  );
};

export default Filters;

Filters.propTypes = {
  props: PropTypes.shape({
    setCurrentPage: PropTypes.func.isRequired,
    handleSearch: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired,
    limit: PropTypes.number.isRequired,
  }).isRequired,
};
