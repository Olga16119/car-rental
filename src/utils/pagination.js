const pagination = ({ array, limit, currentPage }) => {
  
  const newArray = [...array];
  const startIndex = (currentPage - 1) * limit;
  const endIndex = startIndex + limit;
  return newArray.slice(0, endIndex);
};

export default pagination;