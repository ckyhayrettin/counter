const number = document.querySelector('.number');
const decrease = document.querySelector('.decrease')
const reset = document.querySelector('.reset')
const ıncrease = document.querySelector('.ıncrease')

// const buttons = document.querySelectorAll('.btn');

let count = 0;

decrease.addEventListener('click', function () {
    count--;
    number.innerHTML = count;
    if (count < 0) {
        number.style.color = 'red'
    }
    console.log(count)
});

reset.addEventListener('click', function () {
    count = 0;
    number.innerHTML = count;
    if (count == 0) {
        number.style.color = 'Black'
    }
    console.log(count)
});
ıncrease.addEventListener('click', function () {
    count++;
    number.innerHTML = count;
    if (count > 0) {
        number.style.color = 'green'
    }
    console.log(count)
});
/****************************************************************** */
// buttons.forEach(btn => {

//     btn.addEventListener('click', function () {

//         if (btn.classList.contains('decrease')) {
//             count--;
//             number.innerHTML = count;

//             console.log(count)
//         } else if (btn.classList.contains('ıncrease')) {
//             count++;
//             number.innerHTML = count;

//             console.log(count)
//         } else {
//             count = 0;
//         }
//         if (count < 0) {
//             number.style.color = 'red'
//         } else if (count > 0) {
//             number.style.color = 'green'
//         } else {
//             number.style.color = 'black'
//         }
//     })
// });