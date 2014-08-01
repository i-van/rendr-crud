
var BaseView = require('./base')
  , _ = require('underscore');

module.exports = BaseView.extend({
    className: 'pagination',
    getTemplateData: function() {
        var options     = this.options.pagination
          , url         = this.options.url || ''
          , currentPage = +options.currentPage
          , totalPages  = +options.totalPages
          , previous    = Math.max(currentPage - 1, 1)
          , next        = Math.min(currentPage + 1, totalPages)
          , from        = currentPage - 2
          , to          = currentPage + 2
          , isFirst     = currentPage <= 1
          , isLast      = currentPage >= totalPages
          , links       = [];

        function buildUrl(page) {
            return url.replace(':page', page);
        }

        if (totalPages <= 1) {
            return { links: [] };
        }

        if (from < 1) {
            from = 1;
            to = from + 4;
        } else if (to > totalPages) {
            to = totalPages;
            from = to - 4;
        }
        from = Math.max(from, 1);
        to = Math.min(to, totalPages);

        links.push({
            className: isFirst ? 'disabled': '',
            url: buildUrl(1),
            label: '&lt;&lt;'
        });

        links.push({
            className: isFirst ? 'disabled': '',
            url: buildUrl(previous),
            label: '&lt;'
        });

        for (var i = from; i <= to; i++) {
            links.push({
                className: currentPage == i ? 'active': '',
                url: buildUrl(i),
                label: i + ''
            });
        }

        links.push({
            className: isLast ? 'disabled': '',
            url: buildUrl(next),
            label: '&gt;'
        });

        links.push({
            className: isLast ? 'disabled': '',
            url: buildUrl(totalPages),
            label: '&gt;&gt;'
        });

        return { links: links };
    }
});

module.exports.id = 'pagination';
