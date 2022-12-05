#!/usr/bin/env node
//roll.js
//import minimist from "minimist";

export default function roll(sidesf, dicef, rollsf) {
	const results = [];
	//const arrayfull = [];
	var sides = sidesf;
	var dice = 0;
	var rolls = rollsf;
	var numberdice = 0;
	arrayfull[0] = sides;
	arrayfull[1] = dice;
	arrayfull[2] = rolls;
	for (let i = 0; i < rollsf; i++) {
		for (let z = 0; z < dicef; z++) {
			numberdice = (1 + Math.floor(Math.random() * sidesf));
			dice = dice + numberdice;
		}
		results[i] = dice;
		var dice = 0;
		var numberdice = 0;
	}
	//arrayfull[3] = results;
	//return arrayfull;
	let arrayfull = {
		sides: sidesf,
		dice : dicef,
		rolls : rollsf,
		results : results
	}
	return JSON.stringify(arrayfull);
	//return arrayfull;
}
//export roll;
