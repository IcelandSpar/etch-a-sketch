function buildGrid(userCellChoice) {
let widthAndLength = 800 / userCellChoice;
console.log(widthAndLength);



    for (j = 0; j < userCellChoice; j++) {

        for (i = 0; i < userCellChoice; i++) {
            const gridContainer = document.querySelector('.gridContainer');
            const cellRow = document.createElement('div');
            gridContainer.classList.add('gridContainer');
            cellRow.classList.add('cellRow');
            gridContainer.appendChild(cellRow)
            
            cellRow.style.width = `${widthAndLength}px`;
            cellRow.style.height = `${widthAndLength}px`;
    
        } 

    }




    } ;
  
    
    
    const button = document.querySelector('.mysteriousButton');
    button.addEventListener('click', () => {
        let userSquareNumber = prompt('How many squares per side would you like? \nThe max is 10.', '4')
        if (userSquareNumber > 10 && userSquareNumber > 0) {
            let userSquareNumber = prompt('Please choose a number less than 11 or bigger than 0.', '4');
            console.log(userSquareNumber)
            return userSquareNumber;
        } 
    console.log(userSquareNumber)
    });
    
    
    
    buildGrid(4);
    