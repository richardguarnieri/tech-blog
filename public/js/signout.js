const signoutBtn = document.querySelector('.signout-btn')

signoutBtn.addEventListener('click', async (event) => {
    const response = await fetch('/api/users/signout', {
        method: 'POST',
    })
    if (response.ok) {
        window.location = '/'
    } else {
        alert('Failed to log out.');
    }
});