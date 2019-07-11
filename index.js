//Function 1 - Dwarf Roll Call
function dwarfRollCall(dwarves) {
  var array = [];
  for (var i = 0; i < dwarves.length; i++) {
   array.push(`${i + 1}. ${dwarves[i]} `);
  }
  return array.join("");
 }

//Function 2 - Summon Captain Planet
function summonCaptainPlanet(planeteerCalls) {
  //return planeteerCalls.toUpperCase() + "!";
  return planeteerCalls.map(a => a.toUpperCase() + "!");
}

//Function 3 - Long Planeteer Calls
function longPlaneteerCalls(words) {
	for(var i = 0; i < words.length; i++) {
		if(words[i].length > 4) {
			return true;
		}
	}
	return false;
}

//Function 4 - Find the Cheese
function findTheCheese(foods) {
 	var cheese = ["camembert", "cheddar", "gouda"];
 	for(var i = 0; i < foods.length; i++) {
 		for(var x = 0; x < cheese.length; x++){
 			if(foods[i] === cheese[x]) {
 				return cheese[x];
 		  }
 	  }
 	}
 	return "no cheese!";
}

function startsWithB(names) {
  for(var i = 0; i < names.length; i++){
    if(names[i].startsWith("B") {
  }
}
