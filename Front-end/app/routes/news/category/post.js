import Route from '@ember/routing/route';
import {getRequest} from "../../../helpers";

export default class NewsCategoryPostRoute extends Route {
  async model(value) {
    const response = await getRequest(`app/news/${value.category}/${value.id}`)
    if (response.status < 400) {
      return response.data
    } else {
      return null
    }
  }
}
