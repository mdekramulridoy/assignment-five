document
  .getElementById("history-button-home")
  .addEventListener("click", function (event) {
    event.preventDefault();
  });
//

function toggleButton(buttonNumber) {
  const button1 = document.getElementById("donate-button-home");
  const button2 = document.getElementById("history-button-home");
  const section1 = document.getElementById("donation-div");
  const section2 = document.getElementById("history-div");

  if (buttonNumber === 1) {
    button1.classList.add("active");
    button2.classList.remove("active");
    section1.style.display = "block";
    section2.style.display = "none";
  } else if (buttonNumber === 2) {
    button1.classList.remove("active");
    button2.classList.add("active");
    section1.style.display = "none";
    section2.style.display = "block";
  }
}

//

document
  .getElementById("noakhali-donate")
  .addEventListener("click", function () {
    const inputNoakhali = document.getElementById("input-noakhali").value;
    const noakhaliBalance = document.getElementById(
      "card-balance-noakhali"
    ).innerText;

    const noakhaliInput = parseFloat(inputNoakhali);
    const balanceNoakhali = parseFloat(noakhaliBalance);
    const balanceTotal = document.getElementById("total-balance").innerText;
    const netBalance = parseFloat(balanceTotal);

    if (inputNoakhali === "") {
      alert("Please enter a valid amount.");
      return;
    }
    if (
      isNaN(noakhaliInput) ||
      noakhaliInput <= 0 ||
      netBalance < noakhaliInput
    ) {
      alert("Enter a valid number or Insufficient Balance.");
      return;
    }

    function add(a, b) {
      return a + b;
    }
    const newBalanceNoakhali = add(noakhaliInput, balanceNoakhali);
    document.getElementById("card-balance-noakhali").innerText =
      newBalanceNoakhali;

    const topBalance = document.getElementById("total-balance").innerText;
    const totalTopBalance = parseFloat(topBalance);
    const inputNoakhailla = document.getElementById("input-noakhali").value;
    const inputNoakhaillaNumber = parseFloat(inputNoakhailla);

    if (totalTopBalance < inputNoakhaillaNumber) {
      return;
    } else {
      function remove(a, b) {
        return a - b;
      }
    }
    const lastBalance = remove(totalTopBalance, inputNoakhaillaNumber);
    document.getElementById("total-balance").innerText = lastBalance;
    const myModal = document.getElementById("my_modal_5");
    myModal.showModal();





// 
     const now = new Date();
    const dateStr = now.toLocaleString("en-GB", {
        weekday: "short", year: "numeric", month: "short", day: "numeric",
        hour: "numeric", minute: "numeric", second: "numeric", timeZoneName: "short"
    });
    const historySection = document.getElementById("history-noakhali");
    const newCard = document.createElement("div");
    newCard.classList.add("card", "border", "border-gray-300", "shadow-md", "rounded-lg", "p-5");
    newCard.innerHTML = `
      <h3 class="text-xl font-bold mb-2">${noakhaliInput} Taka is Donated for Noakhali</h3>
      <p>Date: ${dateStr}</p>
    `;
    historySection.appendChild(newCard);
// 






  });

// Feni Balance Start

document.getElementById("feni-donate").addEventListener("click", function () {
  const inputFeni = document.getElementById("input-feni").value;
  const feniBalance = document.getElementById("card-balance-feni").innerText;
  const feniInput = parseFloat(inputFeni);
  const balanceFeni = parseFloat(feniBalance);
  const balanceTotal = document.getElementById("total-balance").innerText;
  const netBalance = parseFloat(balanceTotal);

  if (inputFeni === "") {
    alert("Please enter a valid amount.");
    return;
  }
  if (isNaN(feniInput) || feniInput <= 0 || netBalance < feniInput) {
    alert("Enter a valid number or Insufficient Balance.");
    return;
  }

  function add(a, b) {
    return a + b;
  }
  const newBalanceFeni = add(feniInput, balanceFeni);
  document.getElementById("card-balance-feni").innerText = newBalanceFeni;
  const topBalance = document.getElementById("total-balance").innerText;
  const totalTopBalance = parseFloat(topBalance);
  const inputFenni = document.getElementById("input-feni").value;
  const inputFenniNumber = parseFloat(inputFenni);

  if (totalTopBalance < inputFenniNumber) {
    return;
  } else {
    function remove(a, b) {
      return a - b;
    }
  }
  const lastBalance = remove(totalTopBalance, inputFenniNumber);
  document.getElementById("total-balance").innerText = lastBalance;

  const myModal = document.getElementById("my_modal_5");
  myModal.showModal();


// 
  // 
  const now = new Date();
  const dateStr = now.toLocaleString("en-GB", {
      weekday: "short", year: "numeric", month: "short", day: "numeric",
      hour: "numeric", minute: "numeric", second: "numeric", timeZoneName: "short"
  });
  const historySection = document.getElementById("history-feni");
  const newCard = document.createElement("div");
  newCard.classList.add("card", "border", "border-gray-300", "shadow-md", "rounded-lg", "p-5");
  newCard.innerHTML = `
    <h3 class="text-xl font-bold mb-2">${feniInput} Taka is Donated for Feni</h3>
    <p>Date: ${dateStr}</p>
  `;
  historySection.appendChild(newCard);
// 
// 



});

// Quota Start

document.getElementById("quota-donate").addEventListener("click", function () {
  const inputQuota = document.getElementById("input-quota").value;
  const quotaBalance = document.getElementById("card-balance-quota").innerText;
  const quotaInput = parseFloat(inputQuota);
  const balanceQuota = parseFloat(quotaBalance);
  const balanceTotal = document.getElementById("total-balance").innerText;
  const netBalance = parseFloat(balanceTotal);

  if (inputQuota === "") {
    alert("Please enter a valid amount.");
    return;
  }
  if (isNaN(quotaInput) || quotaInput <= 0 || netBalance < quotaInput) {
    alert("Enter a valid number or Insufficient Balance.");
    return;
  }

  function add(a, b) {
    return a + b;
  }

  const newBalanceQuota = add(quotaInput, balanceQuota);
  document.getElementById("card-balance-quota").innerText = newBalanceQuota;
  const topBalance = document.getElementById("total-balance").innerText;
  const totalTopBalance = parseFloat(topBalance);
  const inputQuotta = document.getElementById("input-quota").value;
  const inputQuottaNumber = parseFloat(inputQuotta);

  if (totalTopBalance < inputQuottaNumber) {
    return;
  } else {
    function remove(a, b) {
      return a - b;
    }
  }
  const lastBalance = remove(totalTopBalance, inputQuottaNumber);
  document.getElementById("total-balance").innerText = lastBalance;

  const myModal = document.getElementById("my_modal_5");
  myModal.showModal();


// 
const now = new Date();
  const dateStr = now.toLocaleString("en-GB", {
      weekday: "short", year: "numeric", month: "short", day: "numeric",
      hour: "numeric", minute: "numeric", second: "numeric", timeZoneName: "short"
  });
  const historySection = document.getElementById("history-quota");
  const newCard = document.createElement("div");
  newCard.classList.add("card", "border", "border-gray-300", "shadow-md", "rounded-lg", "p-5");
  newCard.innerHTML = `
    <h3 class="text-xl font-bold mb-2">${quotaInput} Taka is Donated for Quota</h3>
    <p>Date: ${dateStr}</p>
  `;
  historySection.appendChild(newCard);
// 




});
