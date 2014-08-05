
var BaseAppView = require('rendr/client/app_view');

module.exports = BaseAppView.extend({
    initialize: function() {
        // @todo: add loading indicator
//        this.app.on('change:loading', function(app, loading) {
//
//        });

        var links = this.$('.nav a');
        this.app.router.on('action:start', function() {
            var target = links.filter('[href="' + location.pathname + '"]');

            links.parent().removeClass('active');
            target.parent().addClass('active');
        });
    }
});
