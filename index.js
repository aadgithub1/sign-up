let password = document.querySelector("#password")
let confirmPassword = document.querySelector("#confirm-password")
let submitBtn = document.querySelector("#submit-btn")
let email = document.querySelector("#email")

submitBtn.addEventListener("click", function(){
    if (password.value !== confirmPassword.value){
        alert("Passwords do not match")
    }
})
