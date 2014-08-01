var User = require('../models/user')
  , Base = require('./base')
  , Url = require('url')
  , isServer = (typeof window === 'undefined');

module.exports = Base.extend({
  model: User,
  url: function() {
    // @todo: do it in better way
    // server fetcher does not apply params
    if (isServer) {
      return Url.format({ pathname: '/users', query: this.params });
    }
    return '/users';
  },
  jsonKey: 'data'
});
module.exports.id = 'Users';
