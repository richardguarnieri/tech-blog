const signupFormHandler = document.querySelector('form')

signupFormHandler.addEventListener('submit', async (event) => {
    event.preventDefault();
    const errorMsg = document.querySelector('#signup-error-msg');
    const email = document.querySelector('#signup-email');
    const username = document.querySelector('#signup-username');
    const password = document.querySelector('#signup-password');
    const response = await fetch('/api/users/signup', {
        method: 'POST',
        body: JSON.stringify({
            email: email.value.trim(),
            username: username.value.trim(),
            password: password.value.trim(),
        }),
        headers: {'Content-Type': 'application/json'}
    })
    if (response.ok) {
        window.location = '/'
    } else {
        email.value = '';
        username.value = '';
        password.value = '';
        errorMsg.innerHTML = 'Credentials do not follow guidelines, please try again!';
    }
});