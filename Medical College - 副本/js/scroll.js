var i = 0,
    speed = 1;
var col1 = document.getElementById("scroll1"),
    col2 = document.getElementById("scroll2"),
    col3 = document.getElementById("scroll3"),
    shell = document.getElementById("scroll-wrap");

function myMove() {
    i <= -col1.offsetWidth ? i = 0 : i -= speed, col1.style.marginLeft = i + "px"
}
col2.innerHTML = col1.innerHTML;
col3.innerHTML = col1.innerHTML;
myScroll = setInterval(myMove, 20);
shell.onmouseover = function() {
    clearInterval(myScroll);
};
shell.onmouseout = function() {
    myScroll = setInterval(myMove, 20);
};