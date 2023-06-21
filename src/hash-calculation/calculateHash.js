import fsp from "fs/promises";
import crypto from "crypto";
import resolvePath from "../utils/resolvePath.js";

const calculateHash = async ([...pathToFile]) => {
  await fsp
    .readFile(resolvePath(pathToFile), null, { flag: "wx+" })
    .then(data => console.log(crypto.createHash("sha256").update(data).digest("hex")));
};

export default calculateHash;
