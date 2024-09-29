let input =  document.getElementById('#inputBox')
let buttons = document.querySelectorAll('button')
let string ="";


Array.from(buttons).forEach((button)=> {
    button.addEventListener('click', (a)=>{
        if (a.target.innerHTML == '='){
            string = eval(string)
            document.querySelector('input').value = string;
        }
        else if (a.target.innerHTML == 'AC'){
            string = "";
            document.querySelector('input').value = string;
        }
        else if (a.target.innerHTML == 'DEL') {
            console.log(input);
            string = string.slice(0, -1);
            document.querySelector('input').value = string;
        }
        else{
        console.log(a.target)
        string = string + a.target.innerHTML;
        document.querySelector('input').value = string;
        }
    })
})