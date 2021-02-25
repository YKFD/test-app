import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { getRequest } from '../helpers';
import classic from 'ember-classic-decorator';

@classic
export default class Application extends Controller {
  @tracked posts;

  async init() {
    super.init();
    const blogResponse = await getRequest('app/blogs');
    const newsResponse = await getRequest('app/news');
    const forumResponse = await getRequest('app/forums');
    this.posts = [
      { title: 'Blogs',url: 'blogs/category/post', data: blogResponse.data },
      { title: 'News', url: 'news/category/post', data: newsResponse.data },
      { title: 'Forum', url: 'forum/category/post', data: forumResponse.data },
    ];
    console.log(this.posts);
  }
}
