const path = require("path");
const fs = require("fs");
const rimraf = require("rimraf");
const rcopy = require("recursive-copy");

const directoryPath = __dirname;

// remove all files and all directories except 'dist'
let files = fs.readdirSync(directoryPath);

files.forEach(function (file) {

	const ffp = path.join(directoryPath, file);
	// console.log(ffp, fs.lstatSync(ffp).isDirectory() ? '=> dir' : '=> file');
	
	if (fs.lstatSync(ffp).isDirectory()) {
		if (file !== "dist") {
			console.log("Remove DIR: " + ffp);
			rimraf.sync(ffp);
		}
	} else {
		console.log("Remove FILE: " + ffp);
		fs.unlinkSync(ffp);
	}
});

// Copy the whole 'dist' directory.
let pathSrc = path.join(directoryPath, 'dist');
let pathDest = directoryPath;

files = fs.readdirSync(pathSrc);
const copyPromises = [];

files.forEach(file => {

	const ffpSrc = path.join(pathSrc, file);
	const ffpDest = path.join(pathDest, file);

	if (fs.lstatSync(ffpSrc).isDirectory()) {
		console.log("Copy DIRECTORY from", ffpSrc, 'to', ffpDest);
		copyPromises.push(rcopy(ffpSrc, ffpDest));
	} else {
		console.log("Copy FILE from", ffpSrc, 'to', ffpDest);
		fs.copyFileSync(ffpSrc, ffpDest);
	}
});

// Remove the 'dist directory.
Promise.all(copyPromises).then(() => {

	console.log("All promises resolved.");

	console.log("Remove DIR", pathSrc);
	rimraf.sync(pathSrc);

	console.log("FINISHED");
});