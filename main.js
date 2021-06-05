document.querySelectorAll(".saveBtn").forEach((btn) => {
    btn.addEventListener("click", saveTask);
});

document.querySelector("#currentDay").innerHTML =
    moment().format("MMMM Do YYYY");

function saveTask() {
    let hour = $(this).parent().attr("id");
    let task = $(this).siblings(".description").val();
    localStorage.setItem(hour, task);
}

function updateTime() {
    var currentHour = moment().hours();
    // let hours = document.querySelectorAll(".time-block");
    $(".time-block").each(function () {
        let hour = parseInt($(this).attr("id"));
        //Number(hour.id);
        // hours.forEach((hour) => {
        //     Number(hour.id);
        if (hour < currentHour) {
            $(this).addClass("past");
        } else if (hour === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
        } else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    });
}

updateTime();

let timeCheck = setInterval(updateTime, 30000);

$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));
