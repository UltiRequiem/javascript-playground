import { copyFile } from "fs";

function copy(file, newPath) {
  copyFile(
    file.replace("~", process.env.HOME),
    newPath,
    (err) => err ? console.error(err) : console.log("Done!"),
  );
}

export default copy;
