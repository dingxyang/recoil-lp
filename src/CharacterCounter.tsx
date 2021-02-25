/*
 * @Author       : dxy
 * @Date         : 2021-02-25 08:56:47
 * @LastEditors  : dxy
 * @LastEditTime : 2021-02-25 09:01:44
 * @Descripttion :
 */
import React from "react";
import { atom, useRecoilState } from "recoil";
import CharacterCount from "./CharacterCount";
import { textState } from "./recoil/textAtom";

function CharacterCounter() {
  return (
    <div>
      <TextInput />
      <CharacterCount />
    </div>
  );
}

function TextInput() {
  const [text, setText] = useRecoilState(textState);

  const onChange = (event: any) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  );
}

export default CharacterCounter;
