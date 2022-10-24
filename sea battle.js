function refresh() {
    window.location.reload();
}

document.addEventListener("DOMContentLoaded", function() { 
    document.querySelectorAll('td').forEach( td => initCell(td))
});

let currentPlayerSign = "You";


function initCell(td){
    td.addEventListener("click", event => {
        const el = event.target
        if ( !el.classList.contains('You') && !el.classList.contains('Computer') ){
            el.classList.add("currentPlayerSign");
            currentPlayerSign = currentPlayerSign == 'You' ? 'Computer' : 'You'
            document.querySelector('#playerIndicator').innerText = 'Player ' + currentPlayerSign + ' moves'
        }
    })  
}


function refresh1 (){ 
    const alphabet = ["A","B","C","D","E","F","G","H","I","J"]
    let ship1 = [];
    let ship2 = [];
    let ship3 = [];
    let ship4 = [];
    for (let i = 0; i < 4; i++) {
        let x = alphabet[Math.floor(Math.random() * 9)];
        let y = Math.floor(Math.random() * 10);
        ship1.push(x, y);
    }
    for (let i = 0; i < 3; i++) {
        let x = alphabet[Math.floor(Math.random() * 9)];
        let y = Math.floor(Math.random() * 10);
        ship2.push(x, y, y+=1);
    }
    for (let i = 0; i < 2; i++) {
        let x = alphabet[Math.floor(Math.random() * 9)];
        let y = Math.floor(Math.random() * 10);
        ship3.push(x, y, y += 1, y += 1);
    }
    let x = alphabet[Math.floor(Math.random() * 9)];
    let y = Math.floor(Math.random() * 10);
    ship4.push(x, y, y+=1, y+=1, y+=1)
    console.log(ship1, ship2, ship3, ship4);
}



