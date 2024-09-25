


const blogHtmlMove = document.getElementById("blogHtmlMove");
const homeHtmlMove = document.getElementById("homeHtmlMove");
if (blogHtmlMove) {
  blogHtmlMove.addEventListener("click", function () {
    window.location.href = "vlog.html";
  });
}

if (homeHtmlMove) {
  homeHtmlMove.addEventListener("click", function () {
    window.location.href = "index.html";
  });
}


// Modal showing JavaScript

// document.getElementById("").addEventListener("click", function () {
//   document.getElementById("").classList.remove("hidden");
//   document.getElementById("").classList.add("hidden");
// });
// Modal show End

// document.getElementById('noakhali-donate')
//     .addEventListener('click', function(event){
//         event.preventDefault();

//     const topBalance = document.getElementById("total-balance").innerText;
//     const totalTopBalance = parseFloat(topBalance);
//     const inputNoakhailla = document.getElementById('input-noakhali').value;
//     const inputNoakhaillaNumber = parseFloat(inputNoakhailla);

//     if (totalTopBalance < inputNoakhaillaNumber) {
//       return;
//     } else {
//       function remove(a, b) {
//         return a - b;
//       }
//     }
//     const lastBalance = remove(totalTopBalance, inputNoakhaillaNumber);
//     document.getElementById("total-balance").innerText = lastBalance;


//     });

















    // const now = new Date();
    // const dateStr = now.toLocaleString("en-GB", {
    //     weekday: "short", year: "numeric", month: "short", day: "numeric",
    //     hour: "numeric", minute: "numeric", second: "numeric", timeZoneName: "short"
    // });
    // const historySection = document.getElementById("donation-history");
    // const newCard = document.createElement("div");
    // newCard.classList.add("card", "border", "border-gray-300", "shadow-md", "rounded-lg", "p-5");
    // newCard.innerHTML = `
    //   <h3 class="text-xl font-bold mb-2">${noakhaliInput} Taka is Donated for Noakhali</h3>
    //   <p>Date: ${dateStr}</p>
    // `;
    // historySection.appendChild(newCard);




