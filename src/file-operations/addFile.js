import fsp from "fs/promises";
import path from "path";

const addFile = async ([...fileName]) => {
  const pathToAdd = path.resolve(`${process.cwd()}/${fileName.join(" ")}`);
  await fsp.writeFile(pathToAdd, "", { flag: "wx+" });
};
export default addFile;
