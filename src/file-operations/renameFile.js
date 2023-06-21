import fsp from "fs/promises";
import path from "path";

const renameFile = async ([sourcePath, targetPath]) => {
  const filePath = path.resolve(sourcePath.trim());
  const newFileName = path.resolve(path.dirname(filePath), targetPath.trim());

  return await fsp.rename(filePath, newFileName);
};

export default renameFile;
