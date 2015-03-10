'use strict';

$(document).ready(function() {
  $('#go').click(makeBox);
});

function makeBox() {
  var arrMult = [];
  var $input = $('#input').val().split(',');
  console.log($input);

  // console.log(arrMult);
  $('#total').val(arrMult);

  function addSq() {
    for (var i = 0; i < $input.length; i++) {
      arrMult.push($input[i].charAt(0) + $input[i].charAt(1) + $input[i].charAt(2) + '<sup>2</sup>' + ':' + parseInt($input[i].charAt(2) * $input[i].charAt(2)));
      console.log(arrMult);
    }
    return addSq;
  }

  addSq($input, arrMult);
  debugger;
  arrMult.forEach(function(e) {
    console.log(e);
    var $divEven = $('<div>');
    $divEven.addClass('evenbox');
    var $divOdd = $('<div>');
    $divOdd.addClass('oddbox');

    if (e % 2 === 0) {

      $('#even').append($divEven);
      $divEven.append(e + '<br />').css({'background-color': 'red', 'height': '100px', 'width': '100px'});
    } else {
      $('#odd').append($divOdd);
      $divOdd.append(e + '<br / >').css({'background-color': 'green', 'height': '100px', 'width': '100px'});
    }
  });

}
