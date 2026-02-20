// console.log('login Clicked')

document.getElementById("login-btn")
    .addEventListener("click", function () {
        // get the mobile number input
        const numberInput = document.getElementById("input-number");
        const contactNumber = numberInput.value;
    
        
        
        // console.log(contactNumber)

        // get the pin
        const pinInput = document.getElementById("input-pin");
        const pin = pinInput.value;
        // console.log(pin)
        // match mobile number and pin
        if(contactNumber == "01776961228" && pin == "1234"){
            alert("Login Successful");
            window.location.assign("/home.html")
        }
        else{
            alert("Login Failed");
            return;
            
        }
    })

    