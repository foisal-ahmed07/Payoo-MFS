// show cash out form and hide add money form

document.getElementById("show-cash-out").addEventListener("click", function () {
  document.getElementById("cash-out").classList.remove("hidden");

  // hide add money form
  document.getElementById("add-money").classList.add("hidden");
});

// show add money and hide cash out form

document
  .getElementById("show-add-money")
  .addEventListener("click", function () {
    document.getElementById("add-money").classList.remove("hidden");

    // hide cash out form
    document.getElementById("cash-out").classList.add("hidden");
  });
