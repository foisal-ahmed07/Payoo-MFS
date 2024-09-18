// cash out btn event handler
document
  .getElementById("cash-out-btn")
  .addEventListener("click", function (event) {
    // prevent reload
    event.preventDefault();

    // get the cashOut input value
    const cashOutInput = document.getElementById("cash-out-amount").value;
    // convert to float/integer number
    const cashOutMoney = parseFloat(cashOutInput);

    // get the pin number
    const pinNumber = document.getElementById("cash-out-pin").value;

    // pinNumber verify
    if (pinNumber === "1234") {
      // get the previous amount value
      const previousAmount =
        document.getElementById("previous-amount").innerText;
      const previousMoney = parseFloat(previousAmount);

      //   reduce the balance
      const newAmount = previousMoney - cashOutMoney;

      //   update the balance
      document.getElementById("previous-amount").innerText = newAmount;
    } else {
      alert("OOPS Sorry! Please try again later");
    }
  });
