var IncludesRefresher = {
  refresh: function(eventNames){

    function check(element, eventName){
      var parent = element.parentElement;

      // TODO if (HIncludeElement.prototype.isPrototypeOf(parent)) {
      if (parent.localName === 'h-include') {

        var attribute = element.getAttribute('data-refresh-on');

        if (attribute) {
          var tokens = attribute.split(',');

          return tokens.some(function(token){
            var topic = token.trim();
            return topic === eventName;
          });
        }
      }
    }

    var subscribers = document.querySelectorAll('[data-refresh-on]');

    for(var i = 0; i < subscribers.length; ++i) {
      eventNames.forEach(function(eventName){
        if (check(subscribers[i], eventName)) {
          subscribers[i].parentElement.refresh();
        }
      });
    };
  }
}
