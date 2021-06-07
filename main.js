/* EVENT LISTENERS FOR SAVE BUTTONS */
document.querySelectorAll(".saveBtn").forEach((btn) => {
    btn.addEventListener("click", saveTask);
});

/* GETS CURRENT DAY FROM MOMENTjs AND WRITES IT TO THE PAGE */
document.querySelector("#currentDay").innerHTML =
    moment().format("MMMM Do YYYY");

updateTime();

/* 30 SECOND INTERVAL THAT RUNS THE updateTime FUNCTION */
const timeCheck = setInterval(updateTime, 30000);

/* SAVES DATA TO LOCAL STORAGE */
function saveTask() {
    let hour = $(this).parent().attr("id");
    let task = $(this).siblings(".description").val();
    localStorage.setItem(hour, task);
}

/* COMPARES CURRENT HOUR (MOMENTjs) TO EACH BLOCK AND UPDATES CLASSES */
function updateTime() {
    var currentHour = moment().hours();
    $(".time-block").each(function () {
        let hour = parseInt($(this).attr("id"));
        if (hour < currentHour) {
            $(this).addClass("past");
            $(this).removeClass("present");
            $(this).removeClass("future");
            console.log("past");
        } else if (hour === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
            console.log("present");
        } else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
            console.log("future");
        }
    });
}

/* GETITEM REQUESTS FOR PAGE */
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));
