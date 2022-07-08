const deleteBtnEl = document.querySelector('#delete-btn')

deleteBtnEl.addEventListener('click', async () => {
    await fetch('/api/blogs/delete', {
        method: 'DELETE',
        body: JSON.stringify({id: document.querySelector('textarea[name=id]').innerHTML}),
        headers: {'Content-Type': 'application/json'}
    })
    window.location = '/dashboard'
});