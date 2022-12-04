import { Transform, pipeline } from "node:stream";
import { EOL } from "node:os";
import path from "path";
import { stdin, stdout } from "node:process";
import { getDirname } from "../additional/funcDirname.js";

const __dirname = getDirname(import.meta.url);

const transform = async () => {
  const transformStream = new Transform({
    transform(chunk, callback) {
      callback(null, String(chunk).trim().split("").reverse().join("") + EOL);
    },
  });

  stdin.pipe(transformStream).pipe(stdout);
};

await transform();
