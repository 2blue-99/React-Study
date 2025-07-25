import { useState } from "react";

export default function TestComponent() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 onClick={() => setCount(count + 1)}>ㅇㅇㅇ{count}ㅇㅇㅇ</h1>
    </>
  );
}
