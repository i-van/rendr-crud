
var BaseAppView = require('rendr/client/app_view');

module.exports = BaseAppView.extend({
    initialize: function() {
        // @todo: add loading indicator
//        this.app.on('change:loading', function(app, loading) {
//
//        });

        var links = this.$('.nav a');
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
