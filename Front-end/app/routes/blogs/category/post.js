import Route from '@ember/routing/route';
import { getRequest } from '../../../shared';

export default class BlogsCategoryPostRoute extends Route {
  async model(value) {
    const response = await getRequest(
      `app/blogs/${value.category}/${value.id}`
    );
    if (response.status < 400) {
      return response.data;
    } else {
      return null;
    }
  }
}
