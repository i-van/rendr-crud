var _ = require('underscore');

module.exports = {
  index: function(params, callback) {
    var spec = {
      collection: {collection: 'Users', params: params}
    };
    this.app.fetch(spec, { readFromCache: false }, function(err, result) {
      callback(err, result);
    });
  },

  create: function(params, callback) {
    callback();
  },

  edit: function(params, callback) {
    var spec = {
      model: {model: 'User', params: params}
    };
    this.app.fetch(spec, function(err, result) {
      callback(err, result);
    });
  }
};
