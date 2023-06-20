import readlinePromises from "readline/promises";
import getUserName from "./utils/getUserName.js";
import greeting from "./notifications/messages/greeting.js";
import farewell from "./notifications/messages/farewell.js";

const init = async () => {
  const userName = getUserName();

  greeting(userName);

  const rl = readlinePromises.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.on("SIGINT", () => rl.close());
  rl.on("close", () => farewell(userName));
};

await init();
