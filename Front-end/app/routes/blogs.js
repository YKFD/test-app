import Route from '@ember/routing/route';
import {getValues} from '../shared'

export default class BlogsRoute extends Route {
  async model() {
    return await getValues('app/blogs', 'blogs')
  }
}
