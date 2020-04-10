const field         = document.querySelector('.tic-tac-toe__field');
const cells         = document.querySelectorAll('.tic-tac-toe__cell');
const cellsArr      = Array.prototype.slice.call( cells );
const buttonRestart = document.querySelector('.tic-tac-toe__button-restart');

let resultArr = [];
let counter   = 0;

field.addEventListener( 'click', addStep );
buttonRestart.addEventListener( 'click', restartGame );



function addButtonRestart() {
    buttonRestart.classList.add('tic-tac-toe__button-restart_type_active');
}


function addWin( winNumberItemArr ) {
    field.removeEventListener( 'click', addStep );

    cellsArr.forEach(cell => {
        cell.classList.remove('tic-tac-toe__cell_type_active');       
    });

    winNumberItemArr.forEach(position => {
        cellsArr[position].classList.add('tic-tac-toe__cell_type_win');
    });

    addButtonRestart();
}

function checksLocation( turn ) {
    cellsArr.forEach(someCell => {
        if (someCell.classList.contains(`tic-tac-toe__cell_mode_standard-${turn}`)) {
            resultArr.push(1);
        }
        else {
            resultArr.push(0);
        }
    });

    if ( resultArr[0] && resultArr[1] && resultArr[2]) {
        const winNumberItemArr = [0, 1, 2];
        addWin( winNumberItemArr );
    };
    if ( resultArr[3] && resultArr[4] && resultArr[5]) {
        const winNumberItemArr = [3, 4, 5];
        addWin( winNumberItemArr );
    };
    if ( resultArr[6] && resultArr[7] && resultArr[8]) {
        const winNumberItemArr = [6, 7, 8];
        addWin( winNumberItemArr );
    };
    if ( resultArr[0] && resultArr[3] && resultArr[6]) {
        const winNumberItemArr = [0, 3, 6];
        addWin( winNumberItemArr );
    };
    if ( resultArr[1] && resultArr[4] && resultArr[7]) {
        const winNumberItemArr = [1, 4, 7];
        addWin( winNumberItemArr );
    };
    if ( resultArr[2] && resultArr[5] && resultArr[8]) {
        const winNumberItemArr = [2, 5, 8];
        addWin( winNumberItemArr );
    };
    if ( resultArr[0] && resultArr[4] && resultArr[8]) {
        const winNumberItemArr = [0, 4, 8];
        addWin( winNumberItemArr );
    };
    if ( resultArr[2] && resultArr[4] && resultArr[6]) {
        const winNumberItemArr = [2, 4, 6];
        addWin( winNumberItemArr );
    };
}

function addStep( e ) {
    const cell = event.target;

    if (cell != field && !cell.classList.contains('tic-tac-toe__cell_type_used')) {
        counter++;

        cell.classList.remove('tic-tac-toe__cell_type_active');
        cell.classList.add('tic-tac-toe__cell_type_used');
        if (counter % 2 == 0 ){
            cell.classList.add('tic-tac-toe__cell_mode_standard-o');
            checksLocation('o');
        }
        else {
            cell.classList.add('tic-tac-toe__cell_mode_standard-x');
            checksLocation('x');
        }

        console.log(counter);
    }

    resultArr.length = 0;

    console.log(counter);

    if (counter === 9) {
        addButtonRestart();
    }

}

function restartGame() {
    
    cellsArr.forEach(cell => {
        cell.removeAttribute('class');
        cell.setAttribute('class', 'tic-tac-toe__cell tic-tac-toe__cell_type_active');
        buttonRestart.classList.remove('tic-tac-toe__button-restart_type_active');
        counter = 0;
        field.addEventListener( 'click', addStep );
    });
}