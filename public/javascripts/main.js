
$(function(){

  $.pjax.defaults.scrollTo = false;

  // Application specific
  $(document).pjax('.product-variations-links a', '#product-variations-container', {
    fragment: '#product-variations-container'
  }).pjax('.tab-links a', '#product-info-tabs-container', {
    fragment: '#product-info-tabs-container'
  });

  // Infrastructure
  $(document).on('submit', 'form[data-pjax]', function(event) {
    event.preventDefault();

    var $form = $(event.target);

    $.ajax({
      url: $form.attr('action'),
      type: 'POST',
      data: $form.serialize(),
      headers: {'X-Requested-With': 'XMLHttpRequest'},
      success: function(response) {
        IncludesRefresher.refresh(response.events);
      }
    });
  });
});