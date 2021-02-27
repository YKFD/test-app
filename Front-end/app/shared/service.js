import Cookies from "js-cookie";
import ENV from 'front-end/config/environment';
import {COOKIES_CATEGORY} from "./constants";

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

const getCategoryChildren = (type) => {
  const categories = JSON.parse(Cookies.get(COOKIES_CATEGORY));

  const children = categories.find(
    (category) => category.name.toLowerCase() === type
  ).children;

  return children.map((child) => {
    return {
      url: child.name.toLowerCase(),
      name: child.name,
    };
  });
}

export const getValues = async (url, type) => {
  const {status, data} = await getRequest(url);
  const values = getCategoryChildren(type)
  if (status < 400) {
    return {values, data, type}
  } else {
    return {
      values,
      type
    }
  }
}
