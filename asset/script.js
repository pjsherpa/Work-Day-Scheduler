var button = $(".saveBtn");
var time = $("p");
var msg = $("#msg");
inIt();
saved();
// Show current day on schedule
var currentDay = moment().format("dddd MMM Do, YYYY");
$("#currentDay").text(currentDay);
//how to setup time(hour) in the time element and compare it with currentTime.
var currentTime = moment().format("H");
// converting this to number for comaprison for the if else statement below
currentTime = parseInt(currentTime);

setTime();
function setTime() {
  var setime = moment().set("hour", 9);
  // console.log(setime);
  for (var i = 9; i <= 17; i++) {
    var form = $(`.time${i}`)[0];
    // console.dir(form);
    //setting up time and displaying it
    $(`#${i}`).text(setime.format("hh a"));
    setime.add(1, "hours");
    console.log(i, currentTime);
    //past = red; present=blue; future=green;
    if (currentTime > i) {
      form.classList.remove("present");
      form.classList.remove("future");
      form.classList.add("past");
    } else if (currentTime === i) {
      form.classList.remove("past");
      form.classList.remove("future");
      form.classList.add("present");
      console.log(i);
    } else if (currentTime < i) {
      form.classList.remove("past");
      form.classList.remove("present");
      form.classList.add("future");
    }
  }
}

// localstorage steps ref 26 stu local storage todos ucb
function inIt() {
  // console.log(JSON.parse(localStorage.getItem("scheduleList11")));
  var scheduleList9 = localStorage.getItem("scheduleList9");
  var scheduleList10 = localStorage.getItem("scheduleList10");
  var scheduleList11 = localStorage.getItem("scheduleList11");
  var scheduleList12 = localStorage.getItem("scheduleList12");
  var scheduleList1 = localStorage.getItem("scheduleList1");
  var scheduleList2 = localStorage.getItem("scheduleList2");
  var scheduleList3 = localStorage.getItem("scheduleList3");
  var scheduleList4 = localStorage.getItem("scheduleList4");
  var scheduleList5 = localStorage.getItem("scheduleList5");
  if (
    !scheduleList9 ||
    !scheduleList10 ||
    !scheduleList11 ||
    !scheduleList12 ||
    !scheduleList1 ||
    !scheduleList2 ||
    !scheduleList3 ||
    !scheduleList4 ||
    !scheduleList5
  ) {
    return;
  }
  // using unique ID's for schedulelist 9am-5pm
  $("#first").val(scheduleList9);
  $("#second").val(scheduleList10);
  $("#third").val(scheduleList11);
  $("#fourth").val(scheduleList12);
  $("#fifth").val(scheduleList1);
  $("#sixth").val(scheduleList2);
  $("#seventh").val(scheduleList3);
  $("#eight").val(scheduleList4);
  $("#ninth").val(scheduleList5);
}

function displayMessage(type, message) {
  msg.text("This has now been saved 🎉");
}

// Updates schedule on screen and sets it up to client storage.
function saved() {
  button.on("click", function (event) {
    event.preventDefault();
    // using unique ID's for schedulelist 9am-5pm
    var scheduleList9 = $("#first").val();
    var scheduleList10 = $("#second").val();
    var scheduleList11 = $("#third").val();
    var scheduleList12 = $("#fourth").val();
    var scheduleList1 = $("#fifth").val();
    var scheduleList2 = $("#sixth").val();
    var scheduleList3 = $("#seventh").val();
    var scheduleList4 = $("#eight").val();
    var scheduleList5 = $("#ninth").val();
    localStorage.setItem("scheduleList9", scheduleList9);
    localStorage.setItem("scheduleList10", scheduleList10);
    localStorage.setItem("scheduleList11", scheduleList11);
    localStorage.setItem("scheduleList12", scheduleList12);
    localStorage.setItem("scheduleList1", scheduleList1);
    localStorage.setItem("scheduleList2", scheduleList2);
    localStorage.setItem("scheduleList3", scheduleList3);
    localStorage.setItem("scheduleList4", scheduleList4);
    localStorage.setItem("scheduleList5", scheduleList5);

    console.log("button clicked");
    //display msg once save button has been clicked.
    inIt();
    displayMessage();
  });
}
