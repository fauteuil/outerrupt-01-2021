import { atom, selector } from "recoil";

// TODO: set/get initial time value from LocalStroage / DB.
/**
 * Default to 30 minutes
 */
export const selectedActivityState = atom<string>({
  key: "selectedActivityState",
  default: ""
});
