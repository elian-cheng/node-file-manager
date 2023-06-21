import fsp from "fs/promises";
import path from "path";
import copyFile from "./copyFile.js";

const moveFile = async ([sourcePath, targetPath]) => {
  await copyFile([sourcePath, targetPath]);
  const sourcePathResolved = path.resolve(sourcePath.trim());
  await fsp.rm(sourcePathResolved);
};

export default moveFile;
