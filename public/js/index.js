const homeEl = document.querySelector('#home');
const blogsEl = document.querySelectorAll('.blog');

blogsEl.forEach((blog) => {
    blog.addEventListener('click', (event) => {
        // console.log(event.currentTarget.nextElementSibling);
        let commentEl = event.currentTarget.nextElementSibling;
        let addCommentEl = event.currentTarget.nextElementSibling.nextElementSibling;
        // console.log(commentEl);
        // console.log(addCommentEl);
        if (commentEl.classList.contains('hidden')) {
            commentEl.classList.remove('hidden');
        } else {
            commentEl.classList.add('hidden');
        }
        if (addCommentEl.classList.contains('hidden')) {
            addCommentEl.classList.remove('hidden');
        } else {
            addCommentEl.classList.add('hidden');
        }
    })
})
