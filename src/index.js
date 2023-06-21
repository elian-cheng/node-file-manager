import readlinePromises from "readline/promises";
import { homedir } from "os";
import getUserName from "./utils/getUserName.js";
import greeting from "./notifications/messages/greeting.js";
import farewell from "./notifications/messages/farewell.js";
import directoryPath from "./notifications/messages/directoryPath.js";
import executeCommands from "./utils/executeCommands.js";

const init = async () => {
  const userName = getUserName();

  process.chdir(homedir());
  greeting(userName);
  directoryPath();

  const rl = readlinePromises.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.on("line", line => executeCommands(rl, line));
  rl.on("SIGINT", () => rl.close());
  rl.on("close", () => {
    farewell(userName);
    process.nextTick(() => process.exit());
  });
};

await init();
