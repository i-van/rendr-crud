var RendrView = require('rendr/shared/base/view')
  , rendrHandlebars = require('rendr-handlebars');

// Create a base view, for adding common extensions to our
// application's views.
module.exports = RendrView.extend({
    alert: function(message, type) {
        type || (type = 'success');
        if (type === 'error') {
            type = 'danger';
        }

        var html = this._renderTemplate('alert', { message: message, type: type });
        return $(html).alert().appendTo('#alerts');
    },
    _renderTemplate: function(template, data) {
        return rendrHandlebars({ entryPath: '' }).getTemplate(template)(data || {});
    }
});
