var Base = require('./base');

module.exports = Base.extend({
  url: function() {
      if (this.get('id')) {
          return '/users/:id';
      }
      return '/users';
  },
  idAttribute: 'id'
});
module.exports.id = 'User';
