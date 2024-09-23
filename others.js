const blogHtmlMove = document.getElementById("blogHtmlMove");
blogHtmlMove.addEventListener("click", function () {
  if (window.location.href.includes("index.html")) {
    window.location.href = "vlog.html";
  } else if (window.location.href.includes("vlog.html")) {
    window.location.href = "index.html";
  } else if (window.location.href.includes("history.html")) {
    window.location.href = "index.html";
  }
});


// Modal showing JavaScript


document.getElementById('').addEventListener('click', function(){
  document.getElementById('').classList.remove('hidden');
  document.getElementById('').classList.add('hidden')
})
// Modal show End























