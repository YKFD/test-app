import Route from '@ember/routing/route';
import {tracked} from "@glimmer/tracking";

export default class NewsRoute extends Route {
  @tracked

  async init(){
    const response = await fetch('')
  }
}
