//-------------------------------------------------------------------------------------
toastr.options = {
  "closeButton": true,
  "debug": false,
  "progressBar": true,
  "preventDuplicates": false,
  "positionClass": "toast-top-center",
  "onclick": null,
  "showDuration": "400",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}

//-------------------------------------------------------------------------------------
function isImage(e) {
  var pattern = /^.*\.{1}(jpg|jpeg|png|gif)$/i;
  return e.length > 0 && pattern.test(e);
}

//-------------------------------------------------------------------------------------
function isEmail(e) {
  e = e || '';
  var pattern = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
  return e.length > 0 && pattern.test(e);
}

//-------------------------------------------------------------------------------------
function objectToArray(object) {
  return Object.keys(object).map(function (key) { return object[key]; });
}

//-------------------------------------------------------------------------------------
function popupText(data) {
  try {
    data = JSON.parse(data);
  } catch(e) { }

  switch(jQuery.type(data)) {
    case 'object':
      var t = [];

      $.each(data, function(key,val) {
        t = t.concat(val);
      });

      data = t;
      break;
    case 'array':
      break;
    default:
      data = [data];
      break;
  }

  var result = '<ul class="error-popup">';

  for (var i = 0; i < data.length; i++) {
    result += '<li>' + data[i] + '</li>';
  }

  result += '</ul>';

  return result
}

//-------------------------------------------------------------------------------------
function showErrors(errors) {
  $text = popupText(errors);
  if ($text != '') toastr.error($text);
}

//-------------------------------------------------------------------------------------
function showSuccesses(successes) {
  $text = popupText(successes);
  if ($text != '') toastr.success($text);
}

//-------------------------------------------------------------------------------------
window.countBlockUI = 0;

function showPageLoading(options) {
  options = options || {};

  if (!options.message)
    options.message = '<div class="box-loading"><div class="cssload"><span></span></div></div>';

  if (countBlockUI == 0)
    $.blockUI({
      message: options.message,
      overlayCSS: {
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        opacity: 0.8,
        zIndex: 1200,
        cursor: null
      },
      css: {
        border: 0,
        color: '#fff',
        padding: 0,
        zIndex: 1201,
        width: 46,
        height: 46,
        top: '50%',
        left: '50%',
        marginTop: '-23px',
        marginLeft: '-23px',
        backgroundColor: 'transparent'
      }
    });

  countBlockUI++;
}

//-------------------------------------------------------------------------------------
function hidePageLoading() {
  if (countBlockUI > 0) {
    countBlockUI--;

    if (countBlockUI == 0)
      $.unblockUI();
  }
}

//-------------------------------------------------------------------------------------
function confirmPopup(title, message, success_callback) {
  bootbox.dialog({
    title: title || null,
    message: message,
    onEscape: function() {},
    show: true,
    backdrop: true,
    closeButton: true,
    animate: true,
    buttons: {
      cancel: {
        label: api_lang.cancel,
        className: 'btn-close width120',
        icon: '<i class="fa fa-close"></i>',
        callback: function() {}
      },
      success: {
        label: api_lang.apply,
        className: 'btn-style width120',
        icon: '<i class="fa fa-check"></i>',
        callback: success_callback
      }
    }
  });
}

//-------------------------------------------------------------------------------------
function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}

//-------------------------------------------------------------------------------------
function html_entity_decode(str) {
  return $("<textarea/>").html(str).text();
}

//-------------------------------------------------------------------------------------
function timeFormat(time, lang) {
  if (!lang) lang = 'ja';
  return moment(time, ['HH:mm:ss']).locale(lang).format('HH:mm');
}

//-------------------------------------------------------------------------------------
function dateString(date, lang) {
  if (!lang) lang = 'ja';
  return moment(date).locale(lang).format('LL');
}

//-------------------------------------------------------------------------------------
function datetimeString(datetime, lang) {
  if (!lang) lang = 'ja';
  return moment(datetime).locale(lang).format('LL, LT');
  // return moment(datetime).locale(lang).format('D MMMM YYYY LTS'); // have second
}

//-------------------------------------------------------------------------------------
function toTitleCase(str) {
  return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

//-------------------------------------------------------------------------------------
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

//-------------------------------------------------------------------------------------
function updateQueryStringParameter(uri, key, value) {
  var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
  var separator = uri.indexOf('?') !== -1 ? "&" : "?";
  if (uri.match(re)) {
    return uri.replace(re, '$1' + key + "=" + value + '$2');
  }
  else {
    return uri + separator + key + "=" + value;
  }
}

//-------------------------------------------------------------------------------------
function getUrlParameter(sParam) {
  var sPageURL = decodeURIComponent(window.location.search.substring(1)),
      sURLVariables = sPageURL.split('&'),
      sParameterName,
      i;

  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=');

    if (sParameterName[0] === sParam) {
      return sParameterName[1] === undefined ? true : sParameterName[1];
    }
  }
};

//-------------------------------------------------------------------------------------
function execFunc(execFunction, delay) {
  var temp = setInterval(function() {
    try {
      execFunction();
      clearInterval(temp);
    } catch(e) { }
  }, delay);
}