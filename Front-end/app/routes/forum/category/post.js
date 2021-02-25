import Route from '@ember/routing/route';
import { getRequest } from '../../../shared';

export default class ForumCategoryPostRoute extends Route {
  async model(value) {
    const response = await getRequest(
      `app/forums/${value.category}/${value.id}`
    );
    if (response.status < 400) {
      return response.data;
    } else {
      return null;
    }
  }
}
