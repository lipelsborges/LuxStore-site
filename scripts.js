const prevButton = document.getElementById('prev')
const nextButton =  document.getElementById('next')
const items = document.querySelectorAll('.item')
const dots = document.querySelectorAll('.dot')
const numberIndicator = document.querySelector('.numbers')
const list = document.querySelector('.list')

let active = 0;
const total = items.length
let timer;

function update(direcao){

    document.querySelector('.item.active').classList.remove('active')
    document.querySelector('.dot.active').classList.remove('active')

    if(direcao > 0){
        active = active + 1
    } 
    
    else if(direcao < 0){

    }


}

prevButton.addEventListener('click', () => {
    update(-1)
});

nextButton.addEventListener('click', () => {
    update(1)
});