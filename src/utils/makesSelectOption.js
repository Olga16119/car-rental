const makesSelectOption = data => {
  
  const optionsArray = [...data]
    .sort((a, b) => a.localeCompare(b))
    .map(el => ({
      value: el,
      label: el,
    }));

  return [{ label: 'All makers' }, ...optionsArray];
};

export default makesSelectOption;