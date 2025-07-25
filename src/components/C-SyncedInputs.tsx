import { useState } from "react";

export default function SyncedInputs() {
  const [text, setText] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Input label="First input" text={text} handleChange={handleChange} />
      <Input label="Second input" text={text} handleChange={handleChange} />
    </div>
  );
}

function Input({
  label,
  text,
  handleChange,
}: {
  label: string;
  text: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
}) {
  return (
    <label>
      {label} <input value={text} onChange={handleChange} />
    </label>
  );
}
