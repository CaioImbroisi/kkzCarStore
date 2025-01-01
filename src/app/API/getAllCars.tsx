export const getCars = async () => {
  try {
    const url = `/mock/electric_cars.json`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
  }
};
