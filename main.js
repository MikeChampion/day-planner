// $(document).ready(function() {
// 	$('.saveBtn').on('click', function () {
// 		let value = $(this).siblings('.description').val();
// 		let hour = $(this).parent().attr('id');

// 		localStorage.setItem(hour, value);
// 	})
// })

document.querySelectorAll(".saveBtn").forEach((btn) => {
    btn.addEventListener("click", saveTask);
});

function saveTask() {
    let hour = $(this).parent().attr("id");
    let task = $(this).siblings(".description").val();
    localStorage.setItem(hour, task);
    console.log(hour);
}

function updateTime() {
    var currentHour = moment().hours();
}

updateTime();

let timeCheck = setInterval(updateTime, 30000);

$("#9a .description").val(localStorage.getItem("9a"));
$("#10a .description").val(localStorage.getItem("10a"));
