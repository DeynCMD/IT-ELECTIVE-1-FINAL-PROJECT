document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const userType = document.getElementById('user_type').value;

    sessionStorage.setItem('user_type', userType);

    if (userType === 'admin') {
        window.location.href = 'Admin-login.html';
    } else if (userType === 'finance') {
        window.location.href = 'Finance-login.html';
    } else if (userType === 'buyer') {
        window.location.href = 'Buyer-login.html';
    } else if (userType === 'manager') {
        window.location.href = 'Manager-login.html';
    } else if (userType === 'por') {
        window.location.href = 'PO-PR-login.html';
    }
});
