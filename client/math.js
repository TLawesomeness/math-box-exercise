'use strict';

$(document).ready(init);

function init() {
  $('#go').click(go);
  $('#boxes').on('click', '.box', increment);
}

function go() {
  var values = $('#input').val().split(',').map(function(n, i) {
    return {base:n * 1, exponent:(i * 2) + 1, solution:Math.pow(n * 1, (i * 2) + 1)};
  });

  values.forEach(function(v) {
    var $div = $('<div>');
    $div.addClass('box');
    $div.text(v.base + '^' + v.exponent + '=' + v.solution);
    $('#boxes').append($div);
  });
}

function increment() {
  var text = $(this).text();
  var base = text.split('^')[0] * 1;
  var exp = (text.split('^')[1].split('=')[0] * 1) + 1;
  var sol = Math.pow(base, exp);
  $(this).text(base + '^' + exp + '=' + sol);
}
