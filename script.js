const container = document.querySelector('.container');
const newGridBtn = document.querySelector('.newGrid');

// Allow the user to create a custom sized grid
newGridBtn.addEventListener('click', promptNewGrid);

newGrid(16);

function promptNewGrid() {
    let size = prompt('Enter grid size (NxN)');

    if(size <= 0 || isNaN(size))
        return;

    // Remove current grid before replacing it
    const rows = document.querySelectorAll('.row');
    rows.forEach(row => { container.removeChild(row);});

    newGrid(size);
}

function newGrid(size) {
    for(let i = 0; i < size; i++){
        const row = document.createElement('div');
    
        row.classList.add('row');
    
        for(let j = 0; j < size; j++) {
            const newDiv = document.createElement('div');
            newDiv.classList.add('square');
    
            newDiv.addEventListener('mouseover', (e) => {
                e.target.style.backgroundColor = "black";
            });
    
            row.appendChild(newDiv);
        }
    
        container.appendChild(row);
    }
}