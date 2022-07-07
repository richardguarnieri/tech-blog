const signinBtnEl = document.querySelector('#signin-btn')
const signupBtnEl = document.querySelector('#signup-btn')
const homeArticlesEl = document.querySelectorAll('.blog-home');
const dashboardArticlesEl = document.querySelectorAll('.blog-dashboard')
const deleteBtnEl = document.querySelector('#delete-btn')


if (signinBtnEl) {
    signinBtnEl.addEventListener('click', async () => {
        const errorMsg = document.querySelector('#signin-error-msg');
        const username = document.querySelector('#signin-username');
        const password = document.querySelector('#signin-password');
        const response = await fetch('/api/users/signin', {
            method: 'POST',
            body: JSON.stringify({
                username: username.value,
                password: password.value,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        if (data.success) {
            window.location = '/dashboard'
        } else {
            username.value = '';
            password.value = '';
            errorMsg.innerHTML = data.message
        }
    })
}

if (signupBtnEl) {
    signupBtnEl.addEventListener('click', async () => {
        const errorMsg = document.querySelector('#signup-error-msg');
        const email = document.querySelector('#signup-email');
        const username = document.querySelector('#signup-username');
        const password = document.querySelector('#signup-password');
        const response = await fetch('/api/users/signup', {
            method: 'POST',
            body: JSON.stringify({
                email: email.value,
                username: username.value,
                password: password.value,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        console.log(response);
        if (data.success) {
            window.location = '/'
        } else {
            email.value = '';
            username.value = '';
            password.value = '';
            errorMsg.innerHTML = data.message
        }
    })
}

if (homeArticlesEl) {
    homeArticlesEl.forEach((article) => {
        article.addEventListener('click', (event) => {
            const commentEl = event.currentTarget.nextElementSibling;
            const addCommentEl = event.currentTarget.nextElementSibling.nextElementSibling;
            // commentEl.children.length != 0 to avoid displaying the section with no elements in the HTML - better UX
            if (commentEl.children.length != 0) {
                commentEl.classList.toggle('active')
            }
            addCommentEl.classList.toggle('active');    
        })
    })
}

if (dashboardArticlesEl) {
    dashboardArticlesEl.forEach((article) => {
        article.addEventListener('click', (event) => {
            const articleDataId = article.getAttribute('data-id');
            window.location = `/updatePost/${articleDataId}`;
        });
    })
}
;
if (deleteBtnEl) {
    deleteBtnEl.addEventListener('click', async () => {
        await fetch('/api/blogs/delete', {
            method: 'DELETE',
            body: JSON.stringify({
                id: document.querySelector('textarea[name=blogId]').innerHTML
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        window.location = '/dashboard'
    })
}
