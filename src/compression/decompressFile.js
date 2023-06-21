import fs from "fs";
import fsp from "fs/promises";
import zlib from "zlib";
import path from "path";
import { ERROR_INVALID_INPUT } from "../notifications/errors/errors.js";

const brotliDecompress = async (source, target) => {
  return new Promise((resolve, reject) => {
    const decompression = zlib.createBrotliDecompress();
    const readStream = fs.createReadStream(source);
    readStream.on("error", err => reject(err));
    const writeStream = fs.createWriteStream(target, { flags: "wx" });
    writeStream.on("error", err => reject(err));
    writeStream.on("close", () => resolve());
    readStream
      .pipe(decompression)
      .on("error", err => reject(err))
      .pipe(writeStream);
  });
};

const decompressFile = async ([sourcePath, targetPath]) => {
  const sourcePathResolved = path.resolve(sourcePath.trim());

  if (!sourcePathResolved.includes(".br")) {
    throw Error(ERROR_INVALID_INPUT);
  }

  const fileName = path.basename(sourcePathResolved);
  const targetPathResolved = path.resolve(targetPath.trim(), fileName.replace(".br", ""));

  await fsp.access(sourcePathResolved);
  await brotliDecompress(sourcePathResolved, targetPathResolved);
};

export default decompressFile;
