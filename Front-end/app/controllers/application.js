import Controller from '@ember/controller';
import {tracked} from '@glimmer/tracking';
import {getRequest} from '../shared';
import classic from 'ember-classic-decorator';

@classic
export default class Application extends Controller {
  @tracked posts;

  async init() {
    super.init();
    const blogResponse = await getRequest('app/blogs');
    const newsResponse = await getRequest('app/news');
    const forumResponse = await getRequest('app/forum');
    this.posts = [
      {title: 'Blogs', data: blogResponse.data},
      {title: 'News', data: newsResponse.data},
      {title: 'Forum', data: forumResponse.data},
    ];
  }
}
