import Component from '@glimmer/component';
import {tracked} from '@glimmer/tracking';

export default class AppHeader extends Component {
  @tracked categoryUrl;

  constructor(owner, args) {
    super(owner, args);
    this.categoryUrl = args.category.name.toLowerCase();
  }
}
