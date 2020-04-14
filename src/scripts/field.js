const menu          = document.querySelector('.tic-tac-toe__menu');
const buttonStart   = document.querySelector('.tic-tac-toe__button-start');
const selectStyle   = document.querySelector('.tic-tac-toe__select_type_style');
const selectMode    = document.querySelector('.tic-tac-toe__select_type_mode');
const field         = document.querySelector('.tic-tac-toe__field');
const cells         = document.querySelectorAll('.tic-tac-toe__cell');
const cellsArr      = Array.prototype.slice.call( cells );
const buttonRestart = document.querySelector('.tic-tac-toe__button-restart');

let style     = 'classic';
let mode      = '';
let resultArr = [];
let counter   = 0;

buttonStart.addEventListener( 'click', startGame );
buttonRestart.addEventListener( 'click', restartGame );
selectStyle.addEventListener( 'change', addStyle );
/* selectMode.addEventListener( 'change', addMode ); */

function addStyle() {
    selectStyle.value === 'Classic' ? style = 'classic' : style = 'modern'
    field.classList.toggle('tic-tac-toe__field_style_modern');    
}
 



function startGame() {
    field.addEventListener( 'click', addStep );
    selectStyle.setAttribute('disabled', 'disabled');
    selectMode.setAttribute('disabled', 'disabled');

    menu.classList.add('tic-tac-toe__menu_type_desabled');
    buttonStart.classList.add('tic-tac-toe__button-start_type_desabled');
    selectStyle.classList.add('tic-tac-toe__select_type_desabled');
    selectMode.classList.add('tic-tac-toe__select_type_desabled');

    field.classList.remove('tic-tac-toe__field_type_desabled');
}

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
        if (someCell.classList.contains(`tic-tac-toe__cell_style_${style}-${turn}`)) {
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
            cell.classList.add(`tic-tac-toe__cell_style_${style}-o`);
            checksLocation('o');
        }
        else {
            cell.classList.add(`tic-tac-toe__cell_style_${style}-x`);
            checksLocation('x');
        }
    }

    resultArr.length = 0;

    if (counter === 9) {
        addButtonRestart();
    }
}

function restartGame() {
    cellsArr.forEach(cell => {
        cell.removeAttribute('class');
        cell.setAttribute('class', 'tic-tac-toe__cell tic-tac-toe__cell_type_active');
    });

    field.classList.add('tic-tac-toe__field_type_desabled');

    buttonRestart.classList.remove('tic-tac-toe__button-restart_type_active');
    counter = 0;

    menu.classList.remove('tic-tac-toe__menu_type_desabled');
    buttonStart.classList.remove('tic-tac-toe__button-start_type_desabled');
    selectStyle.classList.remove('tic-tac-toe__select_type_desabled');
    selectMode.classList.remove('tic-tac-toe__select_type_desabled');
    selectStyle.removeAttribute('disabled');
    selectMode.removeAttribute('disabled');
}