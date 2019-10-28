var time = parseInt(moment().format('HH'))

console.log(time)


$("#date").text(moment().format('dddd, MMMM Do YYYY'))


$("#nine").ready(timeChecker(9))
$("#nineBtn").click(saveNotes(9))

$("#ten").ready(timeChecker(10))
$("#tenBtn").click(saveNotes(10))

$("#elven").ready(timeChecker(11))
$("#elevenBtn").click(saveNotes(11))

$("#twelve").ready(timeChecker(12))
$("#twelveBtn").click(saveNotes(12))

$("#thirteen").ready(timeChecker(13))
$("#thirteenBtn").click(saveNotes(13))

$("#fourteen").ready(timeChecker(14))
$("#fourteenBtn").click(saveNotes(14))

$("#fifteenteen").ready(timeChecker(15))
$("#fifteenBtn").click(saveNotes(15))

$("#sixteen").ready(timeChecker(16))
$("#sixteenBtn").click(saveNotes(16))

$("#seventeen").ready(timeChecker(17))
$("#seventeenBtn").click(saveNotes(17))

$("#eightteen").ready(timeChecker(18))
$("#eightteenBtn").click(saveNotes(18))



function timeChecker(x) {
    if (x > time) {
        $("#" + x).css("background-color", "#a347ff")
    } else if (x < time) {
        $("#" + x).css("background-color", "#fcb18d")
    } else if (x === time) {
        $("#" + x).css("background-color", "#ff5447")
    }
}


function saveNotes(x) {
    localStorage.setItem(x + "Notes", $("#" + x).val())


};

