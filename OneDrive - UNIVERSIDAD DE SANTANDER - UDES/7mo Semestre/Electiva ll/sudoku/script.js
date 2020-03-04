$(function() {  
    var board1_solved = [
      [1,2,7,4,5,6,9,8,3],
      [8,9,4,1,2,3,5,6,7],
      [3,5,6,7,8,9,1,4,2],
      [4,3,9,6,1,5,7,2,8],
      [7,1,8,3,4,2,6,9,5],
      [2,6,5,9,7,8,3,1,4],
      [5,7,1,2,6,4,8,3,9],
      [9,8,2,5,3,1,4,7,6],
      [6,4,3,8,9,7,2,5,1],
    ];    
    var board1 = [
      [1,2,0,4,5,0,0,8,0],
      [0,0,4,0,0,3,5,0,0],
      [3,0,6,7,0,0,0,4,2],
      [4,0,9,0,0,5,7,2,0],
      [0,1,0,3,4,0,6,0,5],
      [2,0,5,9,0,0,3,1,4],
      [0,7,0,0,0,0,8,0,0],
      [9,0,0,5,0,0,0,0,6],
      [0,4,3,8,0,7,2,0,1],
    ];
    
    /* initialize cells' ids*/
    $('.sudoku-square').each(function(i) {
        $(this).find('a.cell-value').each(function(j) {
            var a = i + 1;
            var b = j + 1;        
            $(this).attr('id', 'c' + a + b);             
        });
    });  
      
    function getSquare(i, j) {    
      var a = Math.floor(i/3) * 3;
      var b = Math.floor(j/3) + 1;
      return a + b;
    }
      
    function getCell(i, j) {    
      var a = (i % 3) * 3; 
      var b = (j % 3) + 1;
      return a + b;
    }
    
    function getI(square, cell) {
      var a = Math.floor((square - 1) / 3) * 3;
      var b = Math.floor((cell - 1) / 3);
      return a + b;
    }
    
    function getJ(square, cell) {
      var a = ((square - 1) % 3) * 3;
      var b = (cell - 1) % 3;
      return a + b; 
    }
      
    /*seed the sudoku board*/  
    for(var i=0; i < 9; i++) {
      for(var j=0; j < 9; j++) {
         var a = getSquare(i, j);
         var b = getCell(i, j);      
         var $cell = $('.sudoku #c'+ a + b);
        
         if (board1[i][j] !== 0) {
            $cell.closest('.cell').addClass('filled');   
            $cell.text(''+ board1[i][j]);         
         }       
      }
    }
    
    
    $('.sudoku a.cell-value').click(function() {
       if ($(this).text() === '') {
          $('a.cell-value').removeClass('selected');
          $(this).addClass('selected'); 
       }
    });
    
    $('.select-row a.cell-value').click(function() {
      var $selectedCell = $('.sudoku a.cell-value.selected');
      if ($selectedCell.length == 1) {      
        // check if matches      
        var cellId = $selectedCell.attr('id').match(/\d+$/)[0];
        var square = Math.floor(cellId / 10);
        var cell = cellId % 10;
        var i = getI(square, cell);
        var j = getJ(square, cell);      
        
        var selectedValue = Number($(this).text());
        var correctValue = board1_solved[i][j];
        if (selectedValue === correctValue) {
          $selectedCell.closest('.cell').addClass('filled solved');
          $selectedCell.removeClass('selected');
          $selectedCell.text($(this).text());
        }
      }
    });
    
  });
function (n){
  var element = element.getByname(n);
}
  