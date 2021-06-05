document.querySelectorAll(".saveBtn").forEach((btn) => {
    btn.addEventListener("click", saveTask);
});
let hours = document.querySelectorAll(".time-block");

function saveTask() {
    let hour = $(this).parent().attr("id");
    let task = $(this).siblings(".description").val();
    localStorage.setItem(hour, task);
    console.log(hour);
}

function updateTime() {
    var currentHour = moment().hours();
    // console.log(hours);
}

updateTime();

let timeCheck = setInterval(updateTime, 30000);

$("#9a .description").val(localStorage.getItem("9a"));
$("#10a .description").val(localStorage.getItem("10a"));
$("#11a .description").val(localStorage.getItem("11a"));
$("#12p .description").val(localStorage.getItem("12p"));
$("#1p .description").val(localStorage.getItem("1p"));
$("#2p .description").val(localStorage.getItem("2p"));
$("#3p .description").val(localStorage.getItem("3p"));
$("#4p .description").val(localStorage.getItem("4p"));
$("#5p .description").val(localStorage.getItem("5p"));
