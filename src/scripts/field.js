const field = document.querySelector('.tic-tac-toe__field');
let counter = 0;

field.addEventListener( 'click', stepAdd );

function stepAdd( e ) {
    const cell = event.target;

    if(cell != field && !cell.classList.contains('tic-tac-toe__cell_type_used')) {
        counter++;

        cell.classList.remove('tic-tac-toe__cell_type_active');
        cell.classList.add('tic-tac-toe__cell_type_used');
        if (counter % 2 == 0 ){
            cell.classList.add('tic-tac-toe__cell_mode_standard-o');
        }
        else {
            cell.classList.add('tic-tac-toe__cell_mode_standard-x');
        }
    }

    
}