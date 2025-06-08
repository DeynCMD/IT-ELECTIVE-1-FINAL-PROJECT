document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const userType = document.getElementById('user_type').value;

  sessionStorage.setItem('user_type', userType);

  if (userType === 'admin') {
    window.location.href = 'admin-login.html';
  } else {
    if (userType === 'finance') {
      window.location.href = 'finance.html';
    } else if (userType === 'buyer') {
      window.location.href = 'buyer.html';
    } else if (userType === 'manager') {
      window.location.href = 'approver.html';
    } else if (userType === 'por') {
      window.location.href = 'requester.html';
    } else {
      alert('Unknown department selected');
    }
  }
});
