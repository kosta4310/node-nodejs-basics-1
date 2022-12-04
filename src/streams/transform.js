import { Transform } from "node:stream";
import path from "path";
import { stdin, stdout } from "node:process";
import { getDirname } from "../additional/funcDirname.js";

const __dirname = getDirname(import.meta.url);

const transform = async () => {
  const transformStream = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, String(chunk).trim().split("").reverse().join("") + "\n");
    },
  });

  stdin.pipe(transformStream).pipe(stdout);
};

await transform();
