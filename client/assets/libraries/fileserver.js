function FileServer (allocate_token_url, file_server_url) {
  this.allocate_token_url = allocate_token_url || base_url + 'api/fileserver/allocate_token';
  this.file_server_url = file_server_url || window.file_server_url + 'api/files/update';

  // options: {
  //   data: FormData(),
  //   quantity: number of file upload,
  //   callback: function(),
  // }
  this.upload = function(options, callback) {
    var quantity = options.quantity;

    var file_server_url = this.file_server_url;

    // request allocate token upload
    $.ajax({
      url: this.allocate_token_url,
      type: 'POST',
      data: { quantity: quantity },
      dataType: 'json',
      beforeSend: function() {
        showPageLoading();
      },
      success: function(e) {
        switch(e.code) {
          case '500':
            showErrors(e.msg);
            break;
          case '200':
            for (var i = 0; i < e.data.length; i++)
              options.data.append('upload_tokens[]', e.data[i]);

            // upload file to file server
            $.ajax({
              url: file_server_url,
              type: 'POST',
              data: options.data,
              dataType: 'json',
              processData: false,
              contentType: false,
              beforeSend: function() {
                showPageLoading();
              },
              success: callback,
              complete: function() {
                hidePageLoading();
              }
            });
            break;
        }
      },
      complete: function() {
        hidePageLoading();
      }
    });
  }
}