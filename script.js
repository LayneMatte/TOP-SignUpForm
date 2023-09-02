const form = document.querySelector(".form-container")
const output = document.querySelector(".output")
const pass = document.querySelector("#password")
const passConfirm = document.querySelector("#confirm_password")
const invalidStyle = 'border: 2px solid red;'

function passCheck() {
    if (pass.value != passConfirm.value) {
        output.textContent = "Passwords must match"
        pass.style.cssText = invalidStyle
        passConfirm.style.cssText = invalidStyle
    }
        else {
            output.textContent = ''
            pass.textContent = ''
            passConfirm.textContent = ''
            form.submit()
            form.reset()
                }
}
form.addEventListener("submit",(event) => {event.preventDefault()
passCheck()})

 