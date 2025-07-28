import { useState } from "react";
import type { Contact } from "./Msessenger";
import type { Action } from "./messengerReducer";

export default function Chat({
  contact,
  message,
  dispatch,
}: {
  contact: Contact;
  message: string;
  dispatch: React.ActionDispatch<[action: Action]>;
}) {
  return (
    <section className="chat">
      <textarea
        value={message}
        placeholder={"Chat to " + contact.name}
        onChange={(e) => {
          dispatch({
            type: "edited_message",
            message: e.target.value,
          });
        }}
      />
      <br />
      <button
        onClick={(e) => {
          alert(contact.email + " " + message);
          dispatch({
            type: "send_message",
          });
        }}
      >
        Send to {contact.email}
      </button>
    </section>
  );
}
