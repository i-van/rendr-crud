var Base = require('./base');

module.exports = Base.extend({
  url: '/users/:id',
  idAttribute: '_id'
});
module.exports.id = 'User';
