// import PropTypes from 'prop-types';
// import Card from 'components/Card';

// import utils from 'css/utils.module.css';

// const FavoriteList = ({ favCards }) => {
//   return (
//     <ul className={utils['card-list']}>
//       {favCards.map(fav => {
//         return (
//           <li className={utils['card-list-item']} key={fav.id}>
//             <Card data={fav} />
//           </li>
//         );
//       })}
//     </ul>
//   );
// };

// export default FavoriteList;

// FavoriteList.propTypes = {
//   favCards: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       img: PropTypes.string,
//       make: PropTypes.string.isRequired,
//       model: PropTypes.string.isRequired,
//       year: PropTypes.number.isRequired,
//       type: PropTypes.string.isRequired,
//       rentalPrice: PropTypes.string.isRequired,
//       address: PropTypes.string.isRequired,
//       rentalCompany: PropTypes.string.isRequired,
//       mileage: PropTypes.number.isRequired,
//       accessories: PropTypes.array.isRequired,
//     }).isRequired
//   ).isRequired,
// };