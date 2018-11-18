window.addEventListener('load', function(e) {
	console.log('document loaded');
	init();
});

function init() {

	document.fishingForm.lookup.addEventListener('click', function(event) {

		event.preventDefault();
		var fishingId = document.fishingForm.fishingId.value;
		if (!isNaN(fishingId) && fishingId > 0) {
			getFish(fishingId);
		}
	});
	// create a new day
	document.createForm.create.addEventListener('click', function(e) {
		e.preventDefault();
		let form = e.target.parentElement;
		console.log(e.target);
		let fishingDay = {
			location : form.location.value,
			fishingStyle : form.fishingStyle.value,
			fishingMode : form.fishingMode.value,
			amountCaught : form.amountCaught.value
		};
		console.log(fishingDay);
		createNewDay(fishingDay);

	});

	// shows all fishing Days
	let displayAllDays = document.getElementById('showall');
	displayAllDays.addEventListener('click', function(evt) {
		evt.preventDefault();
		console.log("inside init function");
		getAllDays();

	});

}

// get all fishings Days
function getAllDays() {
	const xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/fishingdays');

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {

			if (xhr.status === 200) {

				let response = xhr.responseText;
				console.log("-=----" + response);
				var fishing = JSON.parse(response);

				displayFishingDay(fishing);

			} else {
				displayFishingDay('No days found')
			}
		}
		;
	}
	xhr.send();
}

// find by id
function getFish(fishingId) {
	const xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/fishingdays/' + fishingId);

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {

			if (xhr.status === 200) {

				let response = xhr.responseText;
				var fish = JSON.parse(response);

				displayFishingDay(fish);

			} else {

				displayFishingDay('Fishing day not found');
			}
		}
		;
	}
	xhr.send();

}
// find by id and creating table
function displayFishingDay(fish) {
	var dataDiv = document.getElementById('fishingData');
		dataDiv.textContent = "";

	let createTable = document.createElement('table');
		dataDiv.appendChild(createTable);

	let thead = document.createElement('thead');
		dataDiv.appendChild(thead);

	let tableHeadRow = document.createElement('tr')
		thead.appendChild(tableHeadRow);

	let tableHeadData1 = document.createElement('th');
		tableHeadData1.textContent = "ID"
		tableHeadRow.appendChild(tableHeadData1);

	let tableHeadData2 = document.createElement('th');
		tableHeadData2.textContent = "LOCATION"
		tableHeadRow.appendChild(tableHeadData2);

	let tableHeadData3 = document.createElement('th');
		tableHeadData3.textContent = "FISHING STYLE"
		tableHeadRow.appendChild(tableHeadData3);

	let tableHeadData4 = document.createElement('th');
		tableHeadData4.textContent = "FISHING MODE"
		tableHeadRow.appendChild(tableHeadData4);

	let tableHeadData5 = document.createElement('th');
		tableHeadData5.textContent = "AMOUNT CAUGHT"
		tableHeadRow.appendChild(tableHeadData5);

	let tableHeadData6 = document.createElement('th');
		tableHeadData6.textContent = "DATE";
		tableHeadRow.appendChild(tableHeadData6);

	let createdTableBody = document.createElement('tbody');
		createdTableBody.setAttribute('id', 'tableBody');
		createTable.appendChild(createdTableBody);

	if(Array.isArray(fish)){
	for ( var i = 0; i < fish.length; i++){
	console.log("FOr loops for fish " + i);
	printFishDays(fish[i]);
	}
	}
	else if(typeof(fish) === 'object'){
	console.log("Fish object ");
	printFishDays(fish);
	}
	else{
	console.log("NO days found");
	printFishDays("No days found")
	}

	function printFishDays(fish){

		let createdTableBodyPrint = document.getElementById('tableBody')

		let createdTableBodyRow = document.createElement('tr');
			createdTableBodyPrint.appendChild(createdTableBodyRow);

		let createCellFishID = document.createElement('td');
			createCellFishID.textContent = fish.id;
			createdTableBodyPrint.appendChild(createCellFishID);

		let createFishLocation = document.createElement('td');
			createFishLocation.textContent = fish.location;
			createdTableBodyPrint.appendChild(createFishLocation);

		let createFishingStyle = document.createElement('td');
			createFishingStyle.textContent = fish.fishingStyle;
			createdTableBodyPrint.appendChild(createFishingStyle);

		let createFishingMode = document.createElement('td');
			createFishingStyle.textContent = fish.fishingMode;
			createdTableBodyPrint.appendChild(createFishingMode);

		let createAmountCaught = document.createElement('td');
			createAmountCaught.textContent = fish.amountCaught;
			createdTableBodyPrint.appendChild(createAmountCaught);

		let createDate = document.createElement('td');
		createDate.textContent = fish.date;
		createdTableBodyPrint.appendChild(createDate);

	}

}



// if (typeof(fish) === 'object'){
// console.log("FISH ID " + fish.id)
//
// let idTitle = document.createElement('h1');
// idTitle.textContent = "Fishing day: " + fish.id;
// dataDiv.appendChild(idTitle);
//
// let createdUL = document.createElement('ul');
// dataDiv.appendChild(createdUL);
//
// let location = document.createElement('li');
// location.textContent = "Location: " + fish.location;
// createdUL.appendChild(location);
//
// let fishingStyle = document.createElement('li');
// fishingStyle.textContent = "Fishing Style: " + fish.fishingStyle;
// createdUL.appendChild(fishingStyle);
//
// let fishingMethod = document.createElement('li');
// fishingMethod.textContent = "Fishing Method: " + fish.fishingMode;
// createdUL.appendChild(fishingMethod);
//
// let amountCaught = document.createElement('li');
// amountCaught.textContent = "Number of Fish Caught: " + fish.amountCaught;
// createdUL.appendChild(amountCaught);
//
// let date = document.createElement('li');
// date.textContent = "Date: " + fish.date;
// createdUL.appendChild(date);
//
// }

// creates a new day
function createNewDay(fish) {
	let xhr = new XMLHttpRequest();
	let fishJson = JSON.stringify(fish);
	xhr.open('POST', 'api/fishingdays');
	xhr.setRequestHeader('Content-type', 'application/json');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 201) {
				let newDay = JSON.parse(xhr.responseText);
				displayFishingDay(newDay);
			}
		}
	};
	xhr.send(fishJson);
}
