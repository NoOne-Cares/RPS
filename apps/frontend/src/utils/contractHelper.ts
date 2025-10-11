import fs from "fs";

const contractJson = JSON.parse(fs.readFileSync("./RPS.json", "utf8"));
const abi = contractJson.abi;
const bytecode = contractJson.bytecode.object;

export { abi, bytecode }