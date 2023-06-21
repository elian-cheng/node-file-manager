import fs from "fs";
import resolvePath from "../utils/resolvePath.js";

const readFile = async ([...pathToFile]) => {
  const pathToRead = resolvePath(pathToFile);
  const readStream = fs.createReadStream(pathToRead, { encoding: "utf-8" });
  for await (const chunk of readStream) {
    console.log(chunk);
  }
};

export default readFile;
