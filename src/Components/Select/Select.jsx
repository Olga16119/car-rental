import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Select from 'react-select';

const SelectChoose = ({
  nameInput,
  options,
  handleChange,
  defaultValue,
  isLoading = false,
}) => {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    if (!defaultValue) {
      setValue(options[0].label);

      handleChange({
        name: nameInput,
        value: options[0].label,
      });
    }
  }, [options, defaultValue, handleChange, nameInput]);

  const onChange = (data, { name }) => {
    setValue(data.label);

    handleChange({
      name,
      value: data.label,
    });
  };

  return (
    <Select
      name={nameInput}
      aria-label={`${nameInput} select`}
      value={{ label: value }}
      isLoading={isLoading}
      onChange={onChange}
      options={options}
      isSearchable={false}
      openMenuOnFocus
    />
  );
};

export default SelectChoose;

SelectChoose.propTypes = {
  nameInput: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
  defaultValue: PropTypes.string.isRequired,
  isLoading: PropTypes.bool,
};
