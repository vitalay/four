const b = document.querySelector('.b-1')
const f1 = () => {
 alert('task 1')
}
const b2 = document.querySelector('.b-2')
const f2 = () => {
 alert('task 2')
}

document.querySelector('.b2').addEventListener('click', function () {
  alert('Задача 2');
});

document.querySelector('.p-3').addEventListener("click", () => alert("Задача 3"))

const i4 = document.querySelector('.i-4')
const b4 = document.querySelector('.b-4')
const out4 = document.querySelector('.out-4')

// const f4 = () => {
//   const isChecked = checkbox.checked;
//   if (i4.checked) {
//     out4.innerHTML = true
//   } else {
//     out4.innerHTML = false
//   }
// }
const btn =  document.querySelector('.b-4')
const checkbox = document.querySelector('.i-4');
const out = document.querySelector('.out-4')
btn.addEventListener('click', function () {
 out.innerHTML = checkbox.checked;  
});

