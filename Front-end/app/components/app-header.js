import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class AppHeader extends Component {
  @tracked categories;

  constructor(owner, args) {
    super(owner, args);
    this.getCategories();
  }

  async getCategories() {
    const response = await fetch('http://localhost:3000/app/categories');
    if (response.status < 400) {
      const json = await response.text();
      const categories = await JSON.parse(json);
      this.categories = categories;
    }
  }
}
