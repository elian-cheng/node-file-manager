import fs from "fs";
import fsp from "fs/promises";
import path from "path";

const copyFile = async ([sourcePath, targetPath]) => {
  const sourcePathResolved = path.resolve(sourcePath.trim());
  const fileName = path.basename(sourcePathResolved);
  const targetPathResolved = path.resolve(targetPath.trim(), fileName);

  await fsp.access(sourcePathResolved);

  return new Promise((resolve, reject) => {
    const readStream = fs.createReadStream(sourcePathResolved);
    readStream.on("error", err => reject(err));
    const writeStream = fs.createWriteStream(targetPathResolved, { flags: "wx" });
    writeStream.on("error", err => reject(err));
    writeStream.on("close", () => resolve());

    readStream.pipe(writeStream);
  });
};

export default copyFile;
