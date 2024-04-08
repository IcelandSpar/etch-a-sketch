let userChoice = 4;

let buildGrid = function (userCellChoice) {

    let widthAndLength = 800 / userCellChoice;
    console.log(widthAndLength);



            for (i = 0; i < userCellChoice * userCellChoice; i++) {
                

                const gridContainer = document.querySelector('.gridContainer');
                const cell = document.createElement('div');
                gridContainer.classList.add('gridContainer');
                cell.classList.add('cell');
                gridContainer.appendChild(cell)
                
                cell.style.width = `${widthAndLength}px`;
                cell.style.height = `${widthAndLength}px`;

                cell.addEventListener('mouseover', () => {

                    cell.style.cssText = 'background-color: green; border-color: rgba(0,0,0, 50%);';
                    cell.style.width = `${widthAndLength}px`;
                    cell.style.height = `${widthAndLength}px`;
                    
                    
                });

            };
   

};








buildGrid(userChoice);

    
    const button = document.querySelector('.mysteriousButton');
    button.addEventListener('click', () => {
        let userChoice = prompt('How many squares per side would you like? \nThe max is 100.', '4')
        
        if (userChoice > 100 || userChoice < 1) {
            prompt('Please choose a number less than 101 or bigger than 0.', '4');
            console.log(userChoice);
            
        } else if (userChoice < 101 && userChoice > 0) {
            const gridContainer = document.querySelector('.gridContainer')
            gridContainer.textContent = '';
            
            buildGrid(userChoice);
        } 
    
    });
    
    
    

 
    
    