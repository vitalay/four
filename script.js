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