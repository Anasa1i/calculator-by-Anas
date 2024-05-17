let display = document.getElementById("inputBox");
let buttons = document.querySelectorAll('button');  // nodelist bnadi

//  console.log(display) // ok
//  console.log(buttons) // ok

let buttonsArray = Array.from(buttons)
// console.log(buttonsArray) // ok - prototype arrays

let string = '';     

buttonsArray.forEach(function (btn) {
    // console.log(btn) // separate arrays

    btn.addEventListener("click", function (event) {
        if(event.target.innerHTML == 'DEL'){
            string = string.slice(0, string.length-1);
            display.value = string
        }
        else if(event.target.innerHTML == 'AC'){
            string = '';
            display.value = string
        }
        else if(event.target.innerHTML == '='){
            string = eval(string)
            display.value = string
        }
        else{
            string += event.target.innerHTML; //for input
            display.value = string
        }

        // console.log(event.target.innerHTML)// click se target hoga html ka andr code
    })

})