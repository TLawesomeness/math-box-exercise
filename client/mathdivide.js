'use strict';

$(document).ready(init);

function init() {
  $('#go').click(go);
  $('#boxes').on('click', '.box', inc);
}

function go() {
  var input = $('#input').val().split(',');
  console.log(input);
  for (var i = 0; i < input.length - 1; i++) {
    var currVal = input[i];
    var nextVal = input[i + 1];
    var ans = currVal / nextVal;
    console.log(currVal + '/' + nextVal + '=' + ans);
    var $div = $('<div>');
    $div.addClass('box');
    $div.text(currVal + '/' + nextVal + '=' + ans);
    $('#boxes').append($div);
  }

}

function inc() {
  var text = $(this).text();
  var baseVal = text.split('/')[0] * 1;
  var denom = (text.split('/')[1].split('=')[0] * 1) + 1;
  var ans = baseVal / denom;
  $(this).text(baseVal + '/' + denom + '=' + ans);
}
