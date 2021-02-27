import Route from '@ember/routing/route';
import { getRequest } from '../../shared';

export default class TypeCategoryRoute extends Route {
  async model({type, category}) {
    const response = await getRequest(`app/${type}/${category}`);
    if (response.status < 400) {
      return {type, data: response.data };
    } else {
      return null;
    }
  }
}
