// step1: event handler
// step2: check pin
// step3: get amount
// step4: get current balance + amount;

// add money to the account
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const inputMoney = document.getElementById("input-money-amount").value;

    const pinNumber = document.getElementById("pin-number").value;

    if (pinNumber === "1234") {
      const previousAmount =
        document.getElementById("previous-amount").innerText;

      const addMoney = parseFloat(inputMoney);
      const previousMoney = parseFloat(previousAmount);

      let newAmount = addMoney + previousMoney;

      document.getElementById("previous-amount").innerText = newAmount;
    } else {
      alert("Wrong Information! Please try again");
    }
  });
