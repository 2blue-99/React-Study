import { useState } from "react";

export default function Picture() {
  const [active, setActive] = useState(false);

  return (
    <div
      onClick={() => {
        console.log("true");
        setActive(true);
      }}
      className="center-layout"
      style={{
        width: "100%",
        background: active ? "white" : "black",
        transition: "background 0.5s ease", // ✅ 배경색 변경 애니메이션
      }}
    >
      <img
        onClick={(e) => {
          console.log("false");
          e.stopPropagation();
          setActive(false);
        }}
        src="https://i.imgur.com/5qwVYb1.jpeg"
      />
    </div>
  );
}
