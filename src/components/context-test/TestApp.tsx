import { createContext, useContext, useReducer, useState } from "react";

export default function TestApp() {
  const [number, dispatch] = useReducer(testReducer, 100);
  return (
    <FontSizeContext value={number}>
      <ParentsHeader />
      <button onClick={() => dispatch({ type: "change_16px", size: 16 })}>
        {" "}
        TestApp{" "}
      </button>
    </FontSizeContext>
  );
}

function ParentsHeader() {
  return (
    <>
      <p style={{ fontSize: "24px" }}>이 텍스트는 24px입니다</p>
      <MidHeader />
    </>
  );
}

function MidHeader() {
  return (
    <>
      <p style={{ fontSize: "20px" }}>이 텍스트는 20px 입니다.</p>
      <LastHeader />
    </>
  );
}

function LastHeader() {
  const size = useContext(FontSizeContext);
  return (
    <>
      <p style={{ fontSize: "16px" }}>이 텍스트는 {size} 입니다.</p>
    </>
  );
}

export const FontSizeContext = createContext(24);

type Action2 =
  | { type: "change_24px"; size: 24 }
  | { type: "change_16px"; size: 16 };

export function testReducer(state: number, action2: Action2) {
  switch (action2.type) {
    case "change_16px": {
      return action2.size;
    }
    case "change_24px": {
      return action2.size;
    }
    default: {
      throw Error("Unknown action: ");
    }
  }
}
