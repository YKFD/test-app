import Route from '@ember/routing/route';
import { getRequest } from '../helpers';
import Cookies from 'js-cookie';

export default class BlogsRoute extends Route {
  async model() {
    const values = [];
    const response = await getRequest('app/blogs');
    const sortedData = [...response.data].sort((a, b) => b.id - a.id);
    const categories = JSON.parse(Cookies.get('categories'));
    const children = categories.find(
      (category) => category.name.toLowerCase() === 'blogs'
    ).children;

    children.forEach((child) => {
      values.push({
        url: child.name.toLowerCase(),
        name: child.name,
      });
    });
    return response.status < 400 ? { values, data: sortedData } : { values };
  }
}
