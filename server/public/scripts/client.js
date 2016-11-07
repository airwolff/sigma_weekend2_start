var peopleArray = [];


$(document).ready(function () {
	init();
	con();
});

function init() {
	$.ajax({
		type: "GET",
		url: "/data",
		async: false,
		success: function (data) {
			// iterate over array of student objects and create usable objects
			peopleArray = data.sigmanauts;
		},
		error: function (xhr) {
			console.log("request failed");
		}
	});
}
// $.each(peopleArray, function (i, val) {
// 	console.log("i " + i, "length " + "val " + val, "val.name " + val.name);
// })

function con() {
	console.log(peopleArray);
}
