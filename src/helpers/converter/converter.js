export const converter = (item) => {
  let i;
  let newKey;
  let value;
  const newItem = {};

  for (i in item) {
    if (item.hasOwnProperty(i)) {
      newKey = (i.replace(/(\_\w)/g, (k) => k[1].toUpperCase())).toString();
      value = item[i];
      newItem[newKey] = value;
    }
  }

  return newItem;
};
