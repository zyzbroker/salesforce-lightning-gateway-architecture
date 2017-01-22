({

  init: function(cmp, evt) {},

  onSuccess: function(cmp, evt) {
    var id = evt.getParam('id'),
      value = evt.getParam('value');
  },

  onError: function(cmp, evt) {
    var id = evt.getParam('id'),
      msg = evt.getParam('error');
  }
})