const otpFields = document.querySelectorAll('.otp-field input[type="text"]');

otpFields.forEach((field, index) => {
  field.addEventListener('keyup', (event) => {
    if (event.keyCode === 8 && index !== 0) {
      otpFields[index - 1].focus();
    } else if (event.keyCode >= 48 && event.keyCode <= 57 && index !== otpFields.length - 1) {
      otpFields[index + 1].focus();
    }
  });
});

