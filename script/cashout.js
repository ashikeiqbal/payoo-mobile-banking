document.getElementById("cashout-btn")
    .addEventListener("click", function(){
        // 1. Get number
        const cashoutNumber = getInputValueByID("cashout-number");
        // console.log(cashoutNumber);
        if(cashoutNumber.length != 11){
            alert("Invalid Agent Number")
            return;
        }
        // 2. Get Cashout Amount
        const cashoutAmount = getInputValueByID("cashout-amount");
        // console.log(cashoutAmount);
        // 3. get balance
        const getBalance = document.getElementById("balance");
        const balance = getBalance.innerText;
        // console.log(balance);
        // calculate Balance
        const newBalance = Number(balance) - Number(cashoutAmount);
        // console.log(newBalance);
        if(newBalance < 0){
            alert("Invalid Amount")
            return;
        }
        // Get Pin
        const cashoutPin = getInputValueByID("cashout-pin")
        // console.log(cashoutPin);
        if(cashoutPin === "1234"){
            alert("Cashout Successful")
            getBalance.innerText = newBalance;
        }
        else if(cashoutPin != 4){
            alert("Invalid Pin")
            return;
        }
        else{
            alert("Invalid Pin")
            return;
        }
        
        
        
        
    })















// document.getElementById("cashout-btn")
//     .addEventListener("click", function(){
//         // 1. Get the number
//         const cashoutNumberInput = document.getElementById("cashout-number");
//         const cashoutNumber = cashoutNumberInput.value;
//         // console.log(cashoutNumber)
//         if(cashoutNumber.length != 11){
//             alert("Invalid Agent Number")
//             return;
//         }

//         // 2. get the amount
//         const cashoutAmountInput = document.getElementById("cashout-amount");
//         cashoutAmount = cashoutAmountInput.value;
//         // console.log(cashoutAmount)
//         // 3. Get the balance
//         const getBalance = document.getElementById("balance");
//         const balance = getBalance.innerText
//         // console.log(balance)
//         // 4. do the sum
//         const newBalance = Number(balance) - Number(cashoutAmount);
//         // console.log(newBalance);
//         if(newBalance < 0){
//             alert("Invalid Amount")
//             return;
//         }
        
//         // 5. get the pin
//         const pinInput = document.getElementById("cashout-pin");
//         const pin = pinInput.value;
//         if(pin.length != 4){
//             alert("Invalid Pin")
//             return;
//         }
//         // console.log(pin)
        
//         if(pin === "1234"){
//             alert("Cashout Successful")
//             getBalance.innerText = newBalance;
//         }
//         else{
//             alert("Invalid Pin")
//             return;
//         }
// })
















// document.getElementById("cashout-btn")
//     .addEventListener("click", function () {
//         // Get the agent number valid
//         const cashoutNumberInput = document.getElementById("cashout-number");
//         const cashoutNumber = cashoutNumberInput.value;
//         if(cashoutNumber.length != 11){
//             alert("Invalid Agent Number");
//             return;
//         }
//         console.log(cashoutNumber);
        

//         // Get the amount, validate, convert to number
//         const cashoutAmountInput = document.getElementById("cashout-amount");
//         const cashoutAmount = cashoutAmountInput.value;
//         console.log(cashoutAmount);
        
//         // Get the current Balance, validate, convert to number
//         const balanceElement = document.getElementById("balance");
//         const balance = balanceElement.innerText;
//         console.log(balance);

//         // calculate new balance
//         const newBalance = Number(balance) - Number(cashoutAmount);
//         if(newBalance < 0){
//             alert("Invalid Amount")
//             return;
            
//         }

//         // get the pin and verify
//         const cashoutPinInput = document.getElementById("cashout-pin");
//         const pin = cashoutPinInput.value;
//         if(pin === "1234"){
//             // true:: show an alart > set Balance
//             alert("Cashout Successful")
//             console.log("new Balance is", newBalance)
//             balanceElement.innerText = newBalance

//         }
//         else{
//             // true:: show an error > return
//             alert("Invalid Pin");
//             return;

//         }

//     })