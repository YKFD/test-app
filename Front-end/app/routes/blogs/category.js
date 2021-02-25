import Route from '@ember/routing/route';
import {getRequest} from "../../helpers";

export default class BlogsCategoryRoute extends Route {
  async model(param) {
    const response = await getRequest(`app/blogs/${param.category}`)
    if (response.status < 400) {
      return response.data
    } else {
      return null
    }
  }
}
