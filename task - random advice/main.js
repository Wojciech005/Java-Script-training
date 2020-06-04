

const advice = ['never give up', 'read a lot'];
const h1 = document.querySelector('h1');


const showOptions = () => {
    alert( advice)
}

const resetAllAdvice = (e) => {
    e.preventDefault();
    advice.length = 0;

}

const addAdvice = (e) => {
    e.preventDefault()
    const input = document.querySelector('input');
    const sentens = input.value;
    advice.push(sentens);
    input.value = '';
    // console.log(sentens)
    alert(`dodales ${sentens}`);
   

}
const showAdvice = () => {
    const indexAdvice = Math.floor(Math.random() * advice.length);
    h1.textContent = `${advice[indexAdvice]}`;

    
}

document.querySelector('.showAdvice').addEventListener('click', showAdvice);

document.querySelector('.showOptions').addEventListener('click', showOptions);

document.querySelector('.add').addEventListener('click', addAdvice);

document.querySelector('.clean').addEventListener('click', resetAllAdvice);

