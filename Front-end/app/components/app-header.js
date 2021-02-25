import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import Cookies from 'js-cookie';
import { getRequest } from '../helpers';

export default class AppHeader extends Component {
  @tracked categories;

  constructor(owner, args) {
    super(owner, args);
    this.getCategories();
  }

  async getCategories() {
    const response = await getRequest('app/categories');
    if (response.status < 400) {
      this.categories = response.data;
      Cookies.set('categories', JSON.stringify(response.data));
    }
  }
}
