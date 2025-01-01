export const getHomeBanners = async () => {
  try {
    const url = `/mock/banner_home.json`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
  }
};
