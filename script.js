function buildGrid() {

    for (i = 0; i < 17; i++) {
        const gridContainer = document.querySelector(".gridContainer");
        const boxes = document.createElement("div");
        
        gridContainer.appendChild(boxes);
        gridContainer.style.cssText="display: flex; flex-wrap: wrap; justify-content: flex-start; border: solid white;"
        boxes.style.cssText = "display: flex; justify-content: flex-start; flex-wrap: wrap; flex-grow: 1; flex-basis: 24%; height: auto; border-radius: 10px; border: 1px dotted white;  "
      
        boxes.addEventListener("mouseover", () => {
    boxes.style.cssText = "background-color: green; display: flex; justify-content: flex-start; flex-wrap: wrap; flex-grow: 1; flex-shrink: 1; align-items: stretch; border-radius: 10px; flex-basis: 24%; height: auto; border: 1px dotted black; border-radius: 10px; "
    });
    
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
    
    
    
    buildGrid();
    