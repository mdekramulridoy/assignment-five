// const blogHtmlMove = document.getElementById('blogHtmlMove');
// blogHtmlMove.addEventListener('click', function () {
//     window.location.href = 'blog.html';
// });

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

// const homeClick = document.getElementById("donate-button-history");
// homeClick.addEventListener("click", function () {
//   window.location.href = "index.html";
// });
// const historyClick = document.getElementById("history-button-home");
// historyClick.addEventListener("click", function () {
//   window.location.href = "history.html";
// });

// let condition = true;
//  if(condition){
//     document.getElementById('history-button-home').onclick = function(){
//         window.location.href = 'history.html';
//     }
//  }
//  else{
//     document.getElementById('donate-button-history').onclick = function(){
//         window.location.href = 'index.html';
//  }
//  }

// const historyHomeButton = document.getElementById("history-button-home");
// historyHomeButton.addEventListener("click", function () {
//     window.location.href = "history.html";
// });

// const donationHistoryButton = document.getElementById("donate-button-history");
// donationHistoryButton.addEventListener("click", function () {
//     window.location.href = "index.html";
//     console.log('clicked');
// });














