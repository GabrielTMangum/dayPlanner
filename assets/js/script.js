var time = parseInt(moment().format('HH'))

console.log(time)


$("#date").text(moment().format('dddd, MMMM Do YYYY'))


$("#nine").ready(timeChecker (9))
$("#nineBtn").click(saveNotes("nine"))

function timeChecker (x) {
    if (x > time) {
        $("#" + x).css("background-color","#a347ff")
    } else if (x < time) {
        $("#" + x).css("background-color","#fcb18d")
    } else if (x === time){
        $("#" + x).css("background-color","#ff5447")
    }
}


function saveNotes (x) {
    console.log(x)
}