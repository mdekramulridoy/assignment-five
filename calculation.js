// const blogHtmlMove = document.getElementById('blogHtmlMove');
// blogHtmlMove.addEventListener('click', function () {
//     window.location.href = 'blog.html';
// });


const blogHtmlMove = document.getElementById('blogHtmlMove');
blogHtmlMove.addEventListener('click' , function(){
    if(window.location.href.includes('index.html')){
        window.location.href = 'vlog.html'
    }
    else if(window.location.href.includes('vlog.html')){
        window.location.href = 'index.html'
    }
})








