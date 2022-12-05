#!/usr/bin/env node

import minimist from "minimist"
import express from "express"
import {roll} from "./lib/roll.js"


const app = express();
const args = minimist(process.argv.slice(2),{
	default: {
		port: 5000
	},
});
//const port = args.port || 5000;

//http header
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/app/", (req, res) => {
	res.status(200);	
	res.send("200 OK");	
});
// case is made below
app.get("/app/roll/", (req, res) => {	
	res.send(roll(6,2,1));
});

// base case for 6, 2, 1 and taking the data body for sides, dice, and rolls
app.post("/app/roll/", (req, res, next) => {
	let sides = parseInt(req.body.sides) || 6;
	let dice =  parseInt(req.body.dice) || 2;
	let rolls = parseInt(req.body.rolls) || 1;
	res.send(roll(sides, dice, rolls)).end();
});
//  returns JSON whatever sides is specified in parameter
app.get("/app/roll/:sides/", (req, res, next) => {
	let sides = parseInt(req.params.sides);
	let dice = 2;
	let rolls = 1;
	res.send(roll(sides,dice,rolls)).end();
});
//  returns JSON whatever sides and number of dices is specified in parameter
app.get("/app/roll/:sides/:dice/", (req, res, next) => {
	let sides = parseInt(req.params.sides);
	let dice = parseInt(req.params.dice);
	let rolls = 1;
	res.send(roll(sides,dice,rolls)).end();
});
//  returns JSON whatever sides, number of dices, and number of rolls specified in parameter
app.get("/app/roll/:sides/:dice/:rolls/", (req, res, next) => {
	let sides = parseInt(req.params.sides);
	let dice = parseInt(req.params.dice);
	let rolls = parseInt(req.params.rolls);
	res.send(roll(sides,dice,rolls)).end();
});

//app.get("/", function(req, res) {
//	res.send();
//});

// any endpoints not defined
app.use((req, res) => {
	res.status(404).send("404 NOT FOUND").end();
});


app.listen(args.port, () => {
	console.log("Server listening on port %s", args.port);
});
