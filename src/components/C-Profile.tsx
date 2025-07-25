import { useState } from "react";

export default function EditProfile() {
  const [nameJane, setNameJane] = useState("Jane");
  const [nameJacobs, setNameJacobs] = useState("Jacobs");
  const [editMode, setEditMode] = useState(true);
  const [resultText, setResultText] = useState("Hello, Jane Jacobs");

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <label>
        First name:
        {editMode ? (
          <input
            onChange={(e) => setNameJane(e.target.value)}
            defaultValue={nameJane ? nameJane : ""}
          />
        ) : (
          <b>{nameJane}</b>
        )}
      </label>
      <label>
        Last name:
        {editMode ? (
          <input
            onChange={(e) => setNameJacobs(e.target.value)}
            defaultValue={nameJacobs ? nameJacobs : ""}
          />
        ) : (
          <b>{nameJacobs}</b>
        )}
      </label>
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setEditMode(!editMode);
          setResultText(nameJane + " " + nameJacobs);
        }}
      >
        Edit Profile
      </button>
      <p>
        <i>Hello, {resultText}</i>
      </p>
    </form>
  );
}
