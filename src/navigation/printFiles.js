import { readdir } from "fs/promises";
import { cwd } from "process";
import { ERROR_OPERATION_FAILED } from "../notifications/errors/errors.js";
import sortASC from "../utils/sortAsc.js";

const printFiles = async () => {
  try {
    const currentDir = cwd();
    const items = await readdir(currentDir, { withFileTypes: true });
    const folders = [];
    const files = [];

    items.forEach(item => {
      const element = {
        name: item.name,
        type: item.isFile() ? "file" : "directory"
      };

      item.isFile() ? files.push(element) : folders.push(element);
    });

    console.table([...sortASC(folders), ...sortASC(files)]);
  } catch (err) {
    console.error(ERROR_OPERATION_FAILED);
  }
};

export default printFiles;
