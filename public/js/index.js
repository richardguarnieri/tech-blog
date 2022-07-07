const homeEl = document.querySelector('#home');
const homeArticlesEl = document.querySelectorAll('.blog-home');
const dashboardArticlesEl = document.querySelectorAll('.blog-dashboard')
const deleteBtnEl = document.querySelector('#delete-btn')

// console.log(dashboardArticlesEl);
// if (dashboardArticles El) {
dashboardArticlesEl.forEach((article) => {
    article.addEventListener('click', (event) => {
        const articleDataId = article.getAttribute('data-id');
        window.location = `/updatePost/${articleDataId}`;
    });
})

deleteBtnEl.addEventListener('click', () => {
    fetch('/api/blogs/delete')
})

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
