const homeEl = document.querySelector('#home');
const homeArticlesEl = document.querySelectorAll('.blog-home');
const dashboardArticlesEl = document.querySelectorAll('.blog-dashboard')

console.log(dashboardArticlesEl);
// if (dashboardArticles El) {
dashboardArticlesEl.forEach((article) => {
    article.addEventListener('click', async (event) => {
        const articleDataId = article.getAttribute('data-id');
        window.location = '/updatePost';
        fetch('/api/blogs');
        
    })

})
// }

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
