/** Copyright 2015 YUOL. All rights reserved.
 *
 * @file scroll.js
 * @author Peter-Wang <peterwang1996@outlook.com>
 */

var col = document.getElementById('col');
var col1 = document.getElementById('col1');
var col2 = document.getElementById('col2');
var shell = document.getElementById('shell');

col2.innerHTML = col1.innerHTML;

var i = 0;
var speed = 1;

function myMove() {
    if (i <= -col1.offsetWidth) {
        i = 0;
    } else {
        i -= speed;
    }
    col.style.marginLeft = i + 'px';
}

var myScroll = setInterval(myMove, 20);

shell.onmouseover = function() {
    clearInterval(myScroll);
}

shell.onmouseout = function() {
    myScroll = setInterval(myMove, 20);
}
