import { randomBytes } from "crypto";

const generateSalt = (): string =>
    randomBytes(20)
        .toString('base64')
        .replace(/[^a-zA-Z0-9]/g, '')
        .slice(0, length);

export default generateSalt
