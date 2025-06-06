function validateMobile() {
  const mobileInput = document.getElementById('mobile').value.trim();
  const result = document.getElementById('result');
  const mobileRegex = /^[6-9]\d{9}$/;

  if (mobileRegex.test(mobileInput)) {
    result.style.color = '#008000'; // green
    result.textContent = "Valid Mobile Number";
  } else {
    result.style.color = '#ff0000'; // red
    result.textContent = "Invalid Mobile Number";
  }
}
