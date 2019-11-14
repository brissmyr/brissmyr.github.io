$(function () {
  routes.call('send_code', {}, function (data) {
    // alert(data)
  });

  var form = document.getElementById('code-form');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    var code = document.getElementById('code-field').value

    routes.call('verify_code', { code: code }, function (data) {
      console.log(data)
    });
  });
})
