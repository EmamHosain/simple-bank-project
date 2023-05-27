const balance = document.getElementById("balance");

document.getElementById("deposit_btn").addEventListener("click", function () {
  const deposit_input = document.getElementById("deposit_inputField");
  //   const balance = document.getElementById('balance');
  const prev_balance = balance.innerText;

  if (deposit_input.value === "") {
    alert("Please enter an amount");
  } else {
    const deposit_new_value = deposit_input.value;
    const deposit_prev_amount = document.getElementById("deposit_taka");
    const deposit_current_taka =
      parseFloat(deposit_prev_amount.innerText) + parseFloat(deposit_new_value);
    deposit_prev_amount.innerText = deposit_current_taka;
    const new_balance =
      parseFloat(prev_balance) + parseFloat(deposit_new_value);
    balance.innerText = new_balance;
    deposit_input.value = "";
  }
});

document.getElementById("withdraw_btn").addEventListener("click", function () {
  const withdraw_input_field = document.getElementById("withdraw_inputField");

  if (
    withdraw_input_field.value === "" ||
    parseFloat(balance.innerText) < withdraw_input_field.value
  ) {
    alert("Enter Your Amount");
  } else {
    const withdraw_input_field_value = parseFloat(withdraw_input_field.value);

    const withdraw_bal = document.getElementById("withdraw_balance");
    const withdraw_prev_bal = parseFloat(withdraw_bal.innerText);

    const withdraw_current_bal = withdraw_prev_bal + withdraw_input_field_value;
    withdraw_bal.innerText = withdraw_current_bal;

    function sub(amount) {
      const total_amount = amount - withdraw_input_field_value;
      return total_amount;
    }

    const getSub = sub(parseFloat(balance.innerText));
    balance.innerText = getSub;

    withdraw_input_field.value = "";
  }
});
