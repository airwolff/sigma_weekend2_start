// Global variables
var student = {};
var $backClick;
var $nextClick;
var i = 0;
// Holds document ready functions
$(document).ready(function () {
	functionality();
	addInfo();
});


// Requests for student objects
$.ajax({
	type: "GET",
	url: "/data",
	success: function (data) {
		// iterate over array of student objects and create usable objects
		$.each(data.sigmanauts, function (i, val) {
			student = this;
			console.log(student);
		})
	}
});

function functionality() {
	$backClick = $('#prev').on('click', back);
	$nextClick = $('#next').on('click', ahead);


}

function back() {
	if (i === 0) {
		i = student.length - 1;
		info(student[i]);
		rewind()
	} else {
		i--;
		info(student[i]);
		rewind()
	}
	console.log("back!");
}

function ahead() {
	if (i === data.length - 1) {
		i = 0;
		info(student[i]);
		i++;
		fastFoward()
	} else {
		i++;
		info(student[i]);
		fastFoward();
	}
	console.log("ahead!");
}

function addInfo() {
	$('#name')
		.text(student.name);
	$('#userName')
		.text(student.git_username);
	$('#shout')
		.text(student.shoutout);
}
addInfo();
// AJAX Request
//
// Your first task is to make an AJAX call from the client side app.js using the .ajax method. The AJAX call will be a GET request that accesses the /data URL. Upon success, it should bring the data back down.
//
// On the DOM
//
// On the DOM should be:
//
// One person's information
// A series of 22 (or the number of people in the data array) index points with the first person's index highlighted or called out in style differently than the others.
// A 'Next' button and a 'Previous' button
// Clicking on the Next button should navigate to the next person, clicking on the Previous button should navigate to the previous person. The highlighted index point should update also as you click through to other people.
// Person Display
//
// When a person is displayed, show their name, their Github link, and their piece of shoutout feedback. Only one person should be showcased at any given time.
//
// You will need to combine everything you learned this week to accomplish this task, and each of the challenges you have completed this week play a part in this task.
//
// Working Example
//
// Here is a similar example from Zeta so you can see the functionality. It's really ugly, however. The code is also minified (no cheating!):
