//-------------------------------------------------------------------------------
function add_csrf_to_form() {
  window.csrf_token = fuel_csrf_token();
  var csrf_input = '<input name="' + csrf_token_key + '" value="' + csrf_token + '" type="hidden" />';

  $('form').each(function () {
    var input_hidden = $(this).find('input[name=' + csrf_token_key + ']');

    if (input_hidden.length > 0) {
      input_hidden.val(csrf_token);
    } else {
      $(this).append(csrf_input);
    }
  })
}

//-------------------------------------------------------------------------------
$(document).ajaxComplete(function() {
  window.csrf_token = fuel_csrf_token();
  add_csrf_to_form();
});

//-------------------------------------------------------------------------------
$(window).on('load', function () {
  add_csrf_to_form();
});

//-------------------------------------------------------------------------------
$(document).ajaxSend(function(event, request, settings) {
  var typeSetting = Object.prototype.toString.call(settings.data);

  if (settings.type == 'POST') {
    if (settings.data) {
      if (typeSetting.indexOf('FormData') != -1) {
        settings.data.append(csrf_token_key, fuel_csrf_token());
      } else {
        if (settings.data.indexOf(csrf_token_key) === -1) {
          settings.data += '&' + csrf_token_key + '=' + fuel_csrf_token();
        } else {
          var regex = new RegExp('(' + csrf_token_key + '=[^&]+&|' + csrf_token_key + '=[^&]+?)(?=$|&)', 'i');
          settings.data = settings.data.replace(regex, csrf_token_key + '=' + fuel_csrf_token());
        }
      }
    }
  }
});