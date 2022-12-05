#!/usr/bin/env node
//roll.js
//import minimist from "minimist";

export function roll(sides, dice, rolls) {
	let results = [];
	
	for (let i = 0; i < rolls; i++) {
		//var dice = 0;
		var numberdice = 0;
		for (let z = 0; z < dice; z++) {
			numberdice += (1 + Math.floor(Math.random() * sides));
			//dice = dice + numberdice;
		}
		results[i] = numberdice;
		//var dice = 0;
		//var numberdice = 0;
	}
	//arrayfull[3] = results;
	//return arrayfull;
	let arrayfull = {
		sides: sides,
		dice : dice,
		rolls : rolls,
		results : results
	}
	return JSON.stringify(arrayfull);
	//return arrayfull;
	//return {"sides": sides, "dice": dice, "rolls": rolls, "results":results};
}
//export {roll};
