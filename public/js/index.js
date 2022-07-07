const homeEl = document.querySelector('#home');
const blogsEl = document.querySelectorAll('.blog');

blogsEl.forEach((blog) => {
    blog.addEventListener('click', (event) => {
        // console.log(event.currentTarget.nextElementSibling);
        let commentEl = event.currentTarget.nextElementSibling;
        let addCommentEl = event.currentTarget.nextElementSibling.nextElementSibling;
        // console.log(commentEl);
        // console.log(addCommentEl);
        // commentEl.children.length != 0 to avoid displaying the section with no elements in the HTML - better UX
        if (commentEl.children.length != 0) {
            commentEl.classList.toggle('active')
        }
        addCommentEl.classList.toggle('active');    
    })
})
