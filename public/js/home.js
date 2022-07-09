const homeArticlesEl = document.querySelectorAll('.blog-home');

homeArticlesEl.forEach((article) => {
    article.addEventListener('click', (event) => {
        const commentEl = event.currentTarget.nextElementSibling;
        const addCommentEl = event.currentTarget.nextElementSibling.nextElementSibling;
        console.log(addCommentEl);
        // commentEl.children.length != 0 to avoid displaying the section with no elements in the HTML - better UX
        if (commentEl.children.length != 0) {
            commentEl.classList.toggle('active')
        }
        if (addCommentEl.localName === 'section') {
            addCommentEl.classList.toggle('active');    
        }
    })
});