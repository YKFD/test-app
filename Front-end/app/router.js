import EmberRouter from '@ember/routing/router';
import config from 'front-end/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('news', () => {
    this.route('news/category', {path: 'news/:category'}, () => {
      this.route('news/category/post', {path: 'news/:category/:id'});
    });
  });
  this.route('forum');
  this.route('blogs');
});
