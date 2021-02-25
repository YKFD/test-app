import Route from '@ember/routing/route';
import {getValues} from '../shared';

export default class NewsRoute extends Route {
  async model() {
    return getValues('app/news', 'news')
  }
}
