const dashboardArticlesEl = document.querySelectorAll('.blog-dashboard')

dashboardArticlesEl.forEach((article) => {
    article.addEventListener('click', () => {
        const articleDataId = article.getAttribute('data-blog-id');
        window.location = `/updatePost/${articleDataId}`;
    });
});