var User = require('../models/user')
  , Base = require('./base');

module.exports = Base.extend({
  model: User,
  url: '/users',
  parse: function(res) {
    this.itemsPerPage = res.itemsPerPage;
    this.currentPage = res.currentPage;
    this.totalItems = res.totalItems;
    return res.data;
  }
});
module.exports.id = 'Users';
