import Cookies from "js-cookie";
import ENV from 'front-end/config/environment';

export const getRequest = async (url) => {
  const response = await fetch(`${ENV.apiURL}${url}`);
  if (response.status < 400) {
    const json = await response.text();
    const data = await JSON.parse(json);
    return {status: response.status, data};
  } else {
    return response;
  }
};

export const getValues = async (url, type) => {
  const values = [];
  const response = await getRequest(url);
  const sortedData = [...response.data].sort((a, b) => b.id - a.id);
  const categories = JSON.parse(Cookies.get('categories'));
  const children = categories.find(
    (category) => category.name.toLowerCase() === type
  ).children;

  children.forEach((child) => {
    values.push({
      url: child.name.toLowerCase(),
      name: child.name,
    });
  });
  return response.status < 400 ? {values, data: sortedData} : {values};
}
