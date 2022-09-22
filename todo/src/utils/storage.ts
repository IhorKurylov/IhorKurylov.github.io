import { EncryptStorage } from "encrypt-storage";

const { REACT_APP_ENCRYPT } = process.env;
// @ts-ignore
export const encryptStorage = new EncryptStorage(REACT_APP_ENCRYPT);
