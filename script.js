function buildGrid(userCellChoice) {
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

                cell.style.cssText = 'background-color: green;';
                cell.style.width = `${widthAndLength}px`;
                cell.style.height = `${widthAndLength}px`;
            });

        };








    } ;
  
    
    
    const button = document.querySelector('.mysteriousButton');
    button.addEventListener('click', () => {
        let userSquareNumber = prompt('How many squares per side would you like? \nThe max is 10.', '4')
        if (userSquareNumber > 100 && userSquareNumber > 0) {
            let userSquareNumber = prompt('Please choose a number less than 11 or bigger than 0.', '4');
            console.log(userSquareNumber)
            return userSquareNumber;
        } 
    console.log(userSquareNumber)
    });
    
    
    
    buildGrid(5);
    