'use strict'


// const box = document.querySelector('.box');
// setTimeout(() => {
//     box.style.backgroundColor = 'black'
// }, 2000);


// const box = document.querySelector('.box');
// let counter = 0;
// const countInterval = setInterval(count, 1000);

// function count() {
//     console.log(counter++);
//     if(counter > 5) {
//         clearInterval(countInterval)
//     }
//     if(counter > 5) {
//         box.style.marginLeft = 'auto'
//     }
// }


const span = document.querySelector('span')
const box = document.querySelector('.box');
const body = document.querySelector('body')

setTimeout(() => {
    box.style.display = 'block'
}, 5000);

span.addEventListener('click', () => {
    box.style.display = 'none'
})

body.addEventListener('click', () => {
        clearTimeout()
})
