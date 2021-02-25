/*
 * @Author       : dxy
 * @Date         : 2021-02-25 09:00:46
 * @LastEditors  : dxy
 * @LastEditTime : 2021-02-25 09:01:06
 * @Descripttion :
 */
import { atom } from "recoil";

const textState = atom({
  key: "textState", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});

export { textState };
