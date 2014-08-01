var User = require('../models/user')
  , Base = require('./base')
  , Url = require('url');

module.exports = Base.extend({
  model: User,
  url: function() {
    // @todo: do it in better way
    // server fetcher does not apply params
    return Url.format({ pathname: '/users', query: this.params });
  },
  jsonKey: 'data'
});
module.exports.id = 'Users';
