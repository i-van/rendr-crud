var BaseView = require('../base')
  , _ = require('underscore');

module.exports = BaseView.extend({
    className: 'users-index-view',
    events: {
        'click a[data-remove-id]': 'removeModel'
    },
    removeModel: function(event) {
        var _this = this
          , $el = this.$(event.currentTarget)
          , id = $el.data('remove-id')
          , model = this.collection.get(id);

        this.confirm('Do you really want to delete this user?', function(confirm) {
            if (!confirm) {
                return;
            }

            model.destroy({
                success: _.bind(_this.goToList, _this)
            });
        });

        return false;
    },
    goToList: function() {
        this.alert('User was successfully removed');
        this.app.router.redirectTo('/users');
    }
});
module.exports.id = 'users/index';
