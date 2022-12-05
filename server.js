#!/usr/bin/env node


import minimist from "minimist";
import express from "express";
import {roll} from "../lib/roll.js";



const app = express();
const args = minimist(process.agrv.slice(2));
const port = args.port || 5000;

//http header
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/app/", function(req, res) => {
	res.status(200);	
	res.send("200 OK");	
});
// case is made below
//app.get("/app/roll/", function(req, res) => {	
//	res.send(roll(6,2,1));
//});

// base case for 6, 2, 1 and taking the data body for sides, dice, and rolls
app.get("/app/roll/", function(req, res) => {
	let sides = parseint( req.body.sides) || 6;
	let dice =  parseint( req.body.dice) || 2;
	let rolls = parseint( req.body.rolls) || 1;
	res.send(roll(sides, dice, rolls)).end();
});
//  returns JSON whatever sides is specified in parameter
app.get("/app/roll/:sides/", function(req, res) => {
	let sides = parseint(req.params.sides);
	let dice = 2;
	let rolls = 1;
	res.send(roll(sides,dice,rolls)).end();
});
//  returns JSON whatever sides and number of dices is specified in parameter
app.get("/app/roll/:sides/:dice/", function(req, res) => {
	let sides = parseint(req.param.sides);
	let dice = parseint(req.param.dice);
	let rolls = 1;
	res.send(roll(sides,dice,rolls)).end();
});
//  returns JSON whatever sides, number of dices, and number of rolls specified in parameter
app.get("/app/roll/:sides/:dice/:rolls/", function(req, res) => {
	let sides = parseint(req.param.sides);
	let dice = parseint(req.param.dice);
	let rolls = parseint(req.param.rolls);
	res.send(roll(sides,dice,rolls)).end();
});

//app.get("/", function(req, res) {
//	res.send();
//});

// any endpoints not defined
app.use((req, res) => {
	res.status(404).send("404 NOT FOUND").end();
});


app.listen(port);
