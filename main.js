$(document).ready(function () {
	$("#button").on("click", function (e) {
		e.preventDefault();
		var a = parseFloat($("#a").val());
		var b = parseFloat($("#b").val());

		var add = addition(a, b);
		var sub = subtraction(a, b);
		var mult = multiplication(a, b);
		var divide = division(a, b);

		$("#sum").val(add);
		$("#difference").val(sub);
		$("#product").val(mult);
		$("#quotient").val(divide);
	})

	$("#reset").on("click", function (e) {
		e.preventDefault();
		location.reload();
	})

	// $("#sum").keyup(function(){
	// 	$('#sum').keyup(add);
	// })

});

function addition(a, b) {
	var add = a + b;
	return add;
}

function subtraction(a, b) {
	var sub = a - b;
	return sub;
}

function multiplication(a, b) {
	var mult = a * b;
	return mult;
}

function division(a, b) {
	var divide = a / b;
	return divide;
}
