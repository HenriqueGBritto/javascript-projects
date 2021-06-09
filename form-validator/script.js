const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

//functions

//show input error message

function showError(input, message){
    const formControl = input.parentElement
    formControl.classList.add('error')

    const small = formControl.querySelector('small')
    small.innerText = message
}

//Show success

function showSuccess(input){
    const formControl = input.parentElement
    formControl.classList.add('success')
}

//check email is valid
function isValidEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase())
}

//check required fields

function checkRequired(inputArr){
    inputArr.forEach((input)=>{
        console.log(input)
    })
}

// event listeners
form.addEventListener('submit', (event) => {
    event.preventDefault()

    checkRequired(username)
})


