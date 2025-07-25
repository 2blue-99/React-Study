import { useState } from "react";

// export default Square
// { value = 7 }: { value: number }
export default function Square({
  value,
  onSquareClick,
}: {
  value: String | null;
  onSquareClick: () => void;
}) {
  // const [value, setValue] = useState("_")

  return (
    <button className="square-button" onClick={onSquareClick}>
      {value}
    </button>
  );
}
