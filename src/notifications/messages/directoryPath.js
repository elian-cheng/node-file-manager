import { cwd } from "process";

const directoryPath = async () => console.log(`\nYou are currently in ${cwd()}`);

export default directoryPath;
