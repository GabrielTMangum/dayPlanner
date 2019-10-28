var time = parseInt(moment().format('HH'))

$('.btn').click(function(){
    var holder = $(this).val()
   localStorage.setItem(holder, $(holder).val());
})
for (let i = 9; i < 19; i++) {
    $('#'+i).val(localStorage.getItem('#'+i))
}


$("#date").text(moment().format('dddd, MMMM Do YYYY'))


$("#nine").ready(timeChecker(9))

$("#ten").ready(timeChecker(10))

$("#elven").ready(timeChecker(11))

$("#twelve").ready(timeChecker(12))

$("#thirteen").ready(timeChecker(13))

$("#fourteen").ready(timeChecker(14))

$("#fifteenteen").ready(timeChecker(15))

$("#sixteen").ready(timeChecker(16))

$("#seventeen").ready(timeChecker(17))

$("#eightteen").ready(timeChecker(18))




function timeChecker(x) {
    if (x > time) {
        $("#" + x).css("background-color", "#a347ff")
    } else if (x < time) {
        $("#" + x).css("background-color", "#fcb18d")
    } else if (x === time) {
        $("#" + x).css("background-color", "#ff5447")
    }
}