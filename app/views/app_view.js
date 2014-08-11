
var BaseAppView = require('rendr/client/app_view');

module.exports = BaseAppView.extend({
    initialize: function() {
        var links = this.$('.nav a')
          , loader = this.$('#loader');

        this.app.on('change:loading', function(app, loading) {
            loading ? loader.removeClass('hide')
                    : loader.addClass('hide');
        });

        this.app.router.on('action:start', function(route) {
            links.parent().removeClass('active');
            links.each(function() {
                var $el = $(this)
                  , action = $el.data('action')
                  , controller = $el.data('controller');

                if (route.controller === controller && route.action === action) {
                    $el.parent().addClass('active');
                }
            });
        });
    }
});
