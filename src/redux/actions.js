export const addCar = (index) => {
  return {
    type: "ADD_CAR",
    value: index,
  };
};

export const removeCar = (index) => {
  return {
    type: "REMOVE_CAR",
    value: index,
  };
};
