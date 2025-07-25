import { useState } from "react";

export default function ChallengeField() {
  const [reverse, setReverse] = useState(false);
  let checkbox = (
    <label>
      <input
        type="checkbox"
        checked={reverse}
        onChange={(e) => setReverse(e.target.checked)}
      />
      Reverse order
    </label>
  );
  if (reverse) {
    return (
      <>
        <Field key={"1"} label="Last name" />
        <Field key={"2"} label="First name" />
        {checkbox}
      </>
    );
  } else {
    return (
      <>
        <Field key={"2"} label="First name" />
        <Field key={"1"} label="Last name" />
        {checkbox}
      </>
    );
  }
}

function Field({ label }: { label: string }) {
  const [text, setText] = useState("");
  return (
    <label>
      {label}:{" "}
      <input
        type="text"
        value={text}
        placeholder={label}
        onChange={(e) => setText(e.target.value)}
      />
    </label>
  );
}
