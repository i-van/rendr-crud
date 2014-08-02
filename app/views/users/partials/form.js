var BaseView = require('../../base')
  , _ = require('underscore')
  , User = require('../../../models/user');

module.exports = BaseView.extend({
    className: 'users-partials-form-view',
    events: {
        'submit form': 'save'
    },
    initialize: function() {
        this.model = new User();

        // @todo: assign fetcher to model in better way
        // assign app to model
        // model cannot be saved without it
        this.model.app = this.app;
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
        // @todo: add alert
//        Alert.success('User was successfully saved');
        this.app.router.redirectTo('/users');
    }
});
module.exports.id = 'users/partials/form';
