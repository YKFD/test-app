import Component from '@glimmer/component';
import {tracked} from '@glimmer/tracking';

export default class AppHeader extends Component {
  @tracked categoryUrl;
  @tracked name;

  constructor(owner, args) {
    super(owner, args);
    if (typeof args.category === "string") {
      this.categoryUrl = 'application'
      this.name = args.category
    } else {
      this.categoryUrl = args.category.name.toLowerCase();
      this.name = args.category.name
    }
  }
}
