import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { selectFavorites } from '../../redux/api/selectors';
import { pagination, scroll } from '../../utils';
import Favorites from 'Components/FavoritesList/FavoritesList';
import Button from 'Components/Button/Button';
import NotFound from 'Components/NotFound/NotFound';

const Favotites = () => {
  const favorites = useSelector(selectFavorites);
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(9);
  const [totalPages, setTotalPages] = useState(0);
  const [cars, setCars] = useState([]);

  useEffect(() => {
    if (!favorites) {
      return;
    }

    setLimit(12);

    const paginatedCars = pagination({
      array: favorites,
      limit,
      currentPage,
    });
    setCars(paginatedCars);
    setTotalPages(Math.ceil(favorites.length / limit));
  }, [favorites, currentPage, limit]);

  useEffect(() => {
    scroll({ array: cars, limit });
  }, [cars, limit]);

  const handleLoadMore = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  return (
    <>
      {cars.length !== 0 ? (
        <Favorites cards={cars} />
      ) : (
        <NotFound message={'The list of favorite vehicles is empty'} />
      )}

      {currentPage < totalPages && (
        <Button
          onButtonClick={handleLoadMore}
          title="Load More"
        />
      )}
    </>
  );
};

export default Favotites;
