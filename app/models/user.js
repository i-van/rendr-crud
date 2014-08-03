var Base = require('./base');

module.exports = Base.extend({
  url: function() {
      // @todo: do something with it..
      if (this.get('id')) {
          return '/users/:id';
      }
      return '/users';
  },
  idAttribute: '_id'
});
module.exports.id = 'User';
