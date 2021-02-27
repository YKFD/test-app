import Route from '@ember/routing/route';
import {getRequest} from '../../../shared';

export default class TypeCategoryPostRoute extends Route {
  async model({type, category, post}) {
    const response = await getRequest(`app/${type}/${category}/${post}`);

    return response.status < 400 ? response.data : null
  }
}
