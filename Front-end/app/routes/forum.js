import Route from '@ember/routing/route';
import {getValues} from '../shared';

export default class ForumRoute extends Route {
  async model() {
    return await getValues('app/forums', 'forum')
  }
}
