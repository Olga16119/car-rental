import {BarLoader} from 'react-spinners';

const Loader = ({ size = 10, margin = 6, position = {} }) => {
  return (
    <BarLoader
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="bars-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
    />
  );
};

export default Loader;
