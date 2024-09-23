document
  .getElementById("history-button-home")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "history.html";
  });

document
  .getElementById("noakhali-donate")
  .addEventListener("click", function () {
    const inputNoakhali = document.getElementById("input-noakhali").value;
    const noakhaliBalance = document.getElementById(
      "card-balance-noakhali"
    ).innerText;

    const noakhaliInput = parseFloat(inputNoakhali);
    const balanceNoakhali = parseFloat(noakhaliBalance);
    if (inputNoakhali === "") {
      alert(
        "The donation amount field is empty or Invalid. Please enter a valid amount."
      );
      return;
    }
    if (isNaN(noakhaliInput) || noakhaliInput <= 0) {
      alert("Please enter a valid number for the donation amount.");
      return;
    }
    //   if (totalBalance <= 0) {
  //     alert("Insufficient Balance.");
  //     return;
  //   }

    function add(a, b) {
      return a + b;
    }

    const newBalanceNoakhali = add(noakhaliInput, balanceNoakhali);
    document.getElementById("card-balance-noakhali").innerText =
      newBalanceNoakhali;
  });

// Feni Balance Start

document.getElementById("feni-donate").addEventListener("click", function () {
  const inputFeni = document.getElementById("input-feni").value;
  const feniBalance = document.getElementById("card-balance-feni").innerText;

  const feniInput = parseFloat(inputFeni);
  const balanceFeni = parseFloat(feniBalance);
  if (inputFeni === "") {
    alert(
      "The donation amount field is empty or Invalid. Please enter a valid amount."
    );
    return;
  }
  if (isNaN(feniInput) || feniInput <= 0) {
    alert("Please enter a valid number for the donation amount.");
    return;
  }
  //   if (totalBalance <= 0) {
  //     alert("Insufficient Balance.");
  //     return;
  //   }

  function add(a, b) {
    return a + b;
  }
  const newBalanceFeni = add(feniInput, balanceFeni);
  document.getElementById("card-balance-feni").innerText = newBalanceFeni;
});



// Quota Start

document.getElementById("quota-donate").addEventListener("click", function () {
  const inputQuota = document.getElementById("input-quota").value;
  const quotaBalance = document.getElementById("card-balance-quota").innerText;

  const quotaInput = parseFloat(inputQuota);
  const balanceQuota = parseFloat(quotaBalance);

  if (inputQuota === "") {
    alert(
      "The donation amount field is empty or Invalid. Please enter a valid amount."
    );
    return;
  }
  if (isNaN(quotaInput) || quotaInput <= 0) {
    alert("Please enter a valid number for the donation amount.");
    return;
  }
  //   if (totalBalance <= 0) {
  //     alert("Insufficient Balance.");
  //     return;
  //   }

  function add(a, b) {
    return a + b;
  }

  const newBalanceQuota = add(quotaInput, balanceQuota);
  document.getElementById("card-balance-quota").innerText = newBalanceQuota;
});
