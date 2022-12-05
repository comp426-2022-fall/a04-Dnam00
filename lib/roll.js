#!/usr/bin/env node
//roll.js
//import minimist from "minimist";

export function roll(sides, dice, rolls) {
	let results = [];
	//const arrayfull = [];
	//var sides = sidesf;
	//var dice = 0;
	//var rolls = rollsf;
	//var numberdice = 0;
	//arrayfull[0] = sides;
	//arrayfull[1] = dice;
	//arrayfull[2] = rolls;
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
	//let arrayfull = {
//		sides: sidesf,
//		dice : dicef,
//		rolls : rollsf,
//		results : results
//	}
	//return JSON.stringify(arrayfull);
	//return arrayfull;
	return {"sides": sides, "dice": dice, "rolls": rolls, "results":results};
}
//export {roll};
