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

    // const callModal = document.querySelectorAll('modal-show');
    // const myModal = document.getElementById('my_modal_5');

    // for (const modalCall of donationModal){
    //   button.addEventListener('click', function(){
    //     myModal.showModal();
    //   });
    // }
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
});
