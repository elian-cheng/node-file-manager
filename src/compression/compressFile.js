import fs from "fs";
import fsp from "fs/promises";
import zlib from "zlib";
import path from "path";

const brotliCompress = async (source, target) => {
  return new Promise((resolve, reject) => {
    const compression = zlib.createBrotliCompress();

    const readStream = fs.createReadStream(source);
    readStream.on("error", err => reject(err));
    const writeStream = fs.createWriteStream(target, { flags: "wx" });
    writeStream.on("error", err => reject(err));
    writeStream.on("close", () => resolve());
    readStream.pipe(compression).pipe(writeStream);
  });
};

const compressFile = async ([sourcePath, targetPath]) => {
  const sourcePathResolved = path.resolve(sourcePath.trim());
  const fileName = path.basename(sourcePathResolved);
  const targetPathResolved = path.resolve(targetPath.trim(), `${fileName}.br`);

  await fsp.access(sourcePathResolved);
  await brotliCompress(sourcePathResolved, targetPathResolved);
};

export default compressFile;
