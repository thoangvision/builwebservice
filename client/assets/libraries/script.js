/*
* @Author: th_le
* @Date:   2017-06-19 09:32:41
* @Last Modified by:   th_le
* @Last Modified time: 2017-06-19 14:23:05
*/

'use strict';

$(document).ready(function() {
  $.extend($.fn.dataTable.defaults, {
    autoWidth: true,
    dom: '<"datatable-scroll table-responsive clearfix"tr><"datatable-footer clearfix"ip>',
    language: {
      url: base_url + 'assets/plugins/datatables/js/lang/' + current_lang + ".json"
    },
  });
});