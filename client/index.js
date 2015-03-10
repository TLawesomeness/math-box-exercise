'use strict';
$(document).ready(init);

function init() {
  $('#go').click(go);
}

function go() {
  var values = $('#input').val().split(',').map(function(v) {
    v = v.split(':');
    o = {letter:v[0], value:v[1] * 1, square:v[1] * v[1]};
    return o;
  });

  values.forEach(function(v) {
    var $div = $('<div>');
    $div.addClass('box');
    $div.text(v.letter + ':' + v.value + '^2 = ' + v.square);
    $div.css('background-color', v.value % 2 ? 'red' : 'green');
    $('#boxes').append($div);
  });
}
