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

        var html = this._renderTemplate('alert', { message: message, type: type })
          , $el = $(html).alert().appendTo('#alerts');
        $('body').scrollTop(0);

        return $el;
    },
    confirm: function(message, done) {
        var html = this._renderTemplate('confirm', { message: message })
          , $el = $(html).modal('show')
                .on('hidden.bs.modal', function() {
                    var plugin = $(this).data('bs.modal');
                    plugin.removeBackdrop();
                    plugin.$element.remove();
                    plugin.$element = null;
                });

        $el.on('click', 'button', function() {
            var value = !!$(this).data('value');
            $el.data('bs.modal').hide();
            done(value);
        });
    },
    _renderTemplate: function(template, data) {
        return rendrHandlebars({ entryPath: '' }).getTemplate(template)(data || {});
    }
});
