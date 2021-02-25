import Route from '@ember/routing/route';
import {getRequest} from "../../helpers";

export default class NewsCategoryRoute extends Route {
  async model(param) {
    const response = await getRequest(`app/news/${param.id}`)
    if (response.status < 400) {
      return response.data
    } else {
      return null
    }
  }
}
