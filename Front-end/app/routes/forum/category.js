import Route from '@ember/routing/route';
import { getRequest } from '../../helpers';

export default class ForumCategoryRoute extends Route {
  async model(param) {
    const response = await getRequest(`app/forums/${param.category}`);
    if (response.status < 400) {
      const sortedData = [...response.data].sort((a, b) => b.id - a.id);
      return sortedData;
    } else {
      return null;
    }
  }
}