var Base = require('./base');

module.exports = Base.extend({
  url: function() {
      // @todo: do something with it..
      if (this.get('id')) {
          return '/users/:id';
      } else if (this.get('_id')) {
          return '/users/:_id';
      }
      return '/users';
  },
  idAttribute: '_id'
});
module.exports.id = 'User';
