import Controller from '@ember/controller';
import {tracked} from "@glimmer/tracking";
import {getRequest} from "../helpers";

export default class Application extends Controller {
  @tracked posts
  @tracked url = 'index'

  async init() {
    super.init()
    const blogResponse = await getRequest('app/blogs')
    const newsResponse = await getRequest('app/news')
    const forumResponse = await getRequest('app/forums')
    this.posts = [...blogResponse.data, ...newsResponse.data, ...forumResponse.data]
  }
}
