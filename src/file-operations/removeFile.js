import fsp from "fs/promises";
import resolvePath from "../utils/resolvePath.js";

const removeFile = async ([...pathToFile]) => {
  await fsp.rm(resolvePath(pathToFile));
};

export default removeFile;
