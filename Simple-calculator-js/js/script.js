// select all buttons 

const buttons = document.querySelectorAll('button')

// select the input 
const display = document.querySelector('.display')

// add an event listener to each button

buttons.forEach((button) => {
    button.addEventListener('click', calculate)
})

// calculate function 

function calculate(event) {
    //current clicked buttons value
    const clickedButtonvalue = event.target.value

    if (clickedButtonvalue === '=') {
        // check if the display is not empty then only do the calculation
        if (display.value !== '') {
            //calculate and show the answer to the display
            display.value = eval(display.value)
        }
    } else if (clickedButtonvalue === 'C') {
        //clear everything on display
        display.value = ''
    } else {
        //otherwise concatenate it to the display 
        display.value += clickedButtonvalue
    }

}