let form = document.querySelector("form")
let password = document.querySelector("#password")
let passwordConfirm = document.querySelector("#confirm-password")
let submitBtn = document.querySelector("#submit-btn")
let hint = document.querySelector("#hint")

passwordConfirm.addEventListener("input", function(){
    if (password.value !== passwordConfirm.value){
        password.style.border = "2px solid red"
        passwordConfirm.style.border = "2px solid red"
    } else {
        password.style.border = "2px solid green"
        passwordConfirm.style.border = "2px solid green"
    }
})

password.addEventListener("input", function(){
    if (password.value !== passwordConfirm.value){
        password.style.border = "2px solid red"
        passwordConfirm.style.border = "2px solid red"
    } else {
        password.style.border = "2px solid green"
        passwordConfirm.style.border = "2px solid green"
    }
})

form.addEventListener("submit", (e) => {
    if (password.value !== passwordConfirm.value){
        e.preventDefault()
        hint.textContent = "*Passwords do not match"
        hint.style.color = "red"
        password.style.border = "2px solid red"
        passwordConfirm.style.border = "2px solid red"
    }
})
