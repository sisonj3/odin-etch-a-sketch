const container = document.querySelector('.container');

for(let i = 0; i < 16; i++){
    const row = document.createElement('div');

    row.classList.add('row');

    for(let j = 0; j < 16; j++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('square');

        newDiv.addEventListener('mouseover', (e) => {
            console.log(e.target);
        });

        row.appendChild(newDiv);
    }

    container.appendChild(row);
}