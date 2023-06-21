import path from "path";

const resolvePath = pathToFile => {
  let parsedPath = pathToFile
    .join(" ")
    .split('"')
    .map(i => i.replace(`"`, ""))
    .join("");

  return path.resolve(parsedPath);
};

export default resolvePath;
