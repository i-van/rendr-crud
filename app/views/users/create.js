var BaseView = require('../base')
  , _ = require('underscore')
  , User = require('../../models/user');

module.exports = BaseView.extend({
    className: 'users-create-view',
    events: {
        'submit form': 'save'
    },
    initialize: function() {
        if (!this.model) {
            this.model = new User({}, { app: this.app });
        }
    },
    renderErrors: function(model, xhr) {
        // render errors only when they are sent
        if (xhr.status !== 400) { return; }
        var errors = xhr.body;

        this.$('.help-block').remove();
        this.$('.has-error').removeClass('has-error');
        _.each(errors, function(error) {
            var input = $('[name="' + error.field + '"]');
            input.parents('.form-group').addClass('has-error');
            $('<span>', { "class": "help-block", text: error.message })
                .appendTo(input.parent());
        });
    },
    save: function(event) {
        var form = this.$(event.target)
          , values = {};

        event.preventDefault();
        _.each(form.serializeArray(), function(item) {
            values[item.name] = item.value
        });

        this.model.save(values, {
            success: _.bind(this.goToList, this),
            error:   _.bind(this.renderErrors, this)
        });
    },
    goToList: function() {
        this.alert('User was successfully saved');
        this.app.router.redirectTo('/users');
    }
});
module.exports.id = 'users/create';
