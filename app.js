var student = {
	name: "",
	type: "student"
};

document.addEventListener('DOMContentLoaded', contentLoaded);

function contentLoaded(event)
{
	document.getElementById('name').addEventListener("keyup", keyUp);
}

function keyUp(event)
{
	student.name = document.getElementById('name').value;

	calculateNumericOutput(student.name);
}

function calculateNumericOutput(name)
{
	// Calculate value
	var totalNameValue = 0;
	for (var i = 0; i < name.length; i++) {
		totalNameValue += name.charCodeAt(i);
	}
	displayOutput(totalNameValue);	
}

function displayOutput(total)
{
	// Display result
	var output = "Total Numeric value of the person's name is: " + total;
	document.getElementById('output').innerText = output;
}