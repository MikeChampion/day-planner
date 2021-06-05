document.querySelectorAll(".saveBtn").forEach((btn) => {
    btn.addEventListener("click", saveTask);
});
let hours = document.querySelectorAll(".time-block");
document.querySelector("#currentDay").innerHTML =
    moment().format("MMMM Do YYYY");

function saveTask() {
    let hour = $(this).parent().attr("id");
    let task = $(this).siblings(".description").val();
    localStorage.setItem(hour, task);
}

function updateTime() {
    var currentHour = moment().hours();
    hours.forEach((hour) => {
        console.log(hour.id);
        if (hour.id < currentHour) {
            console.log(hour.id);
            $(this).addClass("past");
        } else if (hour.id === currentHour) {
            console.log(hour.id);
            $(this).removeClass("past");
            $(this).addClass("present");
        } else {
            console.log(hour.id);
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
$("#1 .description").val(localStorage.getItem("1"));
$("#2 .description").val(localStorage.getItem("2"));
$("#3 .description").val(localStorage.getItem("3"));
$("#4 .description").val(localStorage.getItem("4"));
$("#5 .description").val(localStorage.getItem("5"));
