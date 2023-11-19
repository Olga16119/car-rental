const changeAddress = address => {
  return address.split(', ').slice(-2);
};

export default changeAddress;