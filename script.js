const form = document.getElementById("form");
const email = document.getElementById("email");
const country = document.getElementById("country");
const zipCode = document.getElementById("zipcode");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");
const errorElement = document.getElementById("error");



form.addEventListener("submit", (e) => {
    let messages = [];
    let at = "@";


    if (email.value === "" || email.value == null ) {
        messages.push("Please enter a valid E-Mail adress.")
        email.style.border = "2px solid red";
        setTimeout(() => email.style.border = "1px solid black", 5000) 
    }


    if (country.value === "" || country.value == null) {
        messages.push("Please enter the name of the country you live in.")
        country.style.border = "2px solid red";
        setTimeout(() => country.style.border = "1px solid black", 5000) 
    }


    if(zipCode.value === "" || zipCode.value == null) {
        messages.push("Please enter your Zip Code.");
        zipCode.style.border = "2px solid red";
        setTimeout(() => zipCode.style.border = "1px solid black", 5000) 
    }


    if(password.value === "" || password.value == null || password.value.length < 6) {
        messages.push("Please enter a password with at least 6 characters.")
        password.style.border = "2px solid red";
        setTimeout(() => password.style.border = "1px solid black", 5000) 
    }


    if(passwordConfirmation.value === "" || passwordConfirmation.value == null || passwordConfirmation.value != password.value) {
        messages.push("Please confirm your password.")
        passwordConfirmation.style.border = "2px solid red";
        setTimeout(() => passwordConfirmation.style.border = "1px solid black", 5000) 
    }



    if (messages.length > 0) {
        e.preventDefault();
        messages.forEach(errorMessage => {
            const div = document.createElement("div");
            div.classList.add("error-div");
            errorElement.appendChild(div);
            div.innerText = errorMessage;

            setTimeout(() => document.querySelector(".error-div").remove(), 3000)
        });
        
    }

})