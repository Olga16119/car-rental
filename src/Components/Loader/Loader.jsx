import { BeatLoader } from 'react-spinners';

const Loader = ({ position = {} }) => {
  return (
    <BeatLoader
      height="80"
      width="80"
      radius="9"
      color={'var(--accent-colour)'}
      aria-label="three-dots-loading"
      cssOverride={position}
    />
  );
};

export default Loader;
