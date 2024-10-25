let birthYear = document.getElementById('birth-Year');
let currentYear = document.getElementById('current-Year');
let generateBtn = document.getElementById('generate-Btn');
let result = document.getElementById('result');
generateBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (birthYear === '' || currentYear === '') {
        alert('Fill the fields, please !')
    }
    result.innerHTML = currentYear.value - birthYear.value;
});