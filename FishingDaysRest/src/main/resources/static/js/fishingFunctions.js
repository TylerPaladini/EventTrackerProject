window.addEventListener('load', function(e){
	console.log('document loaded');
	init();
});

function init(){
	document.fishingForm.lookup.addEventListener('click', function(event){
		event.preventDefault();
		var fishingId = document.fishingForm.fishingId.value;
		if(!isNaN(fishingId) && fishingId > 0){
			getFish(fishingId);
		}
	});
	
	document.createForm.create.addEventListener('click', function(e){
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
}
		
		
	
	

// find by id
function getFish(fishingId){
	const xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/fishingdays/' + fishingId);
	
	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4){
			
			if(xhr.status === 200){
				
				let response = xhr.responseText;
				var fish = JSON.parse(response);
				
				displayFishingDay(fish);
				
			} else{
				
				displayFishingDay('Fishing day not found');
			}
		};
	}
	xhr.send();
	
	
}
//find by id
function displayFishingDay(fish){
	var dataDiv = document.getElementById('fishingData');
	dataDiv.textContent = "";
	
	if (typeof(fish) === 'object'){
		console.log("FISH ID " + fish.id)
		
		let idTitle = document.createElement('h1');
		idTitle.textContent = "Fishing day: " + fish.id;
		dataDiv.appendChild(idTitle);
		
		let createdUL = document.createElement('ul');
		dataDiv.appendChild(createdUL);
		
		let location = document.createElement('li');
		location.textContent = "Location: " + fish.location;
		createdUL.appendChild(location);
		
		let fishingStyle = document.createElement('li');
		fishingStyle.textContent = "Fishing Style: " + fish.fishingStyle;
		createdUL.appendChild(fishingStyle);
		
		let fishingMethod = document.createElement('li');
		fishingMethod.textContent = "Fishing Method: " + fish.fishingMode;
		createdUL.appendChild(fishingMethod);
		
		let amountCaught = document.createElement('li');
		amountCaught.textContent = "Number of Fish Caught: " + fish.amountCaught;
		createdUL.appendChild(amountCaught);
		
		let date = document.createElement('li');
		date.textContent = "Date: " + fish.date;
		createdUL.appendChild(date);
		
		}
		
}
		
	// creates a new day
	function createNewDay(fish){
		let xhr = new XMLHttpRequest();
		let fishJson = JSON.stringify(fish);
		xhr.open('POST', 'api/fishingdays');
		xhr.setRequestHeader('Content-type', 'application/json');
		xhr.onreadystatechange = function() {
			if(xhr.readyState === 4 ){
				if(xhr.status === 201){
					let newDay = JSON.parse(xhr.responseText);
					displayFishingDay(newDay);
				}
			}
		};
		xhr.send(fishJson);
	}
	
	
	
	
