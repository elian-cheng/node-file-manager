import goToFile from "../navigation/goToFile.js";
import printFiles from "../navigation/printFiles.js";
import { ERROR_INVALID_INPUT } from "../notifications/errors/errors.js";

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
    default:
      console.error(ERROR_INVALID_INPUT);
      break;
  }
};

export default parseLine;
