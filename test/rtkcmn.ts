
import * as rtk from "../binding/rtk";

console.log("starting");
import tape = require("tape");
import chalk = require("chalk");
import util = require("util");


let errorColor = chalk.red.bold;
let okColor = chalk.green.bold;
let level = 0;


function tablevel() {
	let retval = "";
	for (let i = 0; i < level; i++) {
		retval += "\t";
	}
	return retval;
}

let results = {
	passed: 0,
	failed: 0
};

let tapestream = tape.createStream({ objectMode: true });

interface IDataRow {
	type: string;
	ok: boolean;
	operator: string;
	actual: any;
	expected: any;
	id: string;
	name: string;
}

tapestream.on("data", (row: IDataRow) => {
	// console.log(JSON.stringify(row));
	if (typeof row === typeof "") {
		console.log(tablevel() + row);
	}
	else if (row.type === "end") {
		console.log();
		level--;
	}
	else if (row.type === "test") {
		level++;
		console.log();
		console.log(tablevel() + "%d. Testing %s", row.id, row.name);
	}
	else {
		if (row.ok) {
			results.passed++;
			console.log(tablevel() + okColor("%d. \t %s \t %s"), row.id, row.ok, row.name);
			if (row.operator === "throws" && row.actual !== undefined) {
				console.log(tablevel() + okColor(" threw: %s"), row.actual);
			}
		}
		else {
			results.failed++;
			console.log(tablevel() + errorColor("%d. \t %s \t %s"), row.id, row.ok, row.name);
			console.log(tablevel() + errorColor("\t expected: %s actual: %s"), row.expected, row.actual);
		}
	}
});

tapestream.on("end", () => {
	console.log("passed:", results.passed);
	console.log("failed:", results.failed);
});



// function showObject(tobj: any) {
// 	let objstr = JSON.stringify(tobj, null, "\t");
// 	let showObjectContents = false;
// 	if (showObjectContents) {
// 		console.log(objstr);
// 	} else {
// 		console.log("object size: " + objstr.length);
// 	}
// }


tape("rtkcmn", (t) =>{
	t.equal(33, rtk.satno(rtk.NAVIGATION_SYSTEM.GLO, 1), "satno glo 1");
	t.end();
});