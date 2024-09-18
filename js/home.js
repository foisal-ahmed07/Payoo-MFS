// step1: event handler
// step2: check pin
// step3: get amount
// step4: get current balance + amount;

// add money to the account
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {

    //  reload prevent 
    event.preventDefault();

    const inputMoney = document.getElementById("input-money-amount").value;

    const pinNumber = document.getElementById("pin-number").value;

    // pin number condition
    if (pinNumber === "1234") {

        // previous amount value 
      const previousAmount =
        document.getElementById("previous-amount").innerText;

        // convert to integer/float number
      const addMoney = parseFloat(inputMoney);
      const previousMoney = parseFloat(previousAmount);

    //   sum the newAmount = inputAmount + previousAmount
      let newAmount = addMoney + previousMoney;

    //   update previous amount
      document.getElementById("previous-amount").innerText = newAmount;
    } else {
      alert("Wrong Information! Please try again");
    }
  });
