const scroll = ({ array, limit }) => {
  const height = 250;
  if (array.length > limit) {
    window.scrollBy({
      top: height * 1.5,
      behavior: 'smooth',
    });
  }
};

export default scroll;