let gridElement = document.querySelector('.grid')

const playButtonElement = document.getElementById('play-button')

playButtonElement.addEventListener("click" ,function() {
    
    gridElement.innerHTML = ''

    for (let i = 0; i < 100; i++){
        let n = (i + 1)
        gridElement.innerHTML += `<div class="cell">${n}</div>`   
    }
    console.log(gridElement)
}) 

