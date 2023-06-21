import addFile from "../file-operations/addFile.js";
import copyFile from "../file-operations/copyFile.js";
import moveFile from "../file-operations/moveFile.js";
import readFile from "../file-operations/readFile.js";
import removeFile from "../file-operations/removeFile.js";
import renameFile from "../file-operations/renameFile.js";
import calculateHash from "../hash-calculation/calculateHash.js";
import goToFile from "../navigation/goToFile.js";
import printFiles from "../navigation/printFiles.js";
import { ERROR_INVALID_INPUT } from "../notifications/errors/errors.js";
import osInfo from "../operating-system/osInfo.js";

const parseLine = async (rl, line) => {
  let [command, ...args] = line.trim().split(" ");

  switch (command) {
    case ".exit":
      rl.close();
      break;
    case "up":
      process.chdir("..");
      break;
    case "cd":
      await goToFile(args);
      break;
    case "ls":
      await printFiles();
      break;
    case "cat":
      await readFile(args);
      break;
    case "add":
      await addFile(args);
      break;
    case "rn":
      await renameFile(args);
      break;
    case "cp":
      await copyFile(args);
      break;
    case "mv":
      await moveFile(args);
      break;
    case "rm":
      await removeFile(args);
      break;
    case "os":
      await osInfo(...args);
      break;
    case "hash":
      await calculateHash(args);
      break;
    default:
      console.error(ERROR_INVALID_INPUT);
      break;
  }
};

export default parseLine;
