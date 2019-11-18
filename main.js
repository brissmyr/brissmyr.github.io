$(function () {
  Verify.ready(function() { 
    Verify.on('captcha', function() {
      $('.factor-captcha').show()

      window.reCaptchaCallback = function(key) {
        Verify.call('verify_recaptcha', {key: key}, function (data) {
          // TBD: can we omit callback here?
        });
      }
    });
    
    Verify.on('sms', function() {
      $('.factor-sms').show()
      
      Verify.call('send_sms', {}, function (data) {
        // TBD: can we omit callback here?
      });
    
      var form = document.getElementById('code-form');
    
      form.addEventListener('submit', function (event) {
        event.preventDefault();
    
        var code = document.getElementById('code-field').value
    
        Verify.call('verify_sms', { code: code }, function (data) {
          if (data.success) {
            console.log('Correct code. Redirecting...');
          } else {
            console.log('Wrong code. Please try again.');
          }
        });
      });
    });
    
  });
});
