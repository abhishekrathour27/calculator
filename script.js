let String = ''
let button = document.querySelectorAll('.button')
Array.from(button).forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            String = eval(String)
            document.querySelector('.input').value = String
        }
        else if (e.target.innerHTML === 'C') {
            String = ''
            document.querySelector('.input').value = String
        }
        else if (e.target.innerHTML == 'del') {
            String = String.slice(0, -1); 
            document.querySelector('.input').value = String

        }
        else {
            String = String + e.target.innerHTML
            document.querySelector('.input').value = String
        }


    })
})