import fetch from "node-fetch";

fetch("https://randomuser.me/api/?results=30")
    .then((response) => response.json())
    .then((data) => data.results)
    .then((results) => console.log(`We got ${results.length} rows`));

import { readFile } froms "fs";
readFile("thisFileDoesntExists", "utf8", (err, file) => {
    if (err) {
        console.log("We got an error", { err });
    }
    //no error
    console.log(`That file has ${file.split("\n").length} lines`);
});