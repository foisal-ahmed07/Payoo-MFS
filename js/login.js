document
  .getElementById("login-btn")
  .addEventListener("click", function (event) {
    // step2: prevent the default behavior
    event.preventDefault();
    // step3: get the phone number and pin number
    const phoneNumber = document.getElementById("phone-number").value;
    const pinNumber = document.getElementById("number").value;
    console.log(phoneNumber, pinNumber);
    // validate phone and pin
    if (phoneNumber === "01700000017" && pinNumber === "1234") {
      console.log("Your are logged in");
      window.location.href = "../home.html";
    } else {
      alert("wrong phone number or pin number");
    }
  });
