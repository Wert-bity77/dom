const body = document.querySelector('body');
const javob = document.createElement('h1')
let box = document.createElement('div')
let savol = prompt('Ismingizni kiriting')


body.style.display = 'flex';
body.style.justifyContent = 'center';
body.style.backgroundColor = `green`
body.style.alignItems = 'center';



javob.style.fontSize = `500px`

 
body.appendChild(javob)
body.append(savol, box)
console.log(body);
console.log(javob);