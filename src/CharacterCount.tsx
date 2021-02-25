/*
 * @Author       : dxy
 * @Date         : 2021-02-25 08:58:02
 * @LastEditors  : dxy
 * @LastEditTime : 2021-02-25 09:04:04
 * @Descripttion :
 */
import React from "react";
import { selector, useRecoilValue } from "recoil";
import { textState } from "./recoil/textAtom";

const charCountState = selector({
  key: "charCountState", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const text = get(textState);

    return text.length;
  },
});

function CharacterCount() {
  const count = useRecoilValue(charCountState);

  return <>Character Count: {count}</>;
}

export default CharacterCount;
