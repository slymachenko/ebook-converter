"use strict";
const eBookConverter = require("node-ebook-converter");
const fs = require("fs");
const outputExt = "pdf";
fs.readdir(`./files/input/`, (err, files) => {
    if (err) {
        console.error(err);
    }
    else {
        files.forEach((file) => {
            if (!fs.existsSync("./files/output"))
                fs.mkdirSync("./files/output");
            eBookConverter
                .convert({
                input: `../files/input/${file}`,
                output: `../files/output/${file.split(".").slice(0, -1)}.${outputExt}`,
            })
                .then((res) => console.log(res))
                .catch((err) => console.error(err));
        });
    }
});
