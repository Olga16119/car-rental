import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useGetAllQuery } from 'redux/api/advertsApi';
import { filterCars, pagination, scroll } from '../../utils';

import CarsList from 'Components/CarsList/CarsList';
import Filters from 'Components/Filters/Filters';
import Button from 'Components/Button/Button';
import NotFound from 'Components/NotFound/NotFound';
import Loader from 'Components/Loader/Loader';
import css from './Catalog.module.css';

const Catalog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(9);
  const [totalPages, setTotalPages] = useState(0);
  const [cars, setCars] = useState([]);
  const [searchFilters, setSearchFilters] = useState({});
  const [isSearch, setIsSearh] = useState(false);
  const [filteredCarsArray, setFilteredCarsArray] = useState([]);

  const { data: allAdverts, isLoading, isFetching } = useGetAllQuery();

  useEffect(() => {
    if (!allAdverts) {
      return;
    }

    setLimit(12);
    setCars(allAdverts);

    if (!isSearch) {
      const paginatedCars = pagination({
        array: allAdverts,
        limit,
        currentPage,
      });
      setCars(paginatedCars);
      setTotalPages(Math.ceil(allAdverts.length / limit));
    } else {
      const filteredCars = pagination({
        array: filteredCarsArray,
        limit,
        currentPage,
      });
      setCars(filteredCars);
      setTotalPages(Math.ceil(filteredCarsArray.length / limit));
    }
  }, [allAdverts, currentPage, limit, isSearch, filteredCarsArray]);

  useEffect(() => {
    scroll({ array: cars, limit });
  }, [cars, limit]);

  const handleLoadMore = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const handleSearch = ({ make, rentalPrice, from, to }) => {
    const isSameSearch =
      make === searchFilters.make &&
      rentalPrice === searchFilters.rentalPrice &&
      from === searchFilters.from &&
      to === searchFilters.to;

    if (isSameSearch) {
      return;
    }

    setSearchFilters({ make, rentalPrice, from, to });
    setIsSearh(true);
    const filteredCars = filterCars({
      carsArray: allAdverts,
      make,
      rentalPrice,
      from,
      to,
    });

    if (filteredCars.length > 0) {
      toast(`Found ${filteredCars.length} cars `);
    } else {
      toast.error('Nothing was found for your request');
    }

    setFilteredCarsArray(filteredCars);
  };

  return (
    <>
      <Filters
        props={{
          setCurrentPage,
          handleSearch,
          currentPage,
          limit,
        }}
      />

      {isLoading || isFetching ? (
        <Loader
          position={{
            textAlign: 'center',
          }}
        />
      ) : cars.length !== 0 ? (
        <CarsList cars={cars} />
      ) : (
        <NotFound message={'Sorry, nothing was found'} />
      )}

      {currentPage < totalPages && (
        
        <Button
          onButtonClick={handleLoadMore}
          title="Load More"
          styles={css['btn-LoadMore']}
        />
      )}
    </>
  );
};

export default Catalog;
