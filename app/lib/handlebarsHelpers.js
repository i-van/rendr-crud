/**
 * We inject the Handlebars instance, because this module doesn't know where
 * the actual Handlebars instance will come from.
 */
module.exports = function(Handlebars) {
  return {
    copyright: function(year) {
      return new Handlebars.SafeString("&copy;" + year);
    },
    dateFormat: function(date) {
        function leadingZero(number) {
            return ('0' + number).slice(-2);
        }

        date = new Date(date || Date.now());
        return date.getFullYear() + '-'
            + leadingZero(date.getMonth() + 1) + '-'
            + leadingZero(date.getDate()) + ' '
            + leadingZero(date.getHours()) + ':'
            + leadingZero(date.getMinutes()) + ':'
            + leadingZero(date.getSeconds());
    }
  };
};
