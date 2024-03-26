document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('email');
    var password = document.getElementById('password');

    fetch('', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email, password: password })
    })
    .then(response => {
        if (response.ok) {
            alert('H');
            window.location.href = '';
        } else {
            alert('Error: Usuario o contraseña incorrectos.');
        }
    })
    .catch(error => {
        console.error('Error al iniciar sesión:', error);
        alert('Error al iniciar sesión. Por favor, inténtalo de nuevo más tarde.');
    });
});