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

const btn1 = document.querySelector('.b-5')
const checkbox1 = document.querySelector('.i-5');
const out1 = document.querySelector('.out-5')
btn1.addEventListener('click', function () {
  // out1.innerHTML = checkbox1.checked;
  out1.textContent = checkbox1.checked ? checkbox1.value : false;
});


const btn2 = document.querySelector('.b-6')
const checkbox2 = document.querySelector('.i-6');
const out2 = document.querySelector('.out-6')
btn2.addEventListener('click', function () {
  out2.textContent = checkbox2.value;
});

const btn7 = document.querySelector('.b-7')
const i7 = document.querySelector('.i-7')
const out71 = document.querySelector('.out-71')
const out72 = document.querySelector('.out-72')

btn7.addEventListener('click', function () {
  
  out71.textContent = i7.value;
 
  if (i7.value.length >= 6) {
    out72.textContent = 1;
  }else {
    out72.textContent = 0;
  }
  i7.value = ''

});




document.querySelector('.b-8').addEventListener('click', () => {
  document.querySelector('.out-8').innerHTML = `
  <input type="text" class="i-81">
  <button class="b-81">Задача</button>
  `;
 document.querySelector('.b-81').addEventListener('click', function f81() {
  const i81 = document.querySelector('.i-81').value;
document.querySelector('.out-81').textContent = i81;
})
});

const radio = document.querySelector('.r-9')
const out9 = document.querySelector('.out-9')
document.querySelector('.b-9').addEventListener('click', () => {
//  if (radio.checked){
//  out9.textContent =  radio.value
//  }else {
//   out9.textContent = 0
//  }
  out9.textContent = radio.checked ? radio.value : '0';
})
const i10 = document.querySelector('.i-10')
const out10 = document.querySelector('.out-10')
document.querySelector('.b-10').addEventListener('click', () => {
  out10.style.background = i10.value
})



document.querySelector('.b-11').addEventListener('click', () => {
const i111 = document.querySelector('.i-111').value
document.querySelector('.i-112').value = i111

});

// const i12 = document.querySelector('.i-12')
// const out12 = document.querySelector('.out-12')
//   document.querySelector('.b-12').addEventListener('click', () => {
//    out12.textContent = i12.value;
//   })

document.querySelector('.b-12').addEventListener('click', function () {
  // Получаем выбранную дату
  const selectedDate = document.querySelector('.i-12').value;

  // Выводим дату в элемент out-12
  document.querySelector('.out-12').textContent =
    selectedDate ? `Выбранная дата: ${selectedDate}` : "Дата не выбрана";
});

// document.querySelector('.i-13').addEventListener('input', function () {
//   document.querySelector('.out-13').textContent = this.value;
// });

const i14 = document.querySelector('.i-14')
const out14 = document.querySelector('.out-14')
document.querySelector('.b-14').addEventListener('click', () => {
  out14.textContent = i14.value
})

const t15 = document.querySelector('.t-15')
const i15 = document.querySelector('.i-15')
const out15 = document.querySelector('.out-15')
document.querySelector('.b-15').addEventListener('click', () => {
  out15.textContent = i15.value
  t15.textContent = i15.value
})

const s16 = document.querySelector('.s-16')
const out16 = document.querySelector('.out-16')
document.querySelector('.b-16').addEventListener('click', () => {
  out16.textContent = s16.value
})

const s17 = document.querySelector('.s-17')
const out17 = document.querySelector('.out-17')

function f17() {
  out17.textContent = s17.value

}








