import resolvePath from "../utils/resolvePath.js";

const goToFile = async ([...pathToFile]) => {
  process.chdir(resolvePath(pathToFile));
};

export default goToFile;
