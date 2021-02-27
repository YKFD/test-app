import Route from '@ember/routing/route';
import {getValues} from "../shared";

export default class TypeRoute extends Route {
  async model({type}) {
    return getValues(`app/${type}`, type)
  }
}
