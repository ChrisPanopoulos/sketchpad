const container = document.getElementById('container');
const erase = document.getElementById('erase');
const color = document.getElementById('color');
const clear = document.getElementById('clear')


function makeGrid(rows,cols) {

    for(c=0; c < rows*cols; c++) {
        let cell=document.createElement('div')
        
        container.appendChild(cell).className='grid-item';

        cell.addEventListener('click',() => {
            cell.style.backgroundColor='red';
        });

        erase.addEventListener('click', () =>{
            cell.addEventListener('click', () =>{
                cell.style.backgroundColor='white';
            })
        })

        color.addEventListener('click', () =>{
            cell.addEventListener('click',() => {
                cell.style.backgroundColor='red';
            });
        })

        clear.addEventListener('click', () => {

            cell.style.backgroundColor='white';
        })
    
    }
 
}

window.onload = () => {
    makeGrid(16,16)

}








