import { ERROR_OPERATION_FAILED } from "../notifications/errors/errors.js";
import directoryPath from "../notifications/messages/directoryPath.js";
import parseLine from "./parseLine.js";

const executeCommands = async (rl, line) => {
  await parseLine(rl, line).catch(() => console.error(ERROR_OPERATION_FAILED));

  await directoryPath();
};

export default executeCommands;
