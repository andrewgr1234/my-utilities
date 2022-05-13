//--------------Timer--------------

var audio = new Audio("./elements/alarm.wav");
var totalAmount = localStorage.getItem('countDown') || 0,
    timeloop;

if (totalAmount) {
    timeSet()
}

function timeSet() {
    totalAmount--;

    localStorage.setItem('countDown', totalAmount);

    if (totalAmount < 0) {
        audio.play();
        localStorage.removeItem('countDown');
        totalAmount = 0;
        clearTimeout(timeloop);
        return;
    }

    var minutes = parseInt(totalAmount / 60);
    var seconds = parseInt(totalAmount % 60);

    if (seconds < 10)
        seconds = "0" + seconds;

    $('#tminus').val(minutes + ":" + seconds);

    timeloop = setTimeout(timeSet, 1000);
}

$('.enterTime').click(function () {
    var reqVal = $('#request').val();
    var parAmt = parseInt(reqVal);
    console.log($('#request'));
    if (timeloop) {
        clearTimeout(timeloop)
    }
    console.log(reqVal);
    totalAmount = parAmt * 60;

    $('#request').val(" ");

    timeSet();
})


$('#countdown').on('reset', function () {
    totalAmount = 0;
    clearTimeout(timeloop);
    localStorage.removeItem('countDown');
})


//--------------calculator--------------

function dis(val) {
    document.getElementById("edu").value += val
}
function solve() {
    let x = document.getElementById("edu").value
    let y = eval(x)
    document.getElementById("edu").value = y
}
function clr() {
    document.getElementById("edu").value = ""
}