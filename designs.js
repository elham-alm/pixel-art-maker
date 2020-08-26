



// make grid generates a grid of height and width vlaues submitted by the user 
//var height= document.getElementById('inputHeight')
//var width= document.getElementById('inputWidth')
    //width from user 


    //user selects size of grid (width and height) then after clicking submit input is sent to makeGrid() function 
document.getElementById('sizePicker').addEventListener('submit', function(event) {
  event.preventDefault();
    makeGrid();
  });

function makeGrid() {
  var width= document.getElementById('inputWidth').value;
  //height from user
  var height= document.getElementById('inputHeight').value;
  //table from html file
  var table= document.getElementById('pixelCanvas');

   // to reset table
    table.innerHTML = '';

    // loop for grid rows 
    let i=0;
while ( i<height) {
  const row = table.insertRow(0);
          // loop for grid columns
     let j=0;
  while ( j< width) {
      row.insertCell(0);
      j++;
    }  i++;}
 
      
      // event listener for user click on grid cells 
      table.addEventListener('click', function(e) {
        //the clicked cell is filled with the value (color) from the color picker 
        event.target.style.backgroundColor = document.getElementById('colorPicker').value;
      });
    
    }



