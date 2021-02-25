import Route from '@ember/routing/route';
import Cookies from 'js-cookie'

export default class NewsRoute extends Route {

  model() {
    const values = [];
    const categories = JSON.parse(Cookies.get('categories'))
    const children = categories.find(category => category.name.toLowerCase() === 'news').children

    children.forEach((child) => {
        values.push(
          {
            url: child.name.toLowerCase(),
            name: child.name
          }
        )
      }
    );
    return values
  };

}
