var Base = require('./base');

module.exports = Base.extend({
  url: '/users',
  idAttribute: '_id'
});
module.exports.id = 'User';
