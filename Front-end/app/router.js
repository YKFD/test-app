import EmberRouter from '@ember/routing/router';
import config from 'front-end/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('News');
  this.route('news');
  this.route('forum');
  this.route('blogs');
});
