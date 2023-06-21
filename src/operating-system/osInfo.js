import os from "os";
import { ERROR_INVALID_INPUT } from "../notifications/errors/errors.js";

const cpuInfo = async () => {
  let cpuNumber = `Amount of CPUS: ${os.cpus().length};`;
  let cpuInfo = os.cpus().map((item, id) => {
    return `Core ${id + 1} info:\n model: ${item.model.trim()};\n clock rate: ${(
      item.speed / 1000
    ).toFixed(1)}GHz; \n`;
  });
  return `${cpuNumber}\n` + cpuInfo.join("");
};

const osInfo = async params => {
  switch (params) {
    case "--EOL":
      console.log(JSON.stringify(os.EOL));
      break;
    case "--cpus":
      console.log(await cpuInfo());
      break;
    case "--homedir":
      console.log(os.homedir());
      break;
    case "--username":
      console.log(os.userInfo().username);
      break;
    case "--architecture":
      console.log(os.arch());
      break;
    default:
      console.error(ERROR_INVALID_INPUT);
      break;
  }
};

export default osInfo;
