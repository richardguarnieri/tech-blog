const signinFormHandler = document.querySelector('form')

signinFormHandler.addEventListener('submit', async (event) => {
    event.preventDefault();
    const errorMsg = document.querySelector('#signin-error-msg');
    const username = document.querySelector('#signin-username');
    const password = document.querySelector('#signin-password');
    const response = await fetch('/api/users/signin', {
        method: 'POST',
        body: JSON.stringify({
            username: username.value.trim(),
            password: password.value.trim(),
        }),
        headers: {'Content-Type': 'application/json'}
    })
    if (response.ok) {
        window.location = '/dashboard'
    } else {
        username.value = '';
        password.value = '';
        errorMsg.innerHTML = 'Incorrect username or password, please try again!';
    }
});