var UsersCreateView = require('./create');

module.exports = UsersCreateView.extend({
    className: 'users-edit-view',
    getTemplateData: function() {
        var data = UsersCreateView.prototype.getTemplateData.call(this);
        data.user = this.model;

        return data;
    }
});
module.exports.id = 'users/edit';
