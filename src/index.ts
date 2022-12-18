const eBookConverter = require("node-ebook-converter");
const fs = require("fs");

const outputExt = "pdf";

fs.readdir(`./files/input/`, (err: Error, files: string[]) => {
  if (err) {
    console.error(err);
  } else {
    files.forEach((file: string) => {
      if (!fs.existsSync("./files/output")) fs.mkdirSync("./files/output");
      eBookConverter
        .convert({
          input: `../files/input/${file}`,
          output: `../files/output/${file.split(".").slice(0, -1)}.${outputExt}`,
        })
        .then((res: string) => console.log(res))
        .catch((err: Error) => console.error(err));
    });
  }
});
