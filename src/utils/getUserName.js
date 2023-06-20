import { argv } from "process";

const getUserName = () => {
  const userName = argv.filter(arg => arg.startsWith("--") && arg.includes("username="));
  return userName.length ? userName[0].slice(userName[0].indexOf("=") + 1) : "User";
};

export default getUserName;
